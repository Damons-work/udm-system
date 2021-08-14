<!--  -->
<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span> BOSS派单成功/失败率统计</span>
    </div>
    <div id="myChart"></div>
  </el-card>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      data: [
        { value: 735, name: "Failure" },
        { value: 510, name: "Success" },
      ],
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {
    this.getData();
  },
  methods: {
    drawPieChart(data) {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: {
          text: "Daily Order Statistic",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          bottom: 10,
          left: "center",
          data: ["Failure", "Success"],
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
    //模拟请求
    getData() {
      let data = this.data;
      this.drawPieChart(data);
    },
  },
  watch: {},
};
</script>

<style  scoped>
.box-card {
  width: 48%;
  height: 700px;
  position: relative;
}
#myChart {
  width: 600px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>