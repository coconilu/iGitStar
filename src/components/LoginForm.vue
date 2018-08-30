<template>
  <div class="login-form">
    <input type="text" placeholder="Your Github Login Name" v-model="userName" @keyup.enter="login"/><button type="submit" @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data: function () {
    return {
      userName: ''
    }
  },
  methods: {
    login: function () {
      this.userName = this.userName.replace(/(^\s*)|(\s*$)/g, '')
      if (this.userName.length) {
        this.$store.dispatch('login', {
          userName: this.userName
        })
      }
    }
  }
}
</script>

<style>
div.login-form > * {
  line-height: 1.8em;
  font-size: 1em;
  outline: none;
  border: solid 1px #4d84b2;
}
div.login-form > input {
  padding: 0 10px;
  border-radius: 10px 0 0 10px;
}
div.login-form > input:focus {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}
div.login-form > button {
  padding: 0 6px;
  border-radius: 0 10px 10px 0;
  background-color: #4d84b2;
  color: white;
}
div.login-form > button:hover {
  opacity: 0.8;
}
div.login-form > button:active {
  opacity: 0.6;
}
</style>
