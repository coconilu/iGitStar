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
      template: '<span class="login-form-when-success"><svg viewBox="0 0 1365 1024" version="1.1" width="10" height="12"><path d="M30.122667 564.053333a52.906667 52.906667 0 0 1-5.12-65.28l23.893333-32.426666a41.728 41.728 0 0 1 58.538667-8.277334l262.741333 201.386667c37.290667 28.586667 96.938667 27.306667 133.12-2.901333L1259.008 27.050667a47.616 47.616 0 0 1 62.464 2.56l13.824 13.653333a41.472 41.472 0 0 1-0.853333 60.074667l-835.84 822.613333a83.882667 83.882667 0 0 1-119.893334-1.194667L30.122667 564.053333z" p-id="2966" fill="#ffffff"></path></svg></span>'
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
  width: 10rem;
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
