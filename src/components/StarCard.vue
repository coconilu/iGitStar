<template>
  <section class="star-card">
    <img src="https://avatars3.githubusercontent.com/u/1778935?v=4" alt="logo">
    <header class="star-card-header">GoogleChrome/puppeteer</header>
    <div class="star-card-description">Headless Chrome Node API</div>
    <footer class="star-card-footer">
      <div class="star-card-footer-language"><span class="star-card-footer-language-icon"></span> JavaScript</div>
      <div class="star-card-footer-star">
        <svg aria-label="star" class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>2
      </div>
      <div class="star-card-footer-fork">
        <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>2
      </div>
      <div class="star-card-footer-issue">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>2
      </div>
      <div class="star-card-footer-updated">Updated 34 minutes ago</div>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'StarCard',
  methods: {
    getUpdatedTimeString: function (updatedTime) {
      var updatedHour = +new Date() - new Date(updatedTime).getTime()
      return updatedHour
    }
  }
}
</script>

<style>
section.star-card {
  width: 700px;
  height: 200px;
  margin: 25px 0;
  padding-left: 30px;
  position: relative;
}
section > img {
  max-width: 40px;
  max-height: 40px;
  position: absolute;
  left: -20px;
  top: -20px;
}
footer.star-card-footer > * {
  display: inline-block;
}
span.star-card-footer-language-icon {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: aquamarine;
}
</style>
