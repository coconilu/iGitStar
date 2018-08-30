<template>
<div class="home-page">
  <HomePageHeader></HomePageHeader>
  <article class="home-page-main-container">
    <HomePageBody></HomePageBody>
    <HomePageFooter></HomePageFooter>
  </article>
</div>
</template>

<script>
import HomePageHeader from '@/components/HomePageHeader'
import HomePageBody from '@/components/HomePageBody'
import HomePageFooter from '@/components/HomePageFooter'

export default {
  name: 'HomePage',
  components: { HomePageHeader, HomePageBody, HomePageFooter }
}
</script>

<style>
div.home-page {
  width: 100%;
  height: 100%;
}
div.home-page > *:first-child {
  height: 60px;
  z-index: 100;
}
article.home-page-main-container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}
article.home-page-main-container > *:nth-child(1) {
  padding-top: 70px;
  flex: 1 0 auto;
}
article.home-page-main-container > *:nth-child(2) {
  flex: 0 0 auto;
}
</style>
