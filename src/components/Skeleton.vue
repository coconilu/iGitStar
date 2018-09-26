<template>
  <div class="skeleton">
      <div class="skeleton-image"></div>
      <div class="skeleton-header">
        <div class="skeleton-header-title"></div>
        <div class="skeleton-header-button"></div>
      </div>
      <div class="skeleton-body">
        <div class="skeleton-body-line-one"></div>
        <div class="skeleton-body-line-two"></div>
      </div>
      <div class="skeleton-footer">
        <div class="skeleton-footer-one"></div>
        <div class="skeleton-footer-two"></div>
        <div class="skeleton-footer-three"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Skeleton'
}
</script>

<style>
div.skeleton-image,
div.skeleton-header-title,
div.skeleton-header-button,
div.skeleton-body,
div.skeleton-footer > * {
  background-image: linear-gradient(to right, #d1d1d1, #dbdbdb);
  transform-origin: left;
}

div.skeleton {
  height: 134px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
  margin: 25px 8px;
  padding-left: 35px;
  position: relative;
}
div.skeleton-image {
  position: absolute;
  width: 40px;
  height: 40px;
  left: -10px;
  top: -10px;
  border-radius: 50%;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.2);
}
div.skeleton-header {
  padding-top: 14px;
  box-sizing: border-box;
  height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
}
div.skeleton-header-title {
  height: 100%;
  width: 50%;
  animation: 0.5s ease-in-out infinite alternate scaleX;
}
div.skeleton-header-button {
  height: 100%;
  width: 70px;
  margin-right: 10px;
  border-radius: 18px;
}
div.skeleton-body {
  height: 25px;
  margin: 16px 0;
  width: 35%;
  animation: 0.5s -0.3s ease-in infinite alternate scaleX;
}
div.skeleton-footer {
  height: 14px;
  padding-bottom: 13px;
  text-align: left;
}
div.skeleton-footer > * {
  display: inline-block;
  height: 100%;
  width: 50px;
  margin-right: 30px;
  animation: 1s ease-out infinite alternate scaleX;
}
@keyframes scaleX {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0.6);
  }
}
</style>
