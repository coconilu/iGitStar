<template>
  <header class="home-page-header">
    <article>
      <section></section>
      <section>
        <transition name="login-widget" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp" mode="out-in">
          <Avatar v-if="shouldShowAvatar" :size="42"></Avatar>
          <LoginForm v-else></LoginForm>
        </transition>
      </section>
    </article>
  </header>
</template>

<script>
import Avatar from '@/components/Avatar'
import LoginForm from '@/components/LoginForm'

export default {
  name: 'HomePageHeader',
  components: { Avatar, LoginForm },
  data: function () {
    return {
      shouldShowAvatar: false,
      firstTime: true
    }
  },
  computed: {
    hasLogined: function () {
      return !!this.$store.state.userName.length
    }
  },
  watch: {
    hasLogined: {
      immediate: true,
      handler: function (newValue) {
        if (newValue) {
          if (this.firstTime) {
            this.shouldShowAvatar = true
            this.firstTime = false
          } else {
            setTimeout(() => {
              this.shouldShowAvatar = true
            }, 300)
          }
        } else {
          this.shouldShowAvatar = false
        }
      }
    }
  }
}
</script>

<style>
header.home-page-header {
  display: block;
  box-sizing: border-box;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  border-bottom: 1px solid rgba(30, 35, 42, 0.06);
  box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.2);
  background-color: white;
  padding: 3px 0;
}
header.home-page-header > article {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  width: 1200px;
  padding: 0 10px;
  height: 100%;
  margin: 0 auto;
}
header.home-page-header > article > section:first-of-type {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}
header.home-page-header > article > section:last-of-type {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}

@media screen and (max-width: 1200px) {
  header.home-page-header > article {
    box-sizing: border-box;
    width: 100%;
  }
}
</style>
