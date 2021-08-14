<template>
  <div>
    <div class="content" style="margin-left:20px">
      <el-form :model="distribution" label-width="100px">
        <el-form-item label="被授权主体：">
          <el-input
            v-model="distribution.name"
            disabled
            style="width: 200px"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button
        style="height: 100%; margin-right: 20px"
        type="primary"
        @click="bind()"
        >关联</el-button
      >
    </div>

    <el-table :data="tableData" border>
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="账户名称" align="center">
      </el-table-column>
      <el-table-column prop="permissio" label="账户权限" align="center">
      </el-table-column>
      <el-table-column prop="describ" label="描述" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["distribution"],
  data() {
    return {
      tableData: [
        {
          permissio: "admin",
          name: "用户1",
          describ: "这里是描述内容",
        },
        {
          permissio: "admin",
          name: "用户2",
          describ: "这里是描述内容",
        },
        {
          permissio: "admin",
          name: "用户3",
          describ: "这里是描述内容",
        },
        {
          permissio: "boss",
          name: "用户4",
          describ: "这里是描述内容",
        },
        {
          permissio: "admin",
          name: "用户1",
          describ: "这里是描述内容",
        },
        {
          permissio: "admin",
          name: "用户2",
          describ: "这里是描述内容",
        },
        {
          permissio: "admin",
          name: "用户3",
          describ: "这里是描述内容",
        },
        {
          permissio: "boss",
          name: "用户4",
          describ: "这里是描述内容",
        },
      ],
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    bind() {
      this.$emit("bind");
    },
  },
  watch: {},
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
}
</style>