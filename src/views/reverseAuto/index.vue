<template>
  <div class="cantainer">
    <!-- <el-card> -->
    <el-breadcrumb
      style="margin-bottom: 20px"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>可视化工单管理</el-breadcrumb-item>
      <el-breadcrumb-item>5G反向自动开通统计</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <reverseAutoTable></reverseAutoTable>
    </div>
    <!-- </el-card> -->
  </div>
</template>

<script>
import reverseAutoTable from "@/views/reverseAuto/components/reverseAutoTable";
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },
  components: {
    reverseAutoTable,
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
</style>