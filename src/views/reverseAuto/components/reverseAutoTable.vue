<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="HLRSN" label="HLRSN" width="180">
      </el-table-column>
      <el-table-column prop="SubsUDM2IOM" label="SubsUDM2IOM" width="180">
      </el-table-column>
      <el-table-column prop="RatesUDM2IOM" label="RatesUDM2IOM">
      </el-table-column>
      <el-table-column prop="SubsIOM2UDM_T" label="SubsIOM2UDM_T">
      </el-table-column>
      <el-table-column prop="RatesIOM2UDM_T" label="RatesIOM2UDM_T">
      </el-table-column>
      <el-table-column prop="SubsIOM2UDM_O" label="SubsIOM2UDM_O">
      </el-table-column>
      <el-table-column prop="RatesIOM2UDM_O" label="RatesIOM2UDM_O">
      </el-table-column>
      <el-table-column prop="Rates5GAutoConvert" label="Rates5GAutoConvert">
      </el-table-column>
      <el-table-column prop="ADsIOMUDM" label="ADsIOMUDM"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      tableData: [
        {
          HLRSN: "212",
          SubsUDM2IOM: "11",
          RatesUDM2IOM: "121",
          SubsIOM2UDM_T: "22",
          RatesIOM2UDM_T: "120",
          SubsIOM2UDM_O: "100",
          RatesIOM2UDM_O: "80",
          Rates5GAutoConvert: "78",
          ADsIOMUDM: "121",
        },
        {
          HLRSN: "212",
          SubsUDM2IOM: "11",
          RatesUDM2IOM: "121",
          SubsIOM2UDM_T: "22",
          RatesIOM2UDM_T: "120",
          SubsIOM2UDM_O: "100",
          RatesIOM2UDM_O: "80",
          Rates5GAutoConvert: "78",
          ADsIOMUDM: "121",
        },
        {
          HLRSN: "212",
          SubsUDM2IOM: "11",
          RatesUDM2IOM: "121",
          SubsIOM2UDM_T: "22",
          RatesIOM2UDM_T: "120",
          SubsIOM2UDM_O: "100",
          RatesIOM2UDM_O: "80",
          Rates5GAutoConvert: "78",
          ADsIOMUDM: "121",
        },
        {
          HLRSN: "212",
          SubsUDM2IOM: "11",
          RatesUDM2IOM: "121",
          SubsIOM2UDM_T: "22",
          RatesIOM2UDM_T: "120",
          SubsIOM2UDM_O: "100",
          RatesIOM2UDM_O: "80",
          Rates5GAutoConvert: "78",
          ADsIOMUDM: "121",
        },
        {
          HLRSN: "212",
          SubsUDM2IOM: "11",
          RatesUDM2IOM: "121",
          SubsIOM2UDM_T: "22",
          RatesIOM2UDM_T: "120",
          SubsIOM2UDM_O: "100",
          RatesIOM2UDM_O: "80",
          Rates5GAutoConvert: "78",
          ADsIOMUDM: "121",
        },
        {
          HLRSN: "212",
          SubsUDM2IOM: "11",
          RatesUDM2IOM: "121",
          SubsIOM2UDM_T: "22",
          RatesIOM2UDM_T: "120",
          SubsIOM2UDM_O: "100",
          RatesIOM2UDM_O: "80",
          Rates5GAutoConvert: "78",
          ADsIOMUDM: "121",
        },
      ],
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
</style>