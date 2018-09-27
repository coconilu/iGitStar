<template>
  <div class="login-form">
    <input type="text" placeholder="Your Github username" v-model="userName" @keyup.enter="login"/><button type="submit" @click="login"><component v-bind:is="hasLogined?'successLogin':loginState"></component></button>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  components: {
    'beforeLogin': {
      template: '<span>Login</span>'
    },
    'whenLogin': {
      template: '<span class="login-form-when-loading"></span>'
    },
    'successLogin': {
      template: '<span class="login-form-when-success">√</span>'
    }
  },
  data: function () {
    return {
      userName: '',
      loginState: 'beforeLogin'
    }
  },
  watch: {
    hasLogined: function (newValue) {
      console.log('hi', newValue)
      if (newValue) {
        this.loginState = 'successLogin'
      }
    }
  },
  computed: {
    hasLogined: function () {
      return !!this.$store.state.userName.length
    }
  },
  methods: {
    login: function () {
      this.userName = this.userName.replace(/(^\s*)|(\s*$)/g, '')
      if (this.userName.length) {
        this.loginState = 'whenLogin'
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
.login-form > button {
  padding: 0 6px;
  border-radius: 0 10px 10px 0;
  background-color: #4d84b2;
  color: white;
  width: 54px;
  transition: opacity 0.3s;
  /* animation: login-form-when-loading 1s linear 0s infinite alternate both; */
}
.login-form > button:hover {
  opacity: 0.8;
}
.login-form > button:active {
  opacity: 0.6;
}
.login-form-when-loading {
  height: 10px;
  width: 10px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  animation: login-form-when-loading-animation 1s linear 0s infinite normal both;
}
.login-form-when-success {
  display: inline-block;
  transform: scale(2.1, 1.5);
}
@keyframes login-form-when-loading-animation {
  0% {
    transform: scale(1, 0.5);
  }
  20% {
    transform: scale(1, 0.5) translateX(-16px);
  }
  25% {
    transform: translateX(-20px);
  }
  30% {
    transform: scale(1, 0.5) translateX(-16px);
  }
  50% {
    transform: scale(1, 0.5);
  }
  70% {
    transform: scale(1, 0.5) translateX(16px);
  }
  75% {
    transform: translateX(20px);
  }
  80% {
    transform: scale(1, 0.5) translateX(16px);
  }
  100% {
    transform: scale(1, 0.5);
  }
}
</style>
