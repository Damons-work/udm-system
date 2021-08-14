<template>
  <div>
    <div class="header">
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
    </div>
  </div>
</template>

<script>
import Tab from "@/views/volte/components/tab";
import Content from "@/views/configAdmin/components/content";
import Response from "@/views/configAdmin/components/response";
export default {
  name: "",
  props: [""],
  data() {
    return {
      active: {
        work: [{ key: "", value: "" }],
      },
      show: false,
    };
  },
  components: {
    Tab,
    Content,
    Response,
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    search() {
      this.show = true;
    },
  },
  watch: {},
};
</script>

<style scoped>
.header {
  margin: 10px;
}
</style>