import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    avatarURL: '',
    userInformations: {}
  },
  mutations: {
    setUserName: function (state, payload) {
      state.userName = payload.userName
    },
    setAvatarURL: function (state, payload) {
      state.avatarURL = payload.avatarURL
    },
    setUserInformations: function (state, payload) {
      state.userInformations = { ...payload }
    }
  }
})
