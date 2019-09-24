import Vue from 'vue'
import HTTP from '@/services/http'

export default {
  namespaced: true,

  state: {
    newTodoName: null,
    todos: []
  },
  actions: {
    fetchTodosForList({ commit }, payload) {
      return HTTP()
        .get(`lists/${payload.id}/todos`)
        .then(({ data }) => {
          commit('SET_TODO', data)
        })
    },
    async createTodo({ state, commit, rootState }) {
      try {
        const { data } = await HTTP().post(`/lists/${rootState.lists.currentList.id}/todos`, {
          description: state.newTodoName
        })
        commit('APPEND_TODO', data)
        commit('SET_NEW_TODO_NAME', null)
      } catch (e) {
        console.log(e)
      }
    },
    saveTodo({ commit }, payload) {
      return HTTP()
        .patch(`/todos/${payload.id}`, payload)
        .then(() => {
          commit('CAN_NOT_SET_TO_EDIT', payload)
        })
    },
    deleteTodo({ commit }, payload) {
      return HTTP()
        .delete(`/todos/${payload.id}`)
        .then(() => {
          commit('REMOVE_TODO', payload)
        })
    }
  },

  mutations: {
    SET_TODO(state, payload) {
      state.todos = payload
    },
    SET_NEW_TODO_NAME(state, payload) {
      state.newTodoName = payload
    },
    APPEND_TODO(state, payload) {
      state.todos.push(payload)
    },
    SET_TODO_DESCRIPTION(state, { todo, description }) {
      todo.description = description
    },
    SET_IS_EDITABLE(state, payload) {
      Vue.set(payload, 'isEditable', true)
    },
    CAN_NOT_SET_TO_EDIT(state, payload) {
      Vue.set(payload, 'isEditable', false)
    },
    REMOVE_TODO(state, payload) {
      state.todos.splice(state.todos.indexOf(payload), 1)
    },
    TOGGLE_COMPLETED(state, payload) {
      payload.accomplished = !payload.accomplished
    }
  },

  getters: {}
}
