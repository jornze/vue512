// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/reset.css'
import jsonp from 'jsonp'
import axios from 'axios'
Vue.prototype.$http=axios;

Vue.prototype.$jsonp=jsonp
axios.defaults.baseURL = 'http://localhost:8081';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
