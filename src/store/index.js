import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasLogin: false,
    userName: 'coconilu',
    avatarURL: 'https://avatars3.githubusercontent.com/u/8131019?v=4',
    collections: [],
    userInformations: {}
  },
  mutations: {
    updateLoginState: function (state, payload) {
      state.hasLogin = payload.hasLogin
    },
    updateUserName: function (state, payload) {
      state.userName = payload.userName
    },
    updateAvatarURL: function (state, payload) {
      state.avatarURL = payload.avatarURL
    },
    updateUserInformations: function (state, payload) {
      state.userInformations = { ...payload }
    },
    updateCollections: function (state, payload) {
      switch (payload.type) {
        case 'add':
          state.collections.unshift(payload.newItem)
          break
        case 'toTop':
          state.collections.unshift.apply(state.collections, state.collections.splice(payload.toTopIndex, 1))
          break
        case 'remove':
          state.collections.splice(payload.removeIndex, 1)
          break
      }
    },
    initData: function (state) {
      // state.userName = window.localStorage.getItem('userName') || ''
      // state.avatarURL = window.localStorage.getItem('avatarURL') || ''
      state.collections = JSON.parse(window.localStorage.getItem('collections')) || []
    },
    emptyData: function (state) {
      state.userName = ''
      state.avatarURL = ''
      state.collections = []
      state.userInformations = {}
    }
  },
  actions: {
    login: function ({ commit, state }, payload) {
      payload.userName && commit('updateUserName', payload)
      payload.avatarURL && commit('updateAvatarURL', payload)
      commit('updateLoginState', { hasLogin: true })
      setTimeout(() => {
        window.localStorage.setItem('userName', state.userName)
        window.localStorage.setItem('avatarURL', state.avatarURL)
      })
    },
    logout: function ({ commit, state }) {
      commit('emptyData')
      setTimeout(() => {
        window.localStorage.setItem('userName', state.userName)
        window.localStorage.setItem('avatarURL', state.avatarURL)
        window.localStorage.setItem('collections', JSON.stringify(state.collections || []))
      })
    },
    persistCollections: function ({ commit, state }, payload) {
      commit('updateCollections', payload)
      setTimeout(() => {
        window.localStorage.setItem('collections', JSON.stringify(state.collections || []))
      })
    }
  }
})
