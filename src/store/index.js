import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules/index'
import state from './state'
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  modules: {
    ...modules
  }
})
export default store
