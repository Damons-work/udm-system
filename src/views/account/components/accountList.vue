<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="username" label="账户名称" align="center">
      </el-table-column>
      <el-table-column prop="role.name" label="账户权限" align="center">
        <!-- <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)">修改</el-button>
          <el-button @click="handle(scope.$index, scope.row)">赋权</el-button>
          <el-button
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template> -->
      </el-table-column>
      <el-table-column prop="area" label="地市" align="center">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button
            @click="handleEdit(scope.row)"
            v-show="permission.update == true"
            >修改</el-button
          >
          <!-- <el-button @click="handle(scope.$index, scope.row)">赋权</el-button> -->
          <el-button
            type="danger"
            @click="handleDelete(scope.row)"
            v-show="permission.delete == true"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="totalElements"
      >
      </el-pagination>
    </div>
    <el-drawer title="修改" :visible.sync="update" width="25%">
      <div>
        <updateAccount
          :updata="user"
          @updateComplte="updateComplte"
        ></updateAccount>
      </div>
    </el-drawer>
  </div>
</template>

<script>
// import navList from "@/components/navList";
import updateAccount from "@/views/account/components/updateAccount";

import { userAll, userSearchByName, userDelete } from "../../../api/index";
export default {
  name: "",
  props: ["permission"],
  data() {
    return {
      tableData: [],
      drawer: false,
      navList: [],
      currentPage1: 1,
      totalElements: 0,
      update: false,
      user: "",
      name: "",
    };
  },
  components: {
    updateAccount,
  },
  computed: {},
  beforeMount() {},
  mounted() {
    // this.navList = navList;
    this.getUserAll();
  },
  methods: {
    handleDelete(row) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          userDelete(row.id).then((res) => {
            this.getUserAll();
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleClose() {
      this.update = false;
    },
    handle() {
      this.drawer = true;
      this.getPermissionsAll();
    },
    handleEdit(e) {
      console.log(e);
      this.user = e;
      this.update = true;
    },
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    // },
    handleCurrentChange(val) {
      this.currentPage1 = val;
      this.getUserAll();
      console.log(`当前页: ${val}`);
    },
    getUserAll() {
      let data = {
        size: 10,
        page: this.currentPage1 - 1,
        name: this.name,
      };
      userSearchByName(data).then((res) => {
        this.tableData = res.data.content;
        this.totalElements = res.data.totalElements;
      });
    },
    search(e) {
      this.name = e;
      this.currentPage1 = 1;
      this.getUserAll();
    },
    updateComplte() {
      this.update = false;
      this.message({
        type: "success",
        message: "修改成功",
      });
    },
    // getPermissionsAll() {
    //   permissionsAll(1).then((res) => {
    //     console.log(res);
    //     this.navList = res.data;
    //   });
    // },
  },
  watch: {},
};
</script>

<style scoped>
.cell {
  font-size: 40px !important;
  color: rebeccapurple;
}
.block {
  float: right;
  height: 80px;
  margin-top: 30px;
}
</style>