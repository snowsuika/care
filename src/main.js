import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import jquery from 'jquery';
import {
  ValidationObserver,
  ValidationProvider,
  configure,
  localize,
  extend
} from 'vee-validate'; // 驗證套件
import * as rules from 'vee-validate/dist/rules'; // 規則檔案（ex: email...）
import zhTW from 'vee-validate/dist/locale/zh_TW.json'; // 語系檔案
import 'bootstrap';

//FormWizard 套件
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';

//sweetAlert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Bus
import './bus';
// Loading 套件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

//vue-loading-overlay

Vue.component('Loading', Loading);
Vue.use(Loading, {
  canCancel: false,
  color: '#000000',
  loader: 'dots', //spinner/dots/bars
  width: 50,
  height: 50,
  backgroundColor: '#ffffff',
  isFullPage: true,
  opacity: 0.8
});
//Multiselect
import Multiselect from 'vue-multiselect';

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

//SweetAlert
Vue.use(VueSweetalert2, options);
Vue.use(VueFormWizard);

Vue.config.productionTip = false;

// vee-validate
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
}); // 所有驗證規則
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});
localize('tw', zhTW);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

// register globally
Vue.component('multiselect', Multiselect);

Vue.use(VueAxios, axios);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
