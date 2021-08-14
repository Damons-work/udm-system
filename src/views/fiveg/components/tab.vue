<!--  -->
<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="MOD_**" name="first"> 这是MOD_LOC </el-tab-pane>
      <el-tab-pane label="MOD_**" name="second">这是MOD_ROAM</el-tab-pane>
      <el-tab-pane label="MOD_**" name="third">这是MOD_TS</el-tab-pane>
      <el-tab-pane label="MOD_**" name="fourth">这是MOD_BS</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      activeName: "first",
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    handleClick() {
      this.$emit("changeTab", this.activeName);
    },
  },
  watch: {},
};
</script>

<style lang='' scoped>
</style>