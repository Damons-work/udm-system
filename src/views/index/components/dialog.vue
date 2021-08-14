<!--  -->
<template>
  <div>
    <el-dialog title="提示" :visible.sync="show" width="40%" :show-close="false">
      <div class="content">
        <el-form
          :model="user"
          :rules="rules"
          ref="ruleForm"
          label-width="150px"
          class="demo-ruleForm"
        >
          <el-form-item label="Password" prop="oldPassword">
            <el-input v-model="user.oldPassword"></el-input>
          </el-form-item>
          <el-form-item label="Confim Password" prop="newPassword">
            <el-input v-model="user.newPassword"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="btn">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="confim('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["show"],
  data() {
    return {
      rules: {
        oldPassword: [
          { required: true, message: "请输入oldPassword", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        newPassword: [
          { required: true, message: "请输入newPassword", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
      user: {}
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    cancel() {
      this.$emit("back");
    },
    confim(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit("back");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  watch: {}
};
</script>

<style scoped>
.btn {
  text-align: right;
}
</style>