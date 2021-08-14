import requset from "./request";

//登录接口
export const login = (data) => {
  return requset({
    url: "login",
    method: "POST",
    params: {
      username: data.username,
      password: data.password,
    },
  });
};
//查询用户列表
export const userAll = (data) => {
  return requset({
    url: "/users/all",
    method: "GET",
    params: {
      size: data.size,
      page: data.page,
    },
  });
};
//根据用户姓名模糊搜索
export const userSearchByName = (data) => {
  return requset({
    url: "/users/search",
    method: "GET",
    params: {
      name: data.name,
      size: data.size,
      page: data.page,
    },
  });
};
export const userByName = (data) => {
  return requset({
    url: "/users/search/name",
    method: "GET",
    params: {
      name: data.name,
    },
  });
};
//添加用户
export const addUser = (data) => {
  return requset({
    url: "/users/add",
    method: "POST",
    data,
  });
};
//查询角色
export const allinuser = () => {
  return requset({
    url: "/roles/allinuser",
    method: "GET",
  });
};
//编辑用户
export const changePassword = (data) => {
  return requset({
    url: "/users/changePassword",
    method: "PUT",
    data,
  });
};
//删除用户
export const userDelete = (data) => {
  return requset({
    url: "/users/delete/" + data,
    method: "DELETE",
  });
};
//查询用户
export const roleSearchByName = (data) => {
  return requset({
    url: "/roles/query",
    method: "GET",
    params: {
      name: data.name,
      size: data.size,
      page: data.page,
    },
  });
};

//创建角色
export const addRole = (data) => {
  return requset({
    url: "/roles/add",
    method: "POST",
    data,
  });
};
//删除角色
export const roleDelete = (data) => {
  return requset({
    url: "/roles/delete/" + data,
    method: "DELETE",
  });
};
export const editRole = (data) => {
  return requset({
    url: "/roles/edit",
    method: "PUT",
    data,
  });
};
//获取所有菜单
export const permissionsAll = (data) => {
  return requset({
    url: "/permissions/all",
    method: "GET",
    params: {
      appId: data,
    },
  });
};
//根据roleId获取已选择的权限
export const permissionsSearch = (data) => {
  return requset({
    url: "/permissions/search",
    method: "GET",
    params: {
      roleId: data,
    },
  });
};
export const permissionsJsonSearch = (data) => {
  return requset({
    url: "/permissions/jsonSearch",
    method: "GET",
    params: {
      roleId: data,
    },
  });
};
//查看用户权限
export const sonPermission = (data) => {
  return requset({
    url: "/permissions/sonPermission",
    method: "GET",
    params: {
      roleId: data.roleId,
      permissId: data.permissId,
    },
  });
};
