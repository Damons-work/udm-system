<!--  -->
<template>
  <div>
    <el-breadcrumb
      style="margin-bottom: 20px"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>可视化工单</el-breadcrumb-item>
      <el-breadcrumb-item>工单查询</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <el-card> -->

    <!-- </el-card> -->
    <!-- <el-card style="margin-top: 20px"> -->
    <div>
      <query-table @showDia="showDia"></query-table>
    </div>
    <!-- </el-card> -->

    <el-dialog :visible.sync="dialogShow" fullscreen top="30px">
      <h3 class="title">Records Views</h3>
      <div class="line"></div>
      <div class="table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="detail" label="Detail">
            <pre>
              <code class="xml hljs">
                  {{tableData.detail}}
              </code>
            </pre>
          </el-table-column>
        </el-table>
      </div>
    </el-dialog>
  </div>
  <!-- 搜索条件 -->
</template>

<script>
import queryTable from "@/views/visualized/components/queryTable";
import vkbeautify from "vkbeautify";
export default {
  name: "",
  props: [""],
  data() {
    return {
      dialogShow: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          id: "sss22321518sdd1w1w1",
          detail: "",
        },
      ],
    };
  },
  components: {
    queryTable,
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    showDia(e) {
      console.log(e);
      let xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://www.chinaunicom.com/UDM/">
   <soapenv:Header>
      <ns1:PassWord>boss@123</ns1:PassWord>
      <ns1:UserName>boss1</ns1:UserName>
   </soapenv:Header>
   <soapenv:Body>
      <ns1:LST_LCK>
         <ns1:HLRSN>32</ns1:HLRSN>
         <ns1:IMSI>460094840004441</ns1:IMSI>
        </ns1:LST_LCK>
   </soapenv:Body>
</soapenv:Envelope>

<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Body>
      <LST_LCKResponse xmlns="http://www.chinaunicom.com/UDM/">
         <Result>
            <ResultCode>0</ResultCode>
            <ResultDesc>SUCCESS</ResultDesc>
            <ResultData>
               <IC>FALSE</IC>   ->被叫开机
               <OC>FALSE</OC>  ->主叫开机
               <GPRSLOCK>FALSE</GPRSLOCK>  ->GPRS开机
               <EPSLOCK>FALSE</EPSLOCK>  ->EPS开机
               <NGSLOCK>FALSE</NGSLOCK>  ->5G开机
            </ResultData>
         </Result>
      </LST_LCKResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope> `;
      let out = vkbeautify.xml(xml);
      console.log(out);
      this.tableData.detail = out;
      this.dialogShow = true;
    },
  },
  watch: {},
};
</script>

<style  scoped>
.title {
  position: absolute;
  top: 10px;
  left: 40px;
  width: 95%;
}
.el-dialog__body {
  height: 50vh;
  overflow: auto;
}

font {
  width: 100px;
}
.content {
  margin: 20px;
  font-size: 20px;
}
.line {
  width: 98%;
  height: 1px;
  background-color: black;
  margin-left: 20px;
}
.customerDialog {
  height: 90%;
}
.table {
  width: 100%;
  margin: 10px;
}
</style>