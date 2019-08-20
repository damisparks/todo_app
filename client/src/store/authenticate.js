export default {
  namespace: true,
  state: { email: null, password: null },
  mutations: {
    SET_EMAIL(state, email) {
      state.email = email;
    },
    SET_PASSWORD(state, password) {
      state.password = password;
    },
  },
};
