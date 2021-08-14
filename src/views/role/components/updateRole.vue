<template>
  <div>
    <el-form :model="role" label-width="100px" :rules="rules" ref="ruleForm">
      <el-form-item label="角色名：">
        <el-input
          v-model="role.name"
          style="width: 200px"
          :disabled="role.name != undefined"
        ></el-input>
      </el-form-item>
      <el-form-item label="地市：">
        <el-select
          v-model="role.hlrsn"
          placeholder=""
          style="width: 200px"
          :disabled="role.hlrsn != undefined"
        >
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
      <el-button type="primary" @click="edit('ruleForm')">确 定</el-button>
    </div>
  </div>
</template>

<script>
import { editRole } from "../../../api/index";
export default {
  name: "",
  props: ["role"],
  data() {
    return {
      newRole: {},
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
  mounted() {},
  methods: {
    edit(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          let data = {
            password: this.role.password,
            name: this.role.name,
          };
          editRole(data).then((res) => {
            this.$message({
              type: "success",
              message: "修改成功",
            });
            this.$emit("edit");
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