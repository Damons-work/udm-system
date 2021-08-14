<!--  -->
<template>
  <div class="container">
    <div style="margin-bottom: 10px">
      <search-header @search="search"></search-header>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        align="center"
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        align="center"
        fixed
        prop="HLRSN"
        label="HLRSN"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="USER"
        label="USER"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="IMSI"
        label="IMSI"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="MSISDN"
        label="MSISDN"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="Operation"
        label="Operation"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="Requset time"
        label="Requset time"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="Cost"
        label="Cost"
      ></el-table-column>
      <el-table-column align="center" prop="Status" label="Status">
        <template slot-scope="scope">
          <div class="border">{{ scope.row.Status }}</div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="Error Msg"
        label="Error Msg"
      ></el-table-column>

      <el-table-column fixed="right" label="Action" width="200">
        <template slot-scope="scope">
          <div
            class="btn"
            @click="handleClick(scope.row)"
            type="text"
            size="small"
          >
            View
          </div>
          <div class="btn-update" type="text" size="small">Export</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import searchHeader from "@/views/visualized/components/searchHeader";

import { workOrder } from "../../../api/index1";
export default {
  name: "",
  props: [""],
  data() {
    return {
      dialogShow: false,
      tableData: [],
      searchProp: {},
    };
  },
  components: {
    searchHeader,
  },
  computed: {},
  beforeMount() {},
  mounted() {
    this.getWorkOrder();
  },
  methods: {
    handleClick(row) {
      this.$emit("showDia", row);
    },
    getWorkOrder() {
      console.log(this.searchProp);

      workOrder(this.searchProp).then((res) => {
        this.tableData = res.data.recordInstanceList;
      });
    },
    search(e) {
      if (!e.HasError) {
        e.HasError = "";
      }
      if (!e.IncludeDisplayLST) {
        e.IncludeDisplayLST = "";
      }
      this.searchProp = e;
      this.getWorkOrder();
    },
  },
  watch: {},
};
</script>

<style scoped>
.container {
  width: 99%;
  margin-top: 20px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
.btn {
  width: 60px;
  text-align: center;
  border-radius: 5px;
  border-left: 5px solid #5098d6;
  display: inline-block;
}
.btn-update {
  width: 60px;
  text-align: center;
  background: #e5e5e5;
  border-radius: 5px;
  border-left: 5px solid #51a39a;
  display: inline-block;
  margin-left: 20px;
}
.border {
  width: 70px;
  background: #65b4ae;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  margin: auto;
}
</style>