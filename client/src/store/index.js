// import createPersistenceState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';
import authenticate from './authenticate';
import lists from './lists';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {},
  mutations: {},
  actions: {},
  modules: { authenticate, lists },

  // plugins: [createPersistenceState()],
});
