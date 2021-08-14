<!--  -->
<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>系统执行效率统计</span>
    </div>
    <div id="speedChart"></div>
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
    this.drawSpeedChart();
  },
  methods: {
    drawSpeedChart() {
      let myChart = this.$echarts.init(document.getElementById("speedChart"));
      myChart.setOption({
        title: {
          text: "Transaction Process Speed",
          left: "center"
        },
        series: [
          {
            type: "gauge",
            axisLine: {
              lineStyle: {
                width: 30,
                color: [
                  [0.3, "#67e0e3"],
                  [0.7, "#37a2da"],
                  [1, "#fd666d"]
                ]
              }
            },
            pointer: {
              itemStyle: {
                color: "auto"
              }
            },
            axisTick: {
              distance: -30,
              length: 8,
              lineStyle: {
                color: "#fff",
                width: 2
              }
            },
            splitLine: {
              distance: -30,
              length: 30,
              lineStyle: {
                color: "#fff",
                width: 4
              }
            },
            axisLabel: {
              color: "auto",
              distance: 40,
              fontSize: 20
            },
            detail: {
              valueAnimation: true,
              formatter: "{value}",
              color: "auto"
            },
            data: [
              {
                value: 70
              }
            ]
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
#speedChart {
  width: 600px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>