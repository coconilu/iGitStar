<template>
  <span class="avatar-container" :style="avatarStyle">
    <svg v-if="!userLogin" viewBox="0 0 1024 1024" version="1.1" :width="size" :height="size"><path d="M819.2 354.134c0-170.667-136.533-307.2-307.2-307.2s-307.2 136.533-307.2 307.2c0 116.053 61.44 215.04 157.013 266.24-129.707 51.2-228.693 163.84-256 307.2-3.413 17.067 6.827 37.547 27.307 40.96h6.827c17.067 0 30.72-10.24 34.133-27.307C204.8 780.8 344.747 664.747 508.587 661.334h6.827c167.253 0 303.787-136.533 303.787-307.2z m-546.133 0c0-133.12 105.813-238.933 238.933-238.933s238.933 105.813 238.933 238.933c0 129.707-105.813 235.52-235.52 238.933h-10.24c-129.707-3.413-232.107-109.227-232.107-238.933zM737.28 664.747c-17.067-10.24-37.547-6.827-47.787 10.24s-6.827 37.547 10.24 47.787c78.507 54.613 133.12 129.707 150.187 218.453 3.413 17.067 17.067 27.307 34.133 27.307h6.827c17.067-3.413 30.72-20.48 27.307-40.96-20.48-105.813-85.333-197.973-180.907-262.827z" p-id="4009" fill="#4D84B2"></path></svg>
    <svg v-if="userLogin" viewBox="0 0 1024 1024" version="1.1" :width="size" :height="size"><path d="M511.801155 1023.99952a488.977757 488.977757 0 0 1-200.483278-935.268882l4.796251-2.158313a28.969354 28.969354 0 0 1 23.981253 52.758757l-4.316626 1.918501a431.662561 431.662561 0 1 0 343.891174-3.597188 29.08926 29.08926 0 0 1 23.981254-52.99857 488.977757 488.977757 0 0 1-191.850028 939.105883z" fill="#BC3F4E" p-id="942"></path><path d="M511.801155 379.623241a28.777504 28.777504 0 0 1-28.777504-28.777504V28.777504a28.777504 28.777504 0 1 1 57.555008 0v322.068233a28.777504 28.777504 0 0 1-28.777504 28.777504z" fill="#BC3F4E" p-id="943"></path></svg>
    <img v-if="userLogin" :src="avaterImgUrl" alt="" :style="avatarStyle">
  </span>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    size: Number,
    avaterImgUrl: String
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
    userLogin: function () {
      return !!this.avaterImgUrl
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
  transition: all 0.2s ease-in-out;
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
