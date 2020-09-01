import Vue from 'vue';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
import jquery from 'jquery';

import 'bootstrap';
import App from './App.vue';
import router from './router';

window.$ = jquery;

Vue.config.productionTip = false;
// Vue.use(VueAxios, axios);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
