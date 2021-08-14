<!--  -->
<template>
  <div class="header">
    <div class="pageTop">
      <div class="crumbs">
        <label class="gre" style="margin-left:20px" @click="goPage('index')">首页</label>
      </div>
    </div>
    <div class="right">
      <div class="account" v-on:mouseover="changeLoinOut(true)">
        admin
        <label
          class="el-icon-switch-button"
          style="margin-right:5px"
          @click="goPage('login')"
        >退出登录</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      topDesc: {
        name: "",
        desc: ""
      }
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    goPage(page) {
      this.$router.push(page);
    }
  },
  watch: {}
};
</script>

<style scoped>
.header {
  height: 75px;
  background: #fff;
  box-shadow: 1px 0 5px #d8d4d4;
  display: flex;
  margin: 10px;
}
.crumbs {
  line-height: 75px;
}
.pageTop {
  flex: 0 30%;
}
.right {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 0 70%;
}
.account {
  position: absolute;
  right: 25px;
  cursor: pointer;
}
.loginOut {
  cursor: pointer;
  position: absolute;
  bottom: -61px;
  border: 1px solid #efe5e5;
  right: -7px;
  line-height: 35px;
  box-shadow: 1px 1px 1px #ccc;
}
</style>