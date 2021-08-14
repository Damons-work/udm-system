<template>
  <div>
    <el-table :data="roleList" style="width: 100%" border>
      <el-table-column prop="name" label="角色名" align="center">
      </el-table-column>
      <el-table-column prop="hlrsn" label="地市" align="center">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button @click="distributionHanndle(scope.row)">修改</el-button>
          <el-button @click="handle(scope.row)">赋权</el-button>

          <el-button type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
    <el-drawer
      title="修改角色"
      :visible.sync="add"
      width="40%"
      :before-close="handleClose"
    >
      <div><update-role :role="role" @edit="edit"></update-role></div>
    </el-drawer>
    <el-drawer title="角色权限" :visible.sync="roledrawer">
      <el-tree
        :data="navList"
        :props="props"
        node-key="id"
        :default-checked-keys="arr"
        show-checkbox
        ref="tree"
      ></el-tree>
      <el-button
        type="primary"
        style="margin: 20px; float: right"
        @click="getCheckedNodes()"
        >确认</el-button
      >
    </el-drawer>
  </div>
</template>

<script>
import Distribution from "./distribution.vue";
import UpdateRole from "../components/updateRole.vue";
import {
  roleSearchByName,
  roleDelete,
  permissionsAll,
  permissionsSearch,
  editRole,
} from "../../../api/index";
export default {
  name: "",
  props: [""],
  data() {
    return {
      roleList: [],
      drawer: false,
      distribution: {},
      add: false,
      role: "",
      currentPage1: 1,
      total: 0,
      roledrawer: false,
      navList: [],
      arr: [],
      props: {
        label: "label",
        children: "children",
      },
      row: {},
    };
  },
  components: {
    Distribution,
    UpdateRole,
  },
  computed: {},
  beforeMount() {},
  mounted() {
    this.getAllRole();
  },
  methods: {
    handleDelete(row) {
      this.$confirm("此操作将永久删除该角色, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let data = row.id;
          roleDelete(data).then((res) => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getAllRole();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    bind() {
      this.drawer = false;
    },
    distributionHanndle(row) {
      this.role = row;
      this.add = true;
    },
    handleClose() {
      this.add = false;
      this.role = {};
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //获取role列表
    getAllRole() {
      let data = {
        name: this.name || "",
        size: 10,
        page: this.currentPage1 - 1,
      };
      roleSearchByName(data).then((res) => {
        this.roleList = res.data.data.content;
        this.total = res.data.data.totalElements;
      });
    },
    edit() {
      this.add = false;
      this.getAllRole();
    },
    handle(row) {
      this.row = row;
      this.roledrawer = true;
      this.getPermissionsAll();
      permissionsSearch(row.id).then((res) => {
        // 遍历
        let array = res.data.obj;
        this.arr = [];
        array.forEach((element) => {
          this.arr.push(element.id);
        });
      });
    },
    getPermissionsAll() {
      permissionsAll(1).then((res) => {
        console.log(res);
        this.navList = res.data;
      });
    },
    getCheckedNodes() {
      let permissionIds = this.$refs.tree.getCheckedKeys();
      this.row.permissionIds = permissionIds;
      this.row.permissions = [];
      this.row.password = "123456";
      editRole(this.row).then((res) => {
        console.log(res);
        this.$message({
          type: "success",
          message: "修改成功",
        });
        this.roledrawer = false;
      });
    },
  },
  watch: {},
};
</script>

<style scoped>
.block {
  float: right;
  height: 80px;
  margin-top: 30px;
}
</style>