import apiClient from '../services/http';
import router from '../router';

export default {
  namespaced: true,
  state: {
    newListName: null,
    lists: null,
    onCreateError: null,
  },
  mutations: {
    SET_NEW_LIST_NAME(state, payload) {
      state.newListName = payload;
    },
    APPEND_LISTNAME(state, payload) {
      state.lists.push(payload);
    },
    SET_ON_CREATE_ERROR(state, payload) {
      state.onCreateError = payload;
    },
  },
  actions: {
    async createList({ state, commit }) {
      commit('SET_ON_CREATE_ERROR', null);
      try {
        const { data } = await apiClient.onListCreation({
          title: state.newListName,
        });
        commit('APPEND_LISTNAME', data);
        commit('SET_NEW_LIST_NAME', null);
      } catch (e) {
        commit('SET_ON_CREATE_ERROR', 'An error occured creating list.');
      }
    },
  },

  getters: {},
};
