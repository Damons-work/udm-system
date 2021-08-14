<!--  -->
<template>
  <div class="content">
    <el-form
      :model="active"
      ref="activeForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <div class="left">
        <div class="user-password">
          <!-- <el-form-item label="User" prop="user">
            <el-input v-model="active.name" style="width:200px"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input v-model="active.password" style="width:200px"></el-input>
          </el-form-item>-->
        </div>
        <el-form-item label="归属地市" prop="hlrsn">
          <el-select v-model="active.hlrsn" style="width: 200px">
            <el-option
              v-for="i of ['北京', '上海', '南京']"
              :label="i"
              :value="i"
              :key="i"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="IMSI" prop="imsi">
          <el-input v-model="active.imsi" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="ISDN" prop="isdn">
          <el-input v-model="active.isdn" style="width: 200px"></el-input>
        </el-form-item>
      </div>
      <!-- <div class="right">
        <el-form-item label="业务" v-for="(item,i) in active.work" :key="i">
          <el-select v-model="item.key" style="width:200px">
            <el-option label="业务一" value="1"></el-option>
            <el-option label="业务二" value="2"></el-option>
          </el-select>
        </el-form-item>
      </div>-->
    </el-form>
    <el-button type="primary" style="height: 100%" @click="search"
      >搜索</el-button
    >
  </div>
</template>

<script>
export default {
  name: "",
  props: ["active"],
  data() {
    return {};
  },
  components: {},
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
    search() {
      this.$emit("search");
    },
  },
  watch: {},
};
</script>

<style scoped>
.left {
  display: flex;
}
.content {
  display: flex;
  justify-content: space-between;
}
.user-password {
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
.el-textarea__inner {
  min-height: 400px !important;
}
.el-button {
}
</style>