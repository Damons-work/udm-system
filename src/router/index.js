import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index/index";
import Query from "@/views/visualized/query";
import ElementUI from "element-ui";
import ConfigAdmin from "@/views/configAdmin/index";
import UpdateUser from "@/views/updateUser/index";
import Chart from "@/views/chart/index";
import Login from "@/views/login/index";
import Twothreefourg from "@/views/twothreefourg/index";
import Volte from "@/views/volte/index";
import Fiveg from "@/views/fiveg/index";
import Separationofpowers from "@/views/separationofpowers/index";
import ErrorOrder from "@/views/errorOrder/index";
import ReverseAuto from "@/views/reverseAuto/index";
import Account from "@/views/account/index";
import Role from "@/views/role/index";
import Device from "@/views/device/index";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
    redirect: "/chart",
    children: [
      {
        path: "/13102",
        component: ErrorOrder,
        meta:{
          flag:"1111"
        }
      },
      //工单查询
      {
        path: "/sysworkorderquery",
        component: Query,
      },
      {
        path: "/sysworkorder5gcollect",
        component: Fiveg,
      },
      {
        path: "/15010" ,
        component: Role,
      },
      {
        path: "/sysdeviceadd" ,
        component: Device,
      },
      
      {
        path: "/chart" ,
        component: Chart,
      },
      {
        path: "/14024" ,
        component: UpdateUser,
      },
      {
        path: "/syssubscriberModifyvolte" ,
        component: Volte,
      },
      {
        path: "/14020" ,
        component: Twothreefourg,
      },
      {
        path: "/15020" ,
        component: Account,
      },
      
      
      
      
      
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem("token");
  console.log(token);
  //判断是否需要登录
  if (to.path === "/login") {
    next();
  } else {
    if (token === null || token === "") {
      next("/login");
    } else {
      next();
    }
  }
});
export default router;
