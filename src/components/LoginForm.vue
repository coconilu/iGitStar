<template>
  <div class="login-form">
    <input type="text" :class="{'input--background-animation': logining}" placeholder="Your Github username" v-model="userName" @keyup.enter="login"/><button type="submit" @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data: function () {
    return {
      userName: '',
      logining: false
    }
  },
  methods: {
    login: function () {
      this.logining = true
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
.login-form > * {
  line-height: 1.8em;
  font-size: 1em;
  outline: none;
  border: solid 1px #4d84b2;
}
.login-form > input {
  padding: 0 10px;
  width: 157px;
  border-radius: 10px 0 0 10px;
}
.login-form > input:focus {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}
.input--background-animation {
  background-image: linear-gradient(to right, #d1d1d1 0, #dbdbdb 100%);
  background-origin: padding-box;
  background-size: 0%;
  background-repeat: no-repeat;
  background-position: left;
  animation: input-background-animation 1s linear 0s infinite alternate both;
}
.login-form > button {
  padding: 0 6px;
  border-radius: 0 10px 10px 0;
  background-color: #4d84b2;
  color: white;
}
.login-form > button:hover {
  opacity: 0.8;
}
.login-form > button:active {
  opacity: 0.6;
}
@keyframes input-background-animation {
  0% {
    background-size: 0%;
  }
  100% {
    background-size: 100%;
  }
}
</style>
