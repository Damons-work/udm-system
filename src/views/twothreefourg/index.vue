<template>
  <div>
    <el-breadcrumb
      style="margin-bottom: 20px"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户数据管理</el-breadcrumb-item>
      <el-breadcrumb-item>2/3/4G</el-breadcrumb-item>

    </el-breadcrumb>
    <!-- <el-card class="box-card"> -->
      <Content :active="active" @search="search" />
    <!-- </el-card> -->
    <div style="margin-top: 20px">
      <Response v-if="show" title="基本信息" index="2" />
      <Response v-if="show" title="基本业务" index="3" />
      <Response v-if="show" title="附加业务" index="5" />
      <Response v-if="show" title="CAMEL业务" index="7" />
      <Response v-if="show" title="呼叫及上网限制" index="4" />
      <Response v-if="show" title="数据业务" index="8" />
      <Response v-if="show" title=" VoLTE业务" index="10" />
      <Response v-if="show" title="5G SA业务" index="9" />
      <Response v-if="show" title="用户登录情况" index="1" />
      <!-- <Response v-if="show" title="漫游和闭锁业务" index="6" /> -->
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import Tab from "@/views/volte/components/tab";
import Content from "@/views/configAdmin/components/content";
import Response from "@/components/Response";
import modalTable from "@/views/twothreefourg/components/modalTable";
export default {
  name: "",
  props: [""],
  data() {
    return {
      active: {
        work: [{ key: "", value: "" }],
      },
      show: false,
      page: 1,
      dialog: false,
      activeName: "first",
    };
  },
  components: {
    Tab,
    Content,
    Response,
    modalTable,
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    search() {
      this.show = true;
    },
    handleCurrentChange(val) {
      this.page = val;
    },
  },
  watch: {},
};
</script>

<style scoped>
</style>