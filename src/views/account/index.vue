<template>
  <div>
    <el-breadcrumb
      style="margin-bottom: 20px"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统设置</el-breadcrumb-item>
      <el-breadcrumb-item>账户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container">
      <div class="content">
        <el-form ref="form" :model="account" label-width="auto">
          <el-form-item label="账户名：">
            <el-input
              v-model="account.name"
              style="width: 200px"
              placeholder="请输入账户名"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button
          type="primary"
          @click="search()"
          v-show="permission.query == true"
          >查询</el-button
        >
      </div>
      <el-button
        type="primary"
        @click="add = true"
        v-show="permission.insert == true"
        >创建</el-button
      >
    </div>
    <account-list @update="update" ref="search" :permission="permission"></account-list>
    <el-drawer
      title="创建"
      :visible.sync="add"
      width="25%"
      :before-close="handleClose"
    >
      <div>
        <add-account :updata="user" @addComplte="addComplte"></add-account>
      </div>
    </el-drawer>
  </div>
</template> 

<script>
import accountList from "@/views/account/components/accountList";
import AddAccount from "./components/addAccount.vue";
import { sonPermission, userByName } from "../../api/index";
export default {
  name: "",
  props: [""],
  data() {
    return {
      account: {},
      add: false,
      title: "创建用户",
      user: {},
      permission: {
        query: false,
        changePassword: false,
        delete: false,
        insert: false,
        update: false,
      },
    };
  },
  components: {
    accountList,
    AddAccount,
  },
  computed: {},
  beforeMount() {},
  mounted() {
    this.getRolePermission();
  },
  methods: {
    update(e) {
      this.title = "修改用户";
      this.user = e;
      console.log(e);
      this.add = true;
    },
    handleClose() {
      this.user = {};
      this.title = "创建用户";
      this.add = false;
    },
    search() {
      this.$refs.search.search(this.account.name);
    },
    addComplte() {
      this.$refs.search.search();
      this.add = false;
      this.user = {};
    },
    //查看用户权限
    getRolePermission() {
      let data = {
        name: sessionStorage.getItem("username"),
      };
      userByName(data).then((res) => {
        let roleId = res.data.role.id;
        let permissId = this.$route.query.id;
        let data = {
          roleId,
          permissId,
        };
        sonPermission(data).then((res) => {
          let arr = [];
          res.data.obj.forEach((ele) => {
            console.log(ele.title == "查询");
            if (ele.title == "查询") {
              this.permission["query"] = true;
            }
            if (ele.title == "修改密码") {
              this.permission.changePassword = true;
            }
            if (ele.title == "删除") {
              this.permission.delete = true;
            }
            if (ele.title == "新增") {
              this.permission.insert = true;
            }
            if (ele.title == "编辑") {
              this.permission.update = true;
            }
          });
          console.log(this.permission);
        });
      });
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
</style>