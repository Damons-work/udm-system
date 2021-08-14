<template>
  <el-dialog title="无条件呼转" :visible.sync="dialog" :before-close="close">
    <el-table :data="gridData">
      <el-table-column
        property="adress"
        label="接入点位置"
        width="150"
      ></el-table-column>
      <el-table-column
        property="profilename"
        label="profilename"
        width="200"
      ></el-table-column>
      <el-table-column property="apnname" label="apn名称"></el-table-column>
      <el-table-column property="method" label="计费方式"></el-table-column>
      <el-table-column property="address" label="拜访地信息"></el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
export default {
  name: "",
  props: ["dialog"],
  data() {
    return {
      gridData: [
        {
          adress: "1",
          profilename: "GPRS30",
          apnname: " 3GNET",
          method: "在线计费",
          address: "拜访地接入",
        },
      ],
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    close() {
      this.$emit("close");
    },
  },
  watch: {},
};
</script>

<style scoped>
</style>