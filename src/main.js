import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import jquery from 'jquery';
import 'bootstrap';
//FormWizard 套件
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
//sweetAlert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue';
import router from './router';

window.$ = jquery;

import VCalendar from 'v-calendar';
Vue.use(VCalendar);
// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'vc' // Use <vc-calendar /> instead of <v-calendar />
});
const options = {
  confirmButtonColor: '#6A9232',
  cancelButtonColor: '#e3ead8'
};

Vue.use(VueSweetalert2, options);
Vue.use(VueSweetalert2);
Vue.use(VueFormWizard);

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
