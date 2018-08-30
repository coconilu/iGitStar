<template>
  <span class="avatar-container" :style="avatarStyle" @click="logout">
    <svg viewBox="0 0 1024 1024" version="1.1" :width="size" :height="size"><path d="M511.801155 1023.99952a488.977757 488.977757 0 0 1-200.483278-935.268882l4.796251-2.158313a28.969354 28.969354 0 0 1 23.981253 52.758757l-4.316626 1.918501a431.662561 431.662561 0 1 0 343.891174-3.597188 29.08926 29.08926 0 0 1 23.981254-52.99857 488.977757 488.977757 0 0 1-191.850028 939.105883z" fill="#BC3F4E" p-id="942"></path><path d="M511.801155 379.623241a28.777504 28.777504 0 0 1-28.777504-28.777504V28.777504a28.777504 28.777504 0 1 1 57.555008 0v322.068233a28.777504 28.777504 0 0 1-28.777504 28.777504z" fill="#BC3F4E" p-id="943"></path></svg>
    <img :src="avatarImgUrl" alt="" :style="avatarStyle">
  </span>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    size: Number
  },
  data: function () {
    return {
      avatarStyle: {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }
  },
  computed: {
    avatarImgUrl: function () {
      return this.$store.state.avatarURL
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
span.avatar-container {
  position: relative;
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
}
span.avatar-container > * {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.4s ease-in-out;
}
span.avatar-container > img {
  opacity: 1;
}
span.avatar-container > img:hover {
  opacity: 0;
}
span.avatar-container > svg {
  opacity: 1;
}
span.avatar-container > svg:hover {
  opacity: 1;
}
</style>
