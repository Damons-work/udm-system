<!--  -->
<template>
  <div class="content">
    <el-form
      :model="active"
      ref="activeForm"
      label-width="auto"
      class="demo-ruleForm"
    >
      <el-form-item label="地市：" prop="hlrsn">
        <el-select v-model="active.hlrsn" style="width: 200px">
          <el-option
            v-for="i of ['北京', '上海', '南京']"
            :label="i"
            :value="i"
            :key="i"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="业务模型：" v-for="(item, i) in active.work" :key="i">
        <el-select v-model="item.key" style="width: 200px">
          <el-option label="业务一" value="1"></el-option>
          <el-option label="业务二" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="最大并发量：" prop="num">
        <el-select v-model="active.num" style="width: 200px">
          <el-option v-for="i of 50" :label="i" :value="i" :key="i"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="IMSI" prop="imsi">
        <div class="upload">
          <!-- <div>
              <el-input v-model="active.imsi" style="width:200px"></el-input>
              <span style="margin:10px">-</span>
              <el-input v-model="active.imsi" style="width:200px"></el-input>
            </div> -->
          <div style="margin-left: 20px">
            <el-button type="primary">
              上传
              <i class="el-icon-upload el-icon--right"></i>
            </el-button>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="ISDN" prop="isdn">
        <div class="upload">
          <!-- <div>
              <el-input v-model="active.isdn" style="width:200px"></el-input>
              <span style="margin:10px">-</span>
              <el-input v-model="active.isdn" style="width:200px"></el-input>
            </div> -->
          <div style="margin-left: 20px">
            <el-button type="primary">
              上传
              <i class="el-icon-upload el-icon--right"></i>
            </el-button>
          </div>
        </div>
      </el-form-item>
      <!-- <el-button class="action" type="success">执行</el-button> -->
    </el-form>
    <!-- <div class="bottom">
      <el-button type="primary" @click="send()">发送</el-button>
      <el-button type="success">取消</el-button>
    </div> -->
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
    send() {
      this.$emit("send", this.active);
    },
  },
  watch: {},
};
</script>

<style  scoped>
.box-card {
  margin: 10px;
}
.user-password {
  display: flex;
}
.content {
  display: flex;
  align-items: center;
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
.upload {
  display: flex;
}
.action {
  position: absolute;
  top: 300px;
  right: 40px;
}
.el-form{
  font-weight: bold;
  font-size: 20px;
}
.el-form-item{
  margin-left: 10px;
}
</style>