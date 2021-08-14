<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>BOSS派单的小时分布统计</span>
    </div>
    <div id="contrastChart"></div>
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
    this.drawChart();
  },
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(
        document.getElementById("contrastChart")
      );
      myChart.setOption({
        title: {
          text: "Work Order Growth Statistic",
          left: "left"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["Total Order", "Failed Order"],
          right: 10,

        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: ["00", "01", "02", "03", "04", "05"]
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        series: [
          {
            name: "Total Order",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: "Failed Order",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807]
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
#contrastChart {
  width: 600px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>