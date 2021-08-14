<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" align="center" header-align="center">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="Day" label="日期">
        <template slot-scope="scope">
          <el-tag type="success">{{ scope.row.Day }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="Hour" sortable label="耗时">
        <template slot-scope="scope">
          <el-tag type="success">{{ scope.row.Hour }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="HLRSN" sortable label="地市">
        <template slot-scope="scope">
          <el-tag type="success">{{ scope.row.HLRSN }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="Total" sortable label="统计"> </el-table-column>
      <el-table-column prop="Failed" sortable label="失败数">
        <template slot-scope="scope">
          <el-tag type="danger">{{ scope.row.Failed }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="ErrCode" sortable label="错误码">
      </el-table-column>
      <el-table-column prop="ErrMsg" sortable label="错误信息"> </el-table-column>
      <el-table-column prop="ErrOperation" sortable label="失败描述">
      </el-table-column>
      <el-table-column prop="ErrNum" sortable label="错误总数"> </el-table-column>
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
          id: "12987122",
          Day: "20210622",
          Hour: "234",
          HLRSN: "3.2",
          Total: 10,
          Failed: 15273,
          ErrCode: 3002,
          ErrMsg: "Subscriber already exist",
          ErrOperation: "Subscriber already exist",
          ErrNum: 10,
        },
      ],
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (row.id)
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
    },
  },
  watch: {},
};
</script>

<style scoped>
</style>