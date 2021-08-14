<!--  -->
<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>业务工单分布统计</span>
    </div>
    <div id="barChart"></div>
  </el-card>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {
    this.drawBarChart();
  },
  methods: {
    drawBarChart() {
      let myChart = this.$echarts.init(document.getElementById("barChart"));
      myChart.setOption({
        title: {
          text: "Service Statistic",
          left: "center"
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar"
          }
        ]
      });
    }
  },
  watch: {}
};
</script>

<style  scoped>
.box-card {
  width: 48%;
  height: 700px;
  position: relative;
}
#barChart {
  width: 600px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>