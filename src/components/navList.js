//导航栏的数据
const navList = [
  // {
  //   // index: 8,
  //   // title: "我的",
  //   // meta: "我的",
  //   // children: [
  //   //   {
  //   index: "chart",
  //   title: "图标展示",
  //   meta: "图标展示",
  //   //   },
  //   // ],
  // },
  {
    index: 0,
    title: "用户数据管理",
    meta: "用户数据管理",
    children: [
      {
        index: "configAdmin",
        title: "用户数据修改",
        children: [
          {
            index: "twothreefourg",
            title: "2/3/4G",
            meta: "2/3/4G",
            children: [
              {
                title: "修改",
              },
              {
                title: "查看",
              },
            ],
          },
          {
            index: "volte",
            title: "VOLTE",
          },
          {
            index: "fiveg",
            title: "5G",
          },
        ],
      },
      {
        index: "updateUser",
        title: "批量用户数据修改",
      },
      {
        index: "0-4",
        title: "局数据和用户模板的管理",
      },
      // {
      //   index: "separationofpowers",
      //   title: "分权分域管理",
      // },
    ],
  },
  {
    index: 1,
    title: "可视化工单管理",
    children: [
      {
        index: "query",
        title: "工单查询",
      },
      // {
      //   index: "1-2",
      //   title: "2/3/4/工单指令的深度分析",
      // },
      {
        index: "errorOrder",
        title: "错单深度分析",
      },
      {
        index: "reverseAuto",
        title: "5G反向自动开通统计",
      },
    ],
  },
  {
    index: 2,
    title: "网元登录管理",
    children: [
      {
        index: "2-1",
        title: "统一的网元账号管理",
      },
      {
        index: "2-2",
        title: "统一的网元账号管理",
      },
      {
        index: "2-3",
        title: "所有操作均可追溯",
      },
    ],
  },
  {
    index: 3,
    title: "网元配置核查",
    children: [
      {
        index: "3-1",
        title: "配置参数核查",
      },
      {
        index: "3-2",
        title: "虚拟资源使用率的核查",
      },
      {
        index: "3-3",
        title: "license使用率核查",
      },
      {
        index: "3-4",
        title: "链路状态核查",
      },
    ],
  },
  {
    index: 4,
    title: "可视化拓扑功能",
    children: [
      {
        index: "4-1",
        title: "自动绘制网元拓扑",
      },
      {
        index: "4-2",
        title: "虚机间链路状态展示",
      },
      {
        index: "4-3",
        title: "关联网元链路状态展示",
      },
    ],
  },
  {
    index: 5,
    title: "KPI的提取与呈现",
    children: [
      {
        index: "5-1",
        title: "网元业务指标呈现",
      },
      {
        index: "5-2",
        title: "网元用户数指标呈现",
      },
    ],
  },
  {
    index: 6,
    title: "网元安全管理",
    children: [
      {
        index: "6-1",
        title: "应用层安全",
      },
      {
        index: "6-2",
        title: "系统层安全",
      },
      {
        index: "6-2",
        title: "网络层安全",
      },
      {
        index: "6-2",
        title: "管理层安全",
      },
    ],
  },
  {
    index: 9,
    title: "设备管理",
    children: [
      {
        index: "device",
        title: "设备",
      },
    ],
  },
  {
    index: 7,
    title: "系统设置",
    children: [
      {
        index: "account",
        title: "账户管理",
      },
      {
        index: "role",
        title: "角色管理",
      },
    ],
  },
];
export default navList;
