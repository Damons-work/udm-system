<template>
  <div class="login_wrap">
    <div class="login" style="background-image: inherit">
      <div class="from_Wrap">
        <div class="desc">
          <div width="70%" style="font-weight: 900; font-size: 40px">NOKIA</div>
          <div
            style="
              color: #fff;
              font-size: 24px;
              font-family: Arial, sans-serif;
              line-height: 32px;
            "
          >
            Edge Compute Platform Manager
          </div>
          <div class="absoluteBottom">© 2021 Nokia</div>
        </div>
        <div class="formCont">
          <div id="notification-area" class="notify"></div>
          <div id="registration-area" class="regis"></div>
          <el-form
            :rules="rules"
            ref="ruleForm"
            class="form"
            size="medium"
            :model="form"
          >
            <el-row>
              <el-col :span="24">
                <el-form-item prop="username">
                  <el-input
                    v-model="form.username"
                    size="medium"
                    placeholder="Username"
                    @keyup.enter="onSubmit('form')"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item prop="password">
                  <el-input
                    v-model="form.password"
                    size="medium"
                    type="password"
                    placeholder="Password"
                    @keyup.enter="onSubmit('form')"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item class="btn-wrap">
                  <el-button
                    type="primary"
                    style="
                      width: 100%;
                      color: #ffffff;
                      background-color: #124191;
                    "
                    size="medium"
                    @click="onSubmit('ruleForm')"
                    >SIGN IN</el-button
                  >
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from "../../api/index";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        type: false,
      },
      editModal: false,
      readAgreement: false,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    //清空缓存
    sessionStorage.clear();
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.form).then((res) => {
            if (res.status == 200) {
              sessionStorage["token"] = res.data.token;
              //缓存用户name
              sessionStorage["username"] = this.form.username
              let user = {
                username: this.form.username,
                token: res.data.token,
              };
              this.$store.dispatch("getUserActions", user);
              this.$message({
                type: "success",
                message: "登录成功！",
              });
              this.$router.push("/index");
            } else {
              debugger;
              console.log(res);
              this.$message({
                type: "error",
                message: "账户密码错误",
              });
            }
          });
        }
      });
    },
    // 测试接口
  },
};
</script>
<style scoped>
.login_wrap {
  width: 100vw;
  height: 100vh;
  font-family: Arial, sans-serif;
  background: url("../../assets/Background_image_Blur.png") center center
    no-repeat;
  margin: 0;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.from_Wrap {
  width: 790px;
  min-height: 480px;
  display: flex;
  border-radius: 5px;
}
.desc {
  flex: 0 55%;
  text-align: left;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(18, 65, 145, 0.7);
  padding: 30px 30px;
  width: 340px;
  color: #fff;
  font-family: "Nokia Pure Text Regular", Arial, sans-serif;
  border-radius: 3px 0px 0px 3px;
  border-radius: 5px 0 0 5px;
  position: relative;
}
.absoluteBottom {
  position: absolute;
  color: #ffffff;
  bottom: 30px;
  font-size: 12px;
  opacity: 0.38;
  font-size: 10px;
  line-height: 13px;
  height: 20px;
}
.flex_r {
  padding: 0 3px;
  text-align: right;
}
.flex {
  display: flex;
  line-height: 40px;
}
.el-input__inner {
  border-style: none none solid none;
}
.form {
  width: 100%;
  height: 220px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 0;
}
.notify {
  max-height: 90px;
  min-height: 70px;
  margin-top: 5px;
  padding: 0 10px;
}
.regis {
  height: 80px;
  margin-top: 20px;
  padding: 0 10px;
}
.formCont {
  flex: 0 70%;
  padding: 20px 30px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0 5px 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
<style >
.el-input__inner {
  border-style: none none solid none;
}
</style>
