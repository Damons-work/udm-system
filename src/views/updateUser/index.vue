<!--  -->
<template>
  <div>
    <el-breadcrumb
      style="margin-bottom: 20px"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户数据管理</el-breadcrumb-item>
      <el-breadcrumb-item>批量用户数据修改</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <el-card class="box-card"> -->
    <Content :active="active" @send="send"></Content>
    <!-- </el-card> -->
    <!-- 响应结果 -->
    <Response style="margin-top: 20px" />
  </div>
</template>

<script>
import Content from "@/views/updateUser/components/content";
import Response from "@/views/updateUser/components/response";
export default {
  name: "",
  props: [""],
  data() {
    return {
      active: {
        work: [{ key: "", value: "" }],
      },
    };
  },
  components: {
    Content,
    Response,
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    addInput() {
      let arr = { key: "", value: "" };
      this.active.work.push(arr);
      console.log(this.active.work);
    },
    remove() {
      if (this.active.work.length != 1) {
        this.active.work.pop();
      } else {
        this.$message({
          message: "这是最后一条业务！！",
          type: "warning",
        });
      }
    },
    send(e) {
      console.log(e);
    },
  },
  watch: {},
};
</script>

<style  scoped>
.user-password {
  display: flex;
}
.bottom {
  width: 100%;
  display: flex;
  justify-content: center;
}
.result {
  font-size: 15px;
}
.demo-ruleForm {
  display: flex;
  justify-content: space-between;
  width: 80%;
}
.textarea {
  display: flex;
  font-size: 20px;
  text-align: center;
  align-items: center;
}
</style>