<template>
  <el-container class="index-con">
    <el-aside>
      <Header></Header>
    </el-aside>
    <el-container class="main-con">
      <el-header class="index-header">
        <top-header></top-header>
      </el-header>
      <el-main clss="index-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "../index/components/header";
import TopHeader from "./components/topHeader.vue";
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },
  components: {
    Header,
    TopHeader
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
.el-aside{
  width: auto !important;
}
.index-con {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.aside {
  width: 64px !important;
  height: 100%;
  background-color: #334157;
  margin: 0px;
}
.asideshow {
  width: 240px !important;
  height: 100%;
  background-color: #334157;
  margin: 0px;
}
.index-header,
.index-main {
  padding: 0px;
  border-left: 2px solid #333;
}
</style>