<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>超时工单统计</span>
    </div>
    <div id="brokenLine"></div>
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
    this.drawBrokenLine();
  },
  methods: {
    drawBrokenLine() {
      let myChart = this.$echarts.init(document.getElementById("brokenLine"));
      myChart.setOption({
        title: {
          text: "Timeout Order Statistic"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["10s Timeout", "5s Timeout", "3s Timeout", "1s Timeout"],
          width: "30%",
          right: "100"
        },
        grid: {
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["00", "01", "02", "03", "04", "05", "06"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "10s Timeout",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "5s Timeout",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "3s Timeout",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "1s Timeout",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      });
    }
  },
  watch: {}
};
</script>

<style scoped>
.box-card {
  width: 48%;
  height: 700px;
  position: relative;
}
#brokenLine {
  width: 600px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>