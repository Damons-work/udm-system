<template>
  <div>
    <el-form :model="updata" label-width="100px" :rules="rules" ref="ruleForm">
      <el-form-item label="账户名：" prop="username">
        <el-input v-model="updata.username" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input
          type="password"
          v-model="updata.password"
          style="width: 200px"
        ></el-input>
      </el-form-item>
      <el-form-item label="地市：" prop="city">
        <el-input v-model="updata.city" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="关联角色：">
        <el-select v-model="updata.role" style="width: 200px">
          <el-option
            v-for="item in role"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="btn">
      <el-button @click="handleClose()" style="margin-right: 20px"
        >取 消</el-button
      >
      <!-- 完成新增操作 -->
      <el-button
        type="primary"
        @click="addUser('ruleForm')"
        style="margin-left: 20px"
        >确 定</el-button
      >
    </div>
  </div>
</template>

<script>
import { allinuser, addUser } from "../../../api/index";
export default {
  name: "",
  props: ["updata"],
  data() {
    return {
      newRole: {},
      role: [],
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 4,
            max: 20,
            message: "长度在 4 到 20 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        city: [
          { required: true, message: "请输入城市", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {
    this.getAllinuser();
  },
  methods: {
    getAllinuser() {
      allinuser().then((res) => {
        this.role = res.data;
      });
    },
    //创建用户
    addUser(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        //校验成功后完成新增操作
        if (valid) {
          //组装数据
          let data = {
            username: this.updata.username,
            password: this.updata.password,
            area: this.updata.city,
            role: {
              id: this.updata.role,
            },
          };
          //完成新增操作
          addUser(data).then((res) => {
            // console.log(res);
            //调用父类刷新列表
            // this.updata = {};
            this.$message({
              type: "success",
              message: "新增成功",
            });
            this.$emit("addComplte");
          });
        }
      });
    },
  },
  watch: {},
};
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  margin: 20px;
}
</style>