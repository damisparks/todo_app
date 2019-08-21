import router from '../router';
import apiClient from '../services/http';

export default {
  namespaced: true,
  state: {
    email: null,
    password: null,
    token: null,
    regError: null,
  },
  mutations: {
    SET_EMAIL(state, email) {
      state.email = email;
    },
    SET_PASSWORD(state, password) {
      state.password = password;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_REG_ERROR(state, error) {
      state.regError = error;
    },
  },
  actions: {
    async register({ state, commit }) {
      commit('SET_REG_ERROR', null);
      try {
        const { data } = await apiClient.registerUser({
          email: state.email,
          password: state.password,
        });
        commit('SET_TOKEN', data.token);
        router.push('/');
      } catch (e) {
        commit('SET_REG_ERROR', 'An error occured trying to create your account.');
      }
    },
  },

  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
};
