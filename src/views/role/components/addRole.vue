<template>
  <div>
    <el-form :model="role" label-width="100px" :rules="rules" ref="ruleForm">
      <el-form-item label="角色名：" prop="name">
        <el-input v-model="role.name" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="地市：">
        <el-select v-model="role.hlrsn" placeholder="" style="width: 200px">
          <el-option
            v-for="item in ['上海', '北京', '南京']"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input
          type="password"
          v-model="role.password"
          style="width: 200px"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="btn">
      <el-button @click="cancel()">取 消</el-button>
      <el-button type="primary" @click="add('ruleForm')">确 定</el-button>
    </div>
  </div>
</template>

<script>
import { addRole } from "../../../api/index";
export default {
  name: "",
  props: [""],
  data() {
    return {
      role: {},
      newRole: {},
      rules: {
        name: [
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
      },
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    add(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          let data = {
            name: this.role.name,
            password: this.role.password,
          };
          addRole(data).then((res) => {
            this.$message({
              type: "sucess",
              message: "新增成功",
            });
            this.$emit("addComplte");
            this.role = {};
          });
        }
      });
    },
    cancel() {
      this.role = {};
      this.$emit("addComplte");
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