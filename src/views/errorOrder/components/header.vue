<template>
  <div class="container">
    <el-form
      :model="data"
      :inline="true"
      class="demo-ruleForm"
    >
      <!-- <el-form-item label="id：" prop="id">
        <el-input
          style="width: 200px"
          type="password"
          v-model="data.id"
        ></el-input>
      </el-form-item> -->
      <el-form-item class="condition" label="CostTime：" prop="CostTime">
        <el-date-picker
          v-model="data.costtimr"
          type="daterange"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="select：" prop="select">
        <el-select v-model="data.value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button type="primary">查询</el-button>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      data: {},
      options: [
        {
          value: "1",
          label: "是",
        },
        {
          value: "2",
          label: "否",
        },
      ],
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
.el-button {
  height: 100%;
}
.el-form-item{
  text-align: left;
}
</style>