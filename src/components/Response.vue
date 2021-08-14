<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="box-card-show">
        <div style="width: 150px">{{ title }}</div>
        <!-- <i
          :class="
            text == false ? 'el-icon-caret-right' : 'el-icon-caret-bottom'
          "
        ></i> -->
        <!-- <el-button type="primary">显示</el-button> -->
      </div>
      <!-- 用户登录情况 -->
      <div v-if="index == 1" v-show="text">
        <el-form label-width="180px">
          <div style="width: 100%; display: flex">
            <el-form-item label="VLR Purge标志位：">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
            <el-form-item label="最近一次CS注册时间：">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
            <el-form-item label="VLR地址：">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
          </div>
          <div style="width: 100%; display: flex">
            <el-form-item label="SGSN Purge标志位：">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
            <el-form-item label="最近一次PS注册时间： ">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
            <el-form-item label="SGSN地址：">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
          </div>
          <div style="width: 100%; display: flex">
            <el-form-item label="MME Purge标志位: ">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
            <el-form-item label="最近一次EPS注册时间： ">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
          </div>

          <el-form-item label="MME地址：">
            <el-input style="width: 600px"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <!-- 基本信息 -->
      <div v-if="index == 2" v-show="text">
        <el-form>
          <el-form-item label="IMSI：">
            <el-input style="width: 130px"></el-input>
          </el-form-item>
          <el-form-item label="MSISDN：">
            <el-input style="width: 130px"></el-input>
          </el-form-item>
          <el-form-item label="归属地市：">
            <el-input style="width: 130px"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <!-- 基本业务 -->
      <div v-if="index == 3" v-show="text">
        <el-form>
          <!-- <el-card style="width: 100%"> -->
          <div
            style="width: 100%; display: flex; justify-content: space-between"
          >
            <el-row :gutter="10">
              <el-col :span="6">
                <el-form-item label="允许接入2G：">
                  <el-radio v-model="radio" label="1">允许</el-radio>
                  <el-radio v-model="radio" label="2">不允许</el-radio>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="允许接入3G：">
                  <el-radio v-model="radio" label="1">允许</el-radio>
                  <el-radio v-model="radio" label="2">不允许</el-radio>
                </el-form-item></el-col
              >
              <el-col :span="6">
                <el-form-item label="允许接入4G：">
                  <el-radio v-model="radio" label="1">允许</el-radio>
                  <el-radio v-model="radio" label="2">不允许</el-radio>
                </el-form-item></el-col
              >

              <el-col :span="6">
                <el-form-item label="允许接入5G：">
                  <el-radio v-model="radio" label="1">允许</el-radio>
                  <el-radio v-model="radio" label="2">不允许</el-radio>
                </el-form-item></el-col
              >
            </el-row>
          </div>
          <el-divider></el-divider>
          <!-- </el-card> -->
          <!-- <el-card style="width: 100%"> -->
          <div style="display: flex; justify-content: space-between">
            <el-row :gutter="10">
              <el-col :span="6">
                <el-form-item label="语音主叫：">
                  <el-radio v-model="radio" label="1">提供</el-radio>
                  <el-radio v-model="radio" label="2">未提供</el-radio>
                </el-form-item></el-col
              >
              <el-col :span="6">
                <el-form-item label="语音被叫：">
                  <el-radio v-model="radio" label="1">提供</el-radio>
                  <el-radio v-model="radio" label="2">未提供</el-radio>
                </el-form-item></el-col
              >

              <el-col :span="6">
                <el-form-item label="短信收：">
                  <el-radio v-model="radio" label="1">提供</el-radio>
                  <el-radio v-model="radio" label="2">未提供</el-radio>
                </el-form-item></el-col
              >

              <el-col :span="6">
                <el-form-item label="短信发：">
                  <el-radio v-model="radio" label="1">提供</el-radio>
                  <el-radio v-model="radio" label="2">未提供</el-radio>
                </el-form-item></el-col
              >
            </el-row>

            <!-- <el-button type="primary" style="height: 50%">修改</el-button> -->
          </div>
          <el-divider></el-divider>

          <!-- </el-card> -->
          <!-- <el-card style="width: 100%"> -->
          <div style="display: flex; justify-content: space-between">
            <el-form-item label="4G漫游权限：">
              <el-radio v-model="radio" label="1">国际漫游</el-radio>
              <el-radio v-model="radio" label="2">国内漫游</el-radio>
            </el-form-item>
            <!-- <el-button type="primary" style="height: 50%">修改</el-button> -->
          </div>
          <el-divider></el-divider>

          <!-- </el-card> -->
          <!-- <el-card style="width: 100%"> -->
          <div style="display: flex">
            <el-form-item label="国际长途：">
              <el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="2">否</el-radio>
            </el-form-item>
            <el-form-item label="语音和GPRS漫游权限：">
              <el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="2">否</el-radio>
            </el-form-item>
            <el-form-item label="国内漫游：">
              <el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="2">否</el-radio>
            </el-form-item>
          </div>
          <el-divider></el-divider>

          <!-- </el-card> -->
          <!-- <el-card style="width: 100%"> -->
          <div>
            <el-form-item label="省内漫游：">
              <el-radio v-model="radio" label="1">国际漫游</el-radio>
              <el-radio v-model="radio" label="2">国内漫游</el-radio>
            </el-form-item>
          </div>
          <!-- </el-card> -->
        </el-form>
      </div>
      <!-- 呼叫及上网限制 -->
      <div v-if="index == 4" v-show="text">
        <el-form>
          <el-form-item label="语音呼出限制：">
            <el-radio v-model="radio" label="1">限制</el-radio>
            <el-radio v-model="radio" label="2">无限制</el-radio>
          </el-form-item>
          <el-form-item label="语音呼入限制：">
            <el-radio v-model="radio" label="1">限制</el-radio>
            <el-radio v-model="radio" label="2">无限制</el-radio>
          </el-form-item>
          <el-form-item label="GPRS限制：">
            <el-radio v-model="radio" label="1">限制</el-radio>
            <el-radio v-model="radio" label="2">无限制</el-radio>
          </el-form-item>
          <el-form-item label="4G上网限制：">
            <el-radio v-model="radio" label="1">限制</el-radio>
            <el-radio v-model="radio" label="2">无限制</el-radio>
          </el-form-item>
          <el-form-item label="5G上网限制：">
            <el-radio v-model="radio" label="1">限制</el-radio>
            <el-radio v-model="radio" label="2">无限制</el-radio>
          </el-form-item>
        </el-form>
      </div>
      <!-- 附加业务 -->
      <div v-if="index == 5" v-show="text">
        <el-form>
          <el-form-item label="来电显示：">
            <el-radio v-model="radio" label="1">提供</el-radio>
            <el-radio v-model="radio" label="2">未提供</el-radio>
          </el-form-item>
          <el-form-item label=" 去电显示：">
            <el-radio v-model="radio" label="1">提供</el-radio>
            <el-radio v-model="radio" label="2">未提供</el-radio>
          </el-form-item>
          <el-form-item label="呼叫保持：">
            <el-radio v-model="radio" label="1">提供</el-radio>
            <el-radio v-model="radio" label="2">未提供</el-radio>
          </el-form-item>
          <el-form-item label="多方通话：">
            <el-radio v-model="radio" label="1">提供</el-radio>
            <el-radio v-model="radio" label="2">未提供</el-radio>
          </el-form-item>
          <el-form-item label="CS彩铃：">
            <el-radio v-model="radio" label="1">提供</el-radio>
            <el-radio v-model="radio" label="2">未提供</el-radio>
          </el-form-item>
          <el-form-item label="呼叫等待：">
            <el-radio v-model="radio" label="1">提供</el-radio>
            <el-radio v-model="radio" label="2">未提供</el-radio>
          </el-form-item>
          <!-- <el-form-item label="无条件呼转：">
            <el-input style="width: 130px"></el-input>
            <el-button
              type="primary"
              style="margin-left: 40px; margin-right: 60px"
              >查询</el-button
            >
            <el-input style="width: 130px"></el-input>
          </el-form-item>
          <el-form-item label="遇忙呼转：">
            <el-input style="width: 130px"></el-input>
            <el-button
              type="primary"
              style="margin-left: 40px; margin-right: 60px"
              >查询</el-button
            >
            <el-input style="width: 130px"></el-input>
          </el-form-item>
          <el-form-item label="不可及呼转：">
            <el-input style="width: 130px"></el-input>
            <el-button
              type="primary"
              style="margin-left: 40px; margin-right: 60px"
              >查询</el-button
            >
            <el-input style="width: 130px"></el-input>
          </el-form-item>
          <el-form-item label="无应答呼转：">
            <el-input style="width: 130px"></el-input>
            <el-button
              type="primary"
              style="margin-left: 40px; margin-right: 60px"
              >查询</el-button
            >
            <el-input style="width: 130px"></el-input>
          </el-form-item> -->
        </el-form>
        <el-table :data="tableData5" style="width: 100%" border>
          <el-table-column prop="status" label="" width="180">
          </el-table-column>
          <el-table-column prop="one" label="无条件呼转" width="180">
          </el-table-column>
          <el-table-column prop="two" label="遇忙呼转 "></el-table-column>
          <el-table-column prop="three" label="不可及呼转"></el-table-column>
          <el-table-column prop="four" label="无应答呼转"></el-table-column>
          <el-table-column prop="five" label="默认呼转 "></el-table-column>
        </el-table>
        <!-- <div class="number">呼转号码 8613811111111</div> -->
      </div>
      <!-- CAMEL业务 -->
      <div v-if="index == 7" v-show="text">
        <el-form>
          <div>
            <el-form-item label="主叫CAMEL业务：">
              <el-radio v-model="radio" label="1">提供</el-radio>
              <el-radio v-model="radio" label="2">未提供</el-radio>
            </el-form-item>
            <el-form-item label="被叫CAMEL业务：">
              <el-radio v-model="radio" label="1">提供</el-radio>
              <el-radio v-model="radio" label="2">未提供</el-radio>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="模板编号：">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
            <el-form-item label="模板编号：">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="模板说明：">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
            <el-form-item label="模板说明：">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <!-- 漫游和闭锁业务 -->
      <div v-if="index == 6" v-show="text">
        <el-form>
          <el-form-item label="语音和GPRS漫游权限：">
            <el-input style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="4G漫游权限：">
            <el-input style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="国际长途限制：">
            <el-input style="width: 200px"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <!-- 数据业务 -->
      <div v-if="index == 8" v-show="text">
        <el-form label-width="auto">
          <!-- <el-form-item label="用户级别计费属性：">
            <el-input style="width: 200px"></el-input>
          </el-form-item> -->
          <el-form-item label="用户级别计费属性：">
            <el-input style="width: 200px"></el-input>
          </el-form-item>
        </el-form>
        <el-divider></el-divider>

        <!-- <el-card> -->
        <div slot="header" style="font-size: 15px">GPRS默认APN</div>
        <div>
          <el-table :data="gridData">
            <el-table-column
              property="adress"
              label="PDPID"
              width="150"
            ></el-table-column>
            <el-table-column
              property="profilename"
              label="APNQOS模板"
              width="200"
            ></el-table-column>
            <el-table-column
              property="apnname"
              label="APN名称"
            ></el-table-column>
            <el-table-column
              property="method"
              label="计费类型"
            ></el-table-column>
            <el-table-column
              property="address"
              label="上行速率"
            ></el-table-column>
            <el-table-column
              property="address"
              label="下行速率"
            ></el-table-column>
            <el-table-column
              property="address"
              label="QOS Profile"
            ></el-table-column>
          </el-table>
        </div>
        <el-divider></el-divider>

        <!-- </el-card> -->
        <!-- <el-card> -->
        <div slot="header" style="font-size: 15px">EPS数据</div>
        <div>
          <el-form label-width="170px">
            <el-form-item label="UE上行速率：">
              <el-input style="width: 200px"></el-input>
            </el-form-item>
            <el-form-item label="UE下行速率：">
              <el-input style="width: 200px"></el-input>
            </el-form-item>
            <el-form-item label="默认PDN：">
              <el-input style="width: 200px"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <el-divider></el-divider>

        <!-- </el-card> -->
        <!-- <el-card> -->
        <div slot="header" style="font-size: 15px">4G默认APN：</div>
        <div>
          <el-table :data="gridDataApn">
            <el-table-column
              property="adress"
              label="CTXID"
              width="150"
            ></el-table-column>
            <el-table-column
              property="profilename"
              label="APNQOS模板 "
              width="200"
            ></el-table-column>
            <el-table-column
              property="apnname"
              label=" APN名称"
            ></el-table-column>
            <el-table-column
              property="method"
              label="计费类型 "
            ></el-table-column>
            <el-table-column
              property="address"
              label=" UPLINK"
            ></el-table-column>
            <el-table-column
              property="address"
              label=" DOWNLINK"
            ></el-table-column>
            <el-table-column
              property="address"
              label="QOS Profile"
            ></el-table-column>
          </el-table>
        </div>
        <!-- </el-card> -->
      </div>
      <!-- 5G SA业务 -->
      <div v-if="index == 9" v-show="text">
        <el-form label-width="auto">
          <el-form-item label="UE上行速率：">
            <el-input style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="UE下行速率：" style="margin-left: 20px">
            <el-input style="width: 200px"></el-input>
          </el-form-item>
          <div style="width: 100%">
            <el-form-item label="AMF地址：">
              <el-input style="width: 200px"></el-input>
            </el-form-item>
          </div>
          <div style="width: 100%">
            <el-form-item label="AMF Purge标志位：">
              <el-input style="width: 200px"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <el-divider></el-divider>

        <!-- <el-card> -->
        <div slot="header" style="font-size: 15px">AMF Purge标志位</div>
        <div>
          <el-table :data="gridDataAMF">
            <el-table-column
              property="adress"
              label="dnnId"
              width="150"
            ></el-table-column>
            <el-table-column
              property="profilename"
              label="Default"
              width="200"
            ></el-table-column>
            <el-table-column property="apnname" label="Type"></el-table-column>
            <el-table-column
              property="method"
              label="计费类型"
            ></el-table-column>
            <el-table-column
              property="address"
              label="上行速率"
            ></el-table-column>
            <el-table-column
              property="address"
              label="下行速率"
            ></el-table-column>
            <el-table-column property="address" label="QOS"></el-table-column>
          </el-table>
        </div>
        <!-- </el-card> -->
      </div>
      <!-- VoLTE业务 -->
      <div v-if="index == 10" v-show="text">
        <el-form label-width="auto">
          <el-form-item label="IMPI：">
            <el-input style="width: 600px"></el-input>
          </el-form-item>
          <div style="width: 100%">
            <el-form-item label="IMPU：">
              <el-input type="textarea" style="width: 600px"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="能力集：">
            <el-input style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="IP短信网关名称：" style="margin-left: 40px">
            <el-input style="width: 130px"></el-input>
          </el-form-item>
          <el-form-item label="IP短信网关地址：">
            <el-input style="width: 130px"></el-input>
          </el-form-item>
          <div style="width: 100%; display: flex">
            <el-form-item label="AS注册状态：">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
            <el-form-item label="最近一次注册时间：">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
          </div>
          <div style="width: 100%; display: flex">
            <el-form-item label="SCSCF地址：">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
          </div>
          <div style="width: 100%; display: flex">
            <el-form-item label="TAS地址：">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
          </div>
          <div style="width: 100%; display: flex">
            <el-form-item label="SBC地址：">
              <el-input style="width: 130px"></el-input>
            </el-form-item>
          </div>
        </el-form>

        <el-divider></el-divider>

        <!-- <el-card> -->
        <div slot="header" style="font-size: 15px">业务集</div>
        <div>
          <el-table :data="gridData">
            <el-table-column
              property="adress"
              label="SiFC ID "
              width="150"
            ></el-table-column>
            <el-table-column
              property="profilename"
              label="Profile名称"
              width="200"
            ></el-table-column>
            <el-table-column
              property="apnname"
              label="业务集描述"
            ></el-table-column>
          </el-table>
        </div>
        <!-- </el-card> -->
      </div>
    </el-card>
  </div>
</template>

<script>
import modalTable from "@/views/twothreefourg/components/modalTable";
export default {
  name: "",
  props: ["title", "index"],
  data() {
    return {
      radio: "1",
      dialog: false,
      text: true,
      tableData5: [
        {
          status: "提供状态",
          one: "提供",
          two: "提供",
          three: "提供",
          four: "提供",
          five: "提供",
        },
        {
          status: "激活状态 ",
          one: "提供",
          two: "提供",
          three: "提供",
          four: "提供",
          five: "提供",
        },
        {
          status: "呼转号码 ",
          one: "8613811111111",
          two: "8613811111111",
          three: "8613811111111",
          four: "8613811111111",
          five: "8613811111111",
        },
      ],
      gridData: [
        {
          adress: "1",
          profilename: "GPRS30",
          apnname: " 3GNET",
          method: "在线计费",
          address: "拜访地接入",
        },
      ],
      gridDataApn: [
        {
          adress: "1",
          profilename: "GPRS30",
          apnname: " 3GNET",
          method: "在线计费",
          address: "拜访地接入",
        },
      ],
      gridDataAMF: [{}],
    };
  },
  components: {
    modalTable,
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    modal() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    showList() {
      this.text = !this.text;
    },
    // arraySpanMethod({ row, column, rowIndex, columnIndex }) {
    //   if (rowIndex   === 2 ) {
    //     if(columnIndex  == 1) {
    //       //第二行第一列开始
    //       return [1, 5];
    //     }
    //   //   if (columnIndex === 0) {
    //   //     return [1, 2];
    //   //   } else if (columnIndex === 1) {
    //   //   }
    //   }
    // },
  },
  watch: {},
};
</script>

<style scoped>
.el-form {
  display: flex;
  flex-wrap: wrap;
  font-family: "微软雅黑";
  font-weight: bold;
  width: 100%;
  align-items: center;
}
.el-button {
  margin-left: 20px;
}
.box-card-show {
  display: flex;
  align-items: center;
}
.number {
  font-size: 14px;
  color: #606266;
  margin-top: 20px;
}
.el-card {
  margin-bottom: 20px;
}
.el-form-item {
  width: 300px;
}
.el-radio {
  font-weight: normal !important;
}
.el-card__header {
  padding: 0% !important;
}
</style>