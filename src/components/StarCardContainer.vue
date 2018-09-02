<template>
  <transition-group name="stars-container" class="stars-container" tag="div" enter-active-class="slideInUp" leave-active-class="slideOutRight" move-class="when-move">
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
.card-container-move {
  transition: transform 1s;
}
</style>
