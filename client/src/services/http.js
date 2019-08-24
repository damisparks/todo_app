import axios from "axios";
import store from "@/store";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3333",
  timeout: 1000,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
    // Authorization: `Bearer ${store.authenticate.state.token}`
  }
});

export default {
  registerUser(payload) {
    return apiClient.post("auth/register", payload);
  },

  loginUser(payload) {
    return apiClient.post("auth/login", payload);
  },

  onListCreation(payload) {
    return apiClient.post("lists", payload);
  }
};
console.log("This is store. ", apiClient.defaults);

// export default () =>
//   axios.create({
//     baseURL: "http://127.0.0.1:3333",
//     timeout: 1000,
//     withCredentials: false, // This is the default
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${store.state.authenticate.token}`
//     },
//     registerUser(payload) {
//       return axios.post("auth/register", payload);
//     },

//     loginUser(payload) {
//       return axios.post("auth/login", payload);
//     },

//     onListCreation(payload) {
//       return axios.post("lists", payload);
//     }
//   });

// import axios from "axios";
// // eslint-disable-next-line import/no-cycle
// import store from "../store";

// export default () =>
//   axios.create({
//     baseURL: store.state.baseUrl,
//     timeout: 5000,
//     headers: {
//       Authorization: `Bearer ${store.state.authenticate.token}`
//     }
//   });
