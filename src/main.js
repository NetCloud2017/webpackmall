import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/css/init_style.css'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
Vue.use(ElementUI)

Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
