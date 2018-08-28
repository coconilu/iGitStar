<template>
  <header class="home-page-header">
    <article>
      <section></section>
      <section>
        <Avatar  :size="42" avaterImgUrl="https://avatars3.githubusercontent.com/u/8131019?v=4"></Avatar>
        <div class="login-form">
          <input type="text" placeholder="Your Github Login Name" /><button type="submit">Login</button>
        </div>
      </section>
    </article>
  </header>
</template>

<script>
import Avatar from '@/components/Avatar'

export default {
  name: 'HomePageHeader',
  props: {
    type: String,
    default: ''
  },
  data: function () {
    return {
      hasLogined: false
    }
  },
  components: { Avatar }
}
</script>

<style>
header.home-page-header {
  display: block;
  box-sizing: border-box;
  width: 100%;
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
