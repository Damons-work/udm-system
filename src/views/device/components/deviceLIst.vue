<template>
  <div>
    <div class="header">
      <div style="_input">
        <span class="label">设备标签：</span>
        <el-input style="width: 200px"></el-input>
        <span class="label">设备名称：</span>
        <el-input style="width: 200px"></el-input>
      </div>
      <div class="_inputbtn">
        <el-button type="primary">查找</el-button>
        <el-button type="primary" @click="drawer = true">新增</el-button>
      </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="Id" align="center"> </el-table-column>
      <el-table-column prop="name" label="设备名称" align="center">
      </el-table-column>
      <el-table-column prop="deviceName" label="产品名称" align="center">
      </el-table-column>
      <el-table-column prop="date" label="注册时间" align="center">
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center">
      </el-table-column>
      <el-table-column prop="remark" label="说明" align="center">
      </el-table-column>
      <el-table-column label="功能" align="center">
        <template slot-scope="scope">
          <div>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      > 
      </el-pagination>
    </div>
    <el-drawer title="新增设备" :visible.sync="drawer">
      <deviceInfo @comfim="comfim"></deviceInfo>
    </el-drawer>
  </div>
</template>

<script>
import deviceInfo from "@/views/device/components/deviceInfo";
export default {
  name: "",
  props: [""],
  data() {
    return {
      currentPage1: 1,
      tableData: [
        {
          id: "test-4328",
          name: "test-4328",
          deviceName: "演示设备",
          date: "2020-11-13 21:01:42",
          status: "离线",
          remark: "",
        },
        {
          id: "test-4328",
          name: "test-4328",
          deviceName: "演示设备",
          date: "2020-11-13 21:01:42",
          status: "离线",
          remark: "",
        },
        {
          id: "test-4328",
          name: "test-4328",
          deviceName: "演示设备",
          date: "2020-11-13 21:01:42",
          status: "离线",
          remark: "",
        },
        {
          id: "test-4328",
          name: "test-4328",
          deviceName: "演示设备",
          date: "2020-11-13 21:01:42",
          status: "离线",
          remark: "",
        },
        {
          id: "test-4328",
          name: "test-4328",
          deviceName: "演示设备",
          date: "2020-11-13 21:01:42",
          status: "离线",
          remark: "",
        },
        {
          id: "test-4328",
          name: "test-4328",
          deviceName: "演示设备",
          date: "2020-11-13 21:01:42",
          status: "离线",
          remark: "",
        },
        {
          id: "test-4328",
          name: "test-4328",
          deviceName: "演示设备",
          date: "2020-11-13 21:01:42",
          status: "离线",
          remark: "",
        },
        {
          id: "test-4328",
          name: "test-4328",
          deviceName: "演示设备",
          date: "2020-11-13 21:01:42",
          status: "离线",
          remark: "",
        },
        {
          id: "test-4328",
          name: "test-4328",
          deviceName: "演示设备",
          date: "2020-11-13 21:01:42",
          status: "离线",
          remark: "",
        },
      ],
      drawer: false,
    };
  },
  components: {
    deviceInfo,
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    comfim() {
      this.drawer = false;
    },
  },
  watch: {},
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.label {
  font-size: 15px;
  margin-left: 20px;
}
.el-table {
  margin-top: 20px;
}
.block {
  float: right;
  height: 80px;
  margin-top: 30px;
}
</style>