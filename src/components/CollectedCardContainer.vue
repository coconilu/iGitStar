<template>
  <transition-group name="collections-container" class="collections-container" tag="div" mode="out-in">
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
