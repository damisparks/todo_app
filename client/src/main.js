import 'vuetify/dist/vuetify.min.css';
import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import vuetify from './plugins/vuetify';

import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,
}).$mount('#app');
