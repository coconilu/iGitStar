<template>
  <transition-group name="card-container" class="card-container" tag="div" enter-active-class="bounceInRight" leave-active-class="bounceOutRight" move-class="when-move">
    <slot></slot>
  </transition-group>
</template>

<script>
export default {
  name: 'CardContainer'
}
</script>

<style>
.when-move {
  transition: all 0.5 ease-in-out;
}
</style>
