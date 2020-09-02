import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import jquery from 'jquery';
import 'bootstrap';
//FormWizard 套件
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';

import App from './App.vue';
import router from './router';

window.$ = jquery;

import VCalendar from 'v-calendar';

Vue.use(VCalendar);

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'vc' // Use <vc-calendar /> instead of <v-calendar />
});

Vue.use(VueFormWizard);

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
