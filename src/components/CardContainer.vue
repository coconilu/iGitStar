<template>
  <transition-group name="cards-container" class="cards-container" tag="div" leave-active-class="animated flipOutX when-cards-active" enter-active-class="animated flipInX when-cards-active">
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
