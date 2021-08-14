import requset from "./request1";

//登录接口
export const workOrder = (data) => {
  return requset({
    url: "WorkOrderController/search",
    method: "GET",
    params: {
      HLRSN: data.HLRSN,
      ERROR_CODE: data.ERROR_CODE,
      OPERATION: data.OPERATION,
      StartTime: data.StartTime,
      EndTime: data.EndTime,
      HasError: data.HasError,
      CostTime: data.CostTime,
      IncludeDisplayLST: data.IncludeDisplayLST,
    },
  });
};
