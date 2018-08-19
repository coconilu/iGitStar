<template>
  <article class="home-page-main">
    <section class="skeleton-container"></section>
    <section class="starcard-container">
      <StarCard></StarCard>
    </section>
  </article>
</template>

<script>
import StarCard from '@/components/StarCard'

export default {
  name: 'HomePageMain',
  components: { StarCard },
  data: function () {
    return {
      isLoadedData: false
    }
  }
}
</script>

<style>
article.home-page-main {
  width: 1000px;
  position: relative;
}
section.skeleton-container {
  display: none;
  position: absolute;
  top: 70;
  left: 0;
  width: 100%;
  min-height: 300px;
  background-color: #a7e8bd;
}
section.starcard-container {
  position: relative;
}
</style>
