<template>
    <header class="home-page-header">
        <article>
            <section></section>
            <section><Avatar :size="42" avaterImgUrl="https://avatars3.githubusercontent.com/u/8131019?v=4"></Avatar></section>
        </article>
    </header>
</template>

<script>
import Avatar from '@/components/Avatar'

export default {
  name: 'HomePageHeader',
  components: { Avatar }
}
</script>

<style>
header.home-page-header {
  display: block;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  border-bottom: 1px solid rgba(30, 35, 42, 0.06);
  box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.2);
  background-color: white;
  padding: 3px 0;
}
header.home-page-header > article {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
header.home-page-header > article > section:first-of-type {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}
header.home-page-header > article > section:last-of-type {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}
</style>
