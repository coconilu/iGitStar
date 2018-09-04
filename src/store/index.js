import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    hasLogin: false,
    userName: '',
    avatarURL: '',
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
      state.hasLogin = window.localStorage.getItem('hasLogin') === 'true'
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
      var _userName = !payload ? state.userName : payload.userName
      if (_userName.length) {
        this.$axios.get(`https://api.github.com/users/${_userName}`, {
          'headers': {
            'Accept': 'application/vnd.github.v3+json'
          }
        }).then(response => {
          if (response.status === 200) {
            commit('updateUserName', { userName: response.data.login })
            commit('updateAvatarURL', { avatarURL: response.data.avatar_url })
            commit('updateLoginState', { hasLogin: true })
            commit('updateUserInformations', response.data)
            setTimeout(() => {
              window.localStorage.setItem('userName', state.userName)
              window.localStorage.setItem('avatarURL', state.avatarURL)
            })
          }
        }).catch(reason => {
          console.log('login fail!')
          this.$store.commit('updateLoginState', { hasLogin: false })
        })
      }
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

store.$axios = axios

export default store
