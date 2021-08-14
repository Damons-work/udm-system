<template>
  <div>
    <div class="content">
      <el-card> <SeparaTable></SeparaTable> </el-card>
    </div>
  </div>
</template>

<script>
import SeparaTable from "@/views/separationofpowers/components/separaTable";
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },
  components: {
    SeparaTable,
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
.content{
    margin: 10px;
}
</style>