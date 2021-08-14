<!--  -->
<template>
  <div>
    <!-- <el-card class="box-card"> -->
      <div class="content">
        <div class="card" style="background-color: #4c87b9;">
          <div class="card-content">
            <div class="num">2890992</div>
            <div class="info">当天工单总数</div>
          </div>
        </div>
        <div class="card" style="background-color:#3faba4">
          <div class="card-content">
            <div class="num">2890992</div>
            <div class="info">当天成功工单总数</div>
          </div>
        </div>
        <div class="card" style="background-color:#d05454">
          <div class="card-content">
            <div class="num">2890992</div>
            <div class="info">当天失败工单总数</div>
          </div>
        </div>
        <div class="card" style="background-color:#c49f47">
          <div class="card-content">
            <div class="num">2890992</div>
            <div class="info">当天执行成功率</div>
          </div>
        </div>
      </div>
    <!-- </el-card> -->
  </div>
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
  mounted() {},
  methods: {},
  watch: {}
};
</script>

<style  scoped>
.content {
  display: flex;
  justify-content: space-between;
}
.card {
  width: 330px;
  height: 120px;
}
.card-content {
  float: right;
  margin: auto;
  text-align: right;
  color: #ffffff;
  margin-top: 20px;
  margin-right: 30px;
}
.num {
  font-size: 30px;
}
.info {
  font-size: 15px;
}
</style>