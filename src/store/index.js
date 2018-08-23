import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    collections: [],
    stars: []
  },
  mutations: {
    setUserName (userName) {
      this.state.userName = userName
    }
  }
})
