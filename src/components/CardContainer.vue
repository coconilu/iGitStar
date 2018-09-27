<template>
  <transition-group name="cards-container" class="cards-container" tag="div">
    <slot></slot>
  </transition-group>
</template>

<script>
export default {
  name: 'CardContainer'
}
</script>

<style>
div.cards-container{
  position: relative;
}
.when-cards-active {
  position: absolute;
}
</style>
