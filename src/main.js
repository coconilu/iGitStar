// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './assets/normalize.css'
import './assets/animate.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  methods: {
    getStars: function () {
      this.$axios.get('https://api.github.com/users/coconilu/starred', {
        'headers': { 'Accept': 'application/vnd.github.v3+json' },
        'params': { 'page': 1 }
      })
        .then((response) => {
          console.log(response)
        })
    },
    getCollections: function (arr) {
      var resultPromise = arr.map((item, index) => {
        return this.$axios.get(`https://api.github.com/repos/${item}`, {
          'headers': { 'Accept': 'application/vnd.github.v3+json' },
          'params': { 'page': 1 }
        })
      })
      Promise.all(resultPromise).then(result => {
        console.log(result)
      }, reason => {
        console.log(reason)
      })
    }
  },
  created: function () {
    // this.getStars()
  }
})
