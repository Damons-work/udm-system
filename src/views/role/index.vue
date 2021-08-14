<template>
  <div>
    <el-breadcrumb
      style="margin-bottom: 20px"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统设置</el-breadcrumb-item>
      <el-breadcrumb-item>角色管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container">
      <div class="content">
        <el-form :model="role" label-width="auto">
          <el-form-item label="角色名称：">
            <el-input v-model="role.name" style="width: 200px"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="search()">查询</el-button>
      </div>
      <el-button type="success" @click="add = true">创建</el-button>
    </div>
    <role-table :name="role.name" ref="reflash"></role-table>
    <el-drawer
      title="创建角色"
      :visible.sync="add"
      width="40%"
      :before-close="handleClose"
    >
      <div><add-role @addComplte="addComplte"></add-role></div>
    </el-drawer>
  </div>
</template>

<script>
import RoleTable from "./components/roleTable.vue";
import AddRole from "./components/addRole.vue";
export default {
  name: "",
  props: [""],
  data() {
    return {
      role: {},
      add: false,
    };
  },
  components: { RoleTable, AddRole },
  computed: {},

  beforeMount() {},
  mounted() {},
  methods: {
    handleClose() {
      this.add = false;
      this.role = {};
    },
    addComplte() {
      this.add = false;
      this.role = {};
      this.$refs.reflash.getAllRole();
    },
    search() {
      this.$refs.reflash.getAllRole();
    },
  },
  watch: {},
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content {
  display: flex;
  align-items: center;
}
.el-form-item {
  margin: 20px;
}
.btn {
  display: flex;
  justify-content: center;
  margin: 20px;
}
</style>