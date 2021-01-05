import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeIndex: 1
  },
  mutations: {
    SET_ACTIVE_INDEX: (state, data) => {
      state.activeIndex = data
    }
  },
  actions: {}
})
