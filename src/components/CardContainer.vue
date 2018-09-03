<template>
  <transition-group name="cards-container" class="cards-container" tag="div" leave-active-class="animated flipOutX" enter-active-class="animated flipInX">
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
div.cards-container > .cards-container-move {
  transition: transform .5s;
}
</style>
