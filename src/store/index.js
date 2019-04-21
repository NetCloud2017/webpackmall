import Vue from 'vue'
import Vuex from 'vuex'
import {} from './modules/index'
import state from './state'
Vue.use(Vuex)
const store = new Vuex.Store({
  state
})
export default store
