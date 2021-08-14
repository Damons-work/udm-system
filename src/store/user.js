import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  test: "",
  user: {},
};
const mutations = {
  getUserMutations(state, user) {
    state.user = user;
  },
  // TEST(state, test) {
  //   state.test = test;
  // },
};
//异步修改数据
const actions = {
  // testActions({ commit }, value) {
  //   commit("TEST", value);
  // },
  getUserActions({ commit }, value) {
    commit("getUserMutations", value);
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
