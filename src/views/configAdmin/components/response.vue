<!--  -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>详情</span>
        <!-- <el-button type="primary">确认</el-button> -->
      </div>
      <div class="list" v-for="(item, i) in test" :key="i">
        <div class="title">MOD_SMDATA</div>
        <div class="content">
          <el-form
            :model="item"
            ref="ruleForm"
            label-width="150px"
            class="demo-ruleForm"
          >
            <el-form-item label="MOD_SMDATA" prop="name">
              <el-input
                v-model="item.project.one"
                @input="input(item.index)"
                :disabled="i != target && target != 10"
              ></el-input>
            </el-form-item>
            <el-form-item label="HLRSN" prop="name">
              <el-input
                v-model="item.project.two"
                @input="input(item.index)"
                :disabled="i != target && target != 10"
              ></el-input>
            </el-form-item>
            <el-form-item label="SNSSAI" prop="name">
              <el-input
                v-model="item.project.three"
                @input="input(item.index)"
                :disabled="i != target && target != 10"
              ></el-input>
            </el-form-item>
            <el-form-item label="DNNQOSTPLID" prop="name">
              <el-input
                v-model="item.project.four"
                @input="input(item.index)"
                :disabled="i != target && target != 10"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-button type="success" style="height: 100%; margin-left: 20px"
            >保存</el-button
          >
        </div>
        <div class="line"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      test: [
        {
          index: 0,
          project: {},
        },
        {
          index: 1,
          project: {},
        },
      ],
      target: 10,
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    input(index) {
      //查看当前下标的属性是否为空
      let arr = this.test;
      let flag = false;
      console.log(arr);
      arr.forEach((element) => {
        if (element.index == index) {
          debugger;
          console.log(element);
          if (
            (element.project.one == "" || element.project.one == undefined) &&
            (element.project.two == "" || element.project.two == undefined) &&
            (element.project.three == "" ||
              element.project.three == undefined) &&
            (element.project.four == "" || element.project.four == undefined)
          ) {
            debugger;
            flag = true;
            this.target = 10;
          }
        }
      });
      if (!flag) {
        this.target = index;
      }
    },
  },
  watch: {},
};
</script>

<style  scoped>
.line {
  background-color: #909399;
  height: 1px;
  width: 100%;
  margin-top: 10px;
}
.list {
  margin-bottom: 50px;
}

.content {
  display: flex;
  align-items: center;
}
.clearfix {
  display: flex;
  justify-content: space-between;
}
.box-card {
  margin: 10px;
  min-height: 500px;
}
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
.title {
  font-size: 15px;
}
.el-form {
  margin-top: 20px;
  display: flex;
}
.el-form-item {
  display: inline;
}
</style>