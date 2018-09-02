<template>
  <transition-group name="stars-container" class="stars-container" tag="div" mode="out-in">
    <slot></slot>
  </transition-group>
</template>

<script>
export default {
  name: 'CardContainer'
}
</script>

<style>
div.stars-container{
  position: relative;
}
.stars-container-move {
  transition: transform 1s;
}
</style>
