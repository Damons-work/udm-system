<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#fff"
  >
    <el-button class="buttonimg">
      <img class="showimg" src="../../../assets/nokia.png" />
    </el-button>
    <el-submenu index="2" class="submenu">
      <!-- <template slot="title">{{user.userRealName}}</template> -->
      <template slot="title">{{ username }}</template>
      <el-menu-item index="2-1">设置</el-menu-item>
      <el-menu-item @click="content()" index="2-2">个人中心</el-menu-item>
      <el-menu-item @click="exit()" index="2-3">退出</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  props: [""],
  data() {
    return {
      username: "",
    };
  },
  components: {},
  computed: {
    breadList() {
      return this.$route.meta || [];
    },
  },
  beforeMount() {},
  mounted() {
    this.username = sessionStorage.getItem("username");
  },
  methods: {
    exit() {
      sessionStorage.clear();

      this.$router.push("/");
      this.$message({
        type: "success",
        message: "退出成功！",
      });
    },
  },
  watch: {},
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  border: none;
}
.submenu {
  float: right;
}
.buttonimg {
  height: 60px;
  background-color: transparent;
  border: none;
}
.showimg {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 5px;
  left: 17px;
}
.showimg:active {
  border: none;
}
</style>