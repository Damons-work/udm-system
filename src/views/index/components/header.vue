<template>
  <el-menu
    :collapse="collapsed"
    collapse-transition
    :default-active="currentMenu"
    unique-opened
    class="el-menu-vertical-demo"
    background-color="#001529"
    text-color="#bfcbd9"
    active-text-color="#409eff"
  >
    <div class="logobox">
      <div style="titile">UDM MANAGER</div>
      <!-- <img class="logoimg" src="../../../assets/logo.png" alt="" /> -->
    </div>
    <el-menu-item index="/chart">
      <i class="el-icon-location"></i> 可视化图表
    </el-menu-item>
    <template v-for="(item, i) in navList">
      <el-submenu
        :index="item.id + ''"
        :key="i"
        v-if="item.children.length != 0"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <template v-for="(itemChild, a) in item.children">
          <el-menu-item :key="a" v-if="itemChild.children.length == 0">
            <router-link
              :to="{ path: itemChild.id+'', query: { id: itemChild.id } }"
              >{{ itemChild.label }}</router-link
            >
          </el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item v-else :index="item.id + ''" :key="i">
        <i class="el-icon-location"></i>
        <router-link :to="{ path: item.id + '', query: { id: item.id } }">{{
          item.label
        }}</router-link>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
// import { menu } from '../api/userMG'
// import * as nav from "@/components/navList";
import { permissionsJsonSearch, userByName } from "../../../api/index";
export default {
  name: "leftnav",
  data() {
    return {
      collapsed: false,
      navList: [],
      currentMenu: "",
    };
  },
  // 创建完毕状态(里面是操作)
  created() {
    // this.navList = nav.default;
    this.getCurrentMenu();
    // 监听
    // this.$root.Bus.$on("toggle", (value) => {
    //   this.collapsed = !value;
    // });
  },
  mounted() {
    this.getPermissionsAll();
  },
  methods: {
    getCurrentMenu() {
      // 获取当前页面 菜单刷新后能自动选中
      let currentUrl = window.location.href;
      let currentPage = currentUrl.split("/")[4].replace("#", "");
      this.currentMenu = currentPage;
    },
    getPermissionsAll() {
      //先获取用户roleid
      let data = {
        name: sessionStorage.getItem("username"),
      };
      userByName(data).then((res) => {
        permissionsJsonSearch(res.data.role.id).then((res) => {
          console.log(res);
          this.navList = res.data.obj;
        });
      });
    },
  },
};
</script>
<style>
.el-menu-item {
  display: flex;
  align-items: center;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  border: none;
  text-align: left;
}
.el-menu-item-group__title {
  padding: 0px;
}
.el-menu-bg {
  background-color: #1f2d3d !important;
}
.el-menu {
  border: none;
  height: 100%;
}
.logobox {
  color: white;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  padding: 20px 0px;
}
.logoimg {
  height: 40px;
}
.router-link-active {
  text-decoration: none;
  color: #409eff;
}
a {
  text-decoration: none;
  color: #fff;
  width: 100%;
}
</style>