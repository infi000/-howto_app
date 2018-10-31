/*jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
Vue.use(Vuex);

const state = {
  userinfo: {},
  payInfo: {}
};

const getters = {

};

const mutations = {

};


export default new Vuex.Store({
  state,
  getters,
  mutations,
});
