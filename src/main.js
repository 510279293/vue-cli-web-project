import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'

import './plugins';
import './registerGlobalComponent';

import extend from './extend';
import './assets/css/reset.css';

Vue.config.productionTip = false

extend(Vue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
