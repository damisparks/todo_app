import Vue from 'vue'
import HTTP from '@/services/http'

export default {
  namespaced: true,
  state: {
    newListName: null,
    lists: [],
    onCreateError: null
  },
  mutations: {
    SET_NEW_LIST_NAME(state, payload) {
      state.newListName = payload
    },
    APPEND_LISTNAME(state, payload) {
      state.lists.push(payload)
    },
    SET_ON_CREATE_ERROR(state, payload) {
      state.onCreateError = payload
    },
    SET_NEW_LIST(state, payload) {
      state.lists = payload
    },
    SET_IS_EDITABLE(state, payload) {
      Vue.set(payload, 'isEditable', true)
    },
    CAN_NOT_SET_TO_EDIT(state, payload) {
      Vue.set(payload, 'isEditable', false)
    },
    SET_LIST_TITLE(state, { list, title }) {
      list.title = title
    },
    REMOVE_LIST(state, payload) {
      state.lists.splice(state.lists.indexOf(payload), 1)
    }
  },
  actions: {
    async createList({ state, commit }) {
      commit('SET_ON_CREATE_ERROR', null)
      try {
        const { data } = await HTTP().post('/lists', {
          title: state.newListName
        })
        commit('APPEND_LISTNAME', data)
        commit('SET_NEW_LIST_NAME', null)
      } catch (e) {
        commit('SET_ON_CREATE_ERROR', 'An error occured creating list.')
      }
    },

    async fetchList({ commit }) {
      try {
        const { data } = await HTTP().get('/lists')
        commit('SET_NEW_LIST', data)
      } catch (e) {
        commit('SET_ON_CREATE_ERROR', 'Oops something happened. Your list could not loaded.')
      }
    },
    saveListTitle({ commit }, payload) {
      return HTTP()
        .patch(`/lists/${payload.id}`, payload)
        .then(() => {
          commit('CAN_NOT_SET_TO_EDIT', payload)
        })
    },
    deleteList({ commit }, payload) {
      return HTTP()
        .delete(`/lists/${payload.id}`)
        .then(() => {
          commit('REMOVE_LIST', payload)
        })
    }
  },

  getters: {}
}
