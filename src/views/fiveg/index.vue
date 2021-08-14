<template>
  <div>
    <div class="header">
      <!-- <div class="bottom">
          <el-button type="primary">发送</el-button>
          <el-button type="success">取消</el-button>
        </div> -->
      <Content :active="active" @search="search" />
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