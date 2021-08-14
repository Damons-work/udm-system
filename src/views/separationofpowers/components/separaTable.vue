<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="账户名" width="180">
      </el-table-column>
      <el-table-column prop="role" label="角色" width="180"> </el-table-column>
      <el-table-column prop="domain" label="domain"> </el-table-column>
      <el-table-column prop="status" label="status">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.status == 1">有效</el-tag>
          <el-tag type="danger" v-else>失效</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="date"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          role: "角色",
          status: "1",
          address: "上海市普陀区金沙江路 1518 弄",
          domain: "111",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          role: "角色",
          status: "2",
          address: "上海市普陀区金沙江路 1517 弄",
          domain: "111",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          role: "角色",
          status: "1",
          address: "上海市普陀区金沙江路 1519 弄",
          domain: "111",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          role: "角色",
          status: "1",
          address: "上海市普陀区金沙江路 1516 弄",
          domain: "111",
        },
      ],
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
</style>