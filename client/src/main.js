import 'vuetify/dist/vuetify.min.css';
import { sync } from 'vuex-router-sync';
import Vue from 'vue';
// import axios from 'axios';
import vuetify from './plugins/vuetify';

import App from './App.vue';
import Holder from './components/Holder.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;
Vue.component('Holder', Holder);

sync(store, router);

// window.axios = axios;
// axios.defaults.baseURL = '127.0.0.1:3333';

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,
}).$mount('#app');
