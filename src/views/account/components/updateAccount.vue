<template>
  <div>
    <el-form :model="updata" label-width="100px" :rules="rules" ref="ruleForm">
      <el-form-item label="账户名：">
        <el-input
          v-model="updata.username"
          style="width: 200px"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input
          type="password"
          v-model="updata.password"
          style="width: 200px"
        ></el-input>
      </el-form-item>
      <el-form-item label="地市：">
        <el-input
          v-model="updata.area"
          style="width: 200px"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="关联角色：">
        <el-select
          v-model="updata.role"
          placeholder=""
          style="width: 200px"
          disabled
        >
          <el-option
            :key="updata.role.id"
            :label="updata.role.name"
            :value="updata.role.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="btn">
      <el-button @click="handleClose()" style="margin-right: 20px"
        >取 消</el-button
      >
      <el-button
        type="primary"
        @click="update('ruleForm')"
        style="margin-left: 20px"
        >确 定</el-button
      >
    </div>
  </div>
</template>

<script>
import { allinuser, changePassword } from "../../../api/index";
export default {
  name: "",
  props: ["updata", "type"],
  data() {
    return {
      newRole: {},
      role: [],
      rules: {
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
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
    update(rulefrom) {
      this.$refs[rulefrom].validate((valid) => {
        if (valid) {
          let data = {
            username: this.updata.username,
            newPassword: this.updata.password,
          };
          changePassword(data).then((res) => {
            this.$message({ 
              type: "success",
              message: "修改成功",
            });
            this.updata = { };
            this.$emit("updateComplte");
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