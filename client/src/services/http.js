import axios from 'axios'
import store from '../store/'

export default () => {
  console.log(store.state)
  return axios.create({
    baseURL: store.state.baseUrl,
    timeout: 1000,
    withCredentials: false, // This is the default
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.state.authenticate.token}`
    }
  })
}
