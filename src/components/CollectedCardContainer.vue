<template>
  <transition-group name="card-container" class="card-container" tag="div" enter-active-class="bounceInRight" leave-active-class="bounceOutDown" move-class="when-move">
    <slot></slot>
  </transition-group>
</template>

<script>
export default {
  name: 'CollectedCardContainer'
}
</script>

<style>
.when-move {
  transition: all 0.8 ease-in-out;
}
</style>
