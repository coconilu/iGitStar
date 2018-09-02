<template>
  <transition-group name="collections-container" class="collections-container" tag="div" enter-active-class="slideInRight" leave-active-class="slideOutDown" move-class="when-move">
    <slot></slot>
  </transition-group>
</template>

<script>
export default {
  name: 'CollectedCardContainer'
}
</script>

<style>
div.collections-container {
  position: relative;
}
.collections-container-move {
  transition: transform 1s;
}
</style>
