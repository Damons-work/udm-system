<!--  -->
<template>
  <div>
    <el-breadcrumb
      style="margin-bottom: 20px"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>可视化图表</el-breadcrumb-item>
    </el-breadcrumb>
    <dashboard></dashboard>
    <div class="chart">
      <pieChart style="margin-top: 10px"></pieChart>
      <speed-chart style="margin-top: 10px"></speed-chart>
      <bar-chart style="margin-top: 10px"></bar-chart>
      <contrast-chart style="margin-top: 10px"></contrast-chart>
      <broken-line-chart style="margin-top: 10px"></broken-line-chart>
    </div>
  </div>
</template>

<script>
import Dashboard from "@/views/chart/components/dashboard";
import pieChart from "@/views/chart/components/pieChart";
import speedChart from "@/views/chart/components/speedChart";
import barChart from "@/views/chart/components/barChart";
import contrastChart from "@/views/chart/components/contrastChart";
import brokenLineChart from "@/views/chart/components/brokenLineChart";
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },
  components: {
    Dashboard,
    pieChart,
    speedChart,
    barChart,
    contrastChart,
    brokenLineChart,
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
.chart {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
}
</style>