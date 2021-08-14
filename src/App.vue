<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style >
/* 选中后小圆点的颜色 */
.el-radio__input.is-checked + .el-radio__label {
  color: #1d438c !important;
}
.el-radio__input.is-checked .el-radio__inner:hover {
  border-color: #1d438c !important;
  background: #1d438c !important;
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #1d438c !important;
  background: #1d438c !important;
}
.el-input__inner {
  border-style: double !important;
}
html,
body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  widows: 100%;
  height: 100%;
}
</style>
