// import createPersistenceState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';
import authenticate from './authenticate';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  mutations: {},
  actions: {},
  modules: { authenticate },

  // plugins: [createPersistenceState()],
});
