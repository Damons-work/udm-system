<template>
  <div class="container">
    <el-breadcrumb
      style="margin-bottom: 20px"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>可视化工单管理</el-breadcrumb-item>
      <el-breadcrumb-item>错单深度分析</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <el-card> -->
    <Header></Header>
    <!-- </el-card> -->
    <!-- <el-card style="margin-top:20px"> -->
    <div>
      <err-tabele></err-tabele>
    </div>
    <!-- </el-card> -->
  </div>
</template>

<script>
import Header from "@/views/errorOrder/components/header";
import errTabele from "@/views/errorOrder/components/errTabele";
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },
  components: {
    Header,
    errTabele,
  },
  computed: {},
  beforeMount() {},
  mounted() {
    console.log(this.$route.query);
  },
  methods: {},
  watch: {},
};
</script>

<style scoped>
</style>