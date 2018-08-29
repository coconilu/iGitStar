<template>
  <transition-group name="card-container" class="card-container" tag="div" enter-active-class="slideInUp" leave-active-class="slideOutRight" move-class="when-move">
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
  transition: all 0.8 ease-in-out;
}
</style>
