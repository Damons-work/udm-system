<!--  -->
<template>
  <div class="container">
    <div class="condition">
      <div style="color: #81a185; width: 100px; font-size: 13px">HLRSN</div>
      <el-input style="width: 200px" v-model="form.HLRSN"></el-input>
    </div>
    <div class="condition">
      <div style="color: #81a185; width: 100px; font-size: 13px">Err.Code</div>
      <el-input style="width: 200px" v-model="form.Err_Code"></el-input>
    </div>
    <div class="condition">
      <div style="color: #81a185; width: 100px; font-size: 13px">Operation</div>
      <el-input style="width: 200px" v-model="form.OPERATION"></el-input>
    </div>
    <div class="condition">
      <div style="color: #81a185; width: 100px; font-size: 13px">Err.Desc</div>
      <el-input style="width: 200px" v-model="form.desc"></el-input>
    </div>
    <div class="condition" style="width: 100px">
      <div style="color: #81a185; width: 100px; font-size: 13px">HasError</div>
      <el-checkbox v-model="form.HasError"></el-checkbox>
    </div>
    <div class="condition" style="width: 150px">
      <div style="color: #81a185; width: 150px; font-size: 13px">
        Include Display LST
      </div>
      <el-checkbox v-model="form.IncludeDisplayLST"></el-checkbox>
    </div>
    <div class="condition" style="width: 450px">
      <div style="color: #81a185; width: 90px; font-size: 13px">CostTime</div>
      <el-date-picker
        v-model="form.costtimr"
        type="datetimerange"
        range-separator="-"
      >
      </el-date-picker>
    </div>
    <br />
    <div class="condition" style="width: 450px">
      <div style="color: #81a185; width: 100px; font-size: 13px">TimeLine</div>
      <el-date-picker
        v-model="form.costtimr"
        type="datetimerange"
        range-separator="-"
      >
      </el-date-picker>
    </div>

    <div class="condition btn">
      <!-- <el-button type="primary">重置</el-button> -->
      <el-button type="success" @click="search()">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      form: {},
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    search() {
      this.$emit("search", this.form);
    },
  },
  watch: {},
};
</script>

<style  scoped>
.container {
  width: 99%;
  margin-top: 5px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-wrap: wrap;
}
.condition {
  width: 20%;
  height: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
}
.btn {
  position: absolute;
  right: -200px;
}
</style>