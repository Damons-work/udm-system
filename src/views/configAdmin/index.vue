<!--  -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div>
          <span>修改签约数据</span>
        </div>
        <!-- <div class="bottom">
          <el-button type="primary">发送</el-button>
          <el-button type="success">取消</el-button>
        </div> -->
      </div>
      <Content :active="active" @search="search" />
    </el-card>
    <!-- 响应结果 -->
    <Response v-if="show" />
  </div>
</template>

<script>
import Content from "@/views/configAdmin/components/content";
import Response from "@/views/configAdmin/components/response";
export default {
  name: "",
  props: [""],
  data() {
    return {
      active: {
        work: [{ key: "", value: "" }]
      },
      show: false
    };
  },
  components: {
    Content,
    Response
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    search() {
      this.show = true;
    }
  },
  watch: {}
};
</script>

<style  scoped>
.user-password {
  display: flex;
}
.clearfix {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.bottom {
  display: flex;
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