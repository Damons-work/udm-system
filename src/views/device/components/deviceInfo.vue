<template>
  <div>
    <el-form :model="device">
      <el-form-item label="设备名：">
        <el-input
          style="width: 200px"
          v-model="device.name"
          placeholder="请输入设备名"
        ></el-input>
      </el-form-item>
      <div class="btn">
        <el-button type="primary" @click="confim()">确认</el-button>
        <el-button type="primary" @click="confim()">取消</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      device: {},
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
      confim() {
          this.$emit("comfim")
      }
  },
  watch: {},
};
</script>

<style scoped>
.el-form {
  margin: 20px;
}
.btn{
    text-align: center;
}
</style>