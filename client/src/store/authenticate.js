import router from '../router'
import HTTP from '../services/http'

export default {
  namespaced: true,
  state: {
    email: null,
    password: null,
    token: null,
    regError: null,
    loginPassword: null,
    loginEmail: null,
    loginError: null
  },

  mutations: {
    SET_EMAIL(state, payload) {
      state.email = payload
    },
    SET_PASSWORD(state, payload) {
      state.password = payload
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    SET_REG_ERROR(state, payload) {
      state.regError = payload
    },
    SET_LOGIN_EMAIL(state, payload) {
      state.loginEmail = payload
    },
    SET_LOGIN_PASSWORD(state, payload) {
      state.loginPassword = payload
    },
    SET_LOGIN_ERROR(state, payload) {
      state.loginError = payload
    }
  },
  actions: {
    logout({ commit }) {
      commit('SET_TOKEN', null)
      router.push('/login')
    },

    async register({ state, commit }) {
      commit('SET_REG_ERROR', null)
      try {
        const { data } = await HTTP().post('/auth/register', {
          email: state.email,
          password: state.password
        })
        commit('SET_TOKEN', data.token)
        router.push('/')
      } catch (e) {
        commit('SET_REG_ERROR', 'An error occured trying to create your account.')
      }
    },
    async login({ commit, state }) {
      commit('SET_LOGIN_ERROR', null)
      try {
        const { data } = await HTTP().post('/auth/login', {
          email: state.loginEmail,
          password: state.loginPassword
        })
        commit('SET_TOKEN', data.token)
        router.push('/')
      } catch (e) {
        commit('SET_LOGIN_ERROR', 'Oops, An error occured trying to login')
      }
    }
  },

  getters: {
    isLoggedIn(state) {
      return !!state.token
    }
  }
}
