<template>
  <section class="star-card animated bounceInRight">
    <article class="star-card-main">
      <img src="https://avatars3.githubusercontent.com/u/1778935?v=4" alt="logo">
      <header class="star-card-header">
        <div class="star-card-header-title">GoogleChrome/puppeteer</div>
        <div class="star-card-header-buttons">
          <slot>
            <button><svg viewBox="0 0 1024 1024" width="14" height="14" version="1.1" p-id="2126" ><path d="M927.4 273.5v-95.4h-87.9V82.8h-201v95.3h-87.9v95.4h-78.5v-95.4h-88V82.8H183.2v95.3H95.3v95.4H16.7v190.6h78.6v95.4h75.3v95.3H246v95.3h87.9v95.4h100.5v95.3h153.9v-95.3h100.4v-95.4h88v-95.3H852.1v-95.3h75.3v-95.4h78.5V273.5z" fill="#fff" p-id="2127"/></svg><span>Collect</span></button>
          </slot>
        </div>
      </header>
      <p class="star-card-description">Headless Chrome Node API</p>
      <footer class="star-card-footer">
        <div class="star-card-footer-language"><span class="star-card-footer-language-icon"></span> JavaScript</div>
        <div class="star-card-footer-star">
          <svg aria-label="star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>2
        </div>
        <div class="star-card-footer-fork">
          <svg viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>2
        </div>
        <div class="star-card-footer-issue">
          <svg viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>2
        </div>
        <div class="star-card-footer-updated">Updated 34 minutes ago</div>
      </footer>
    </article>
    <aside>
    </aside>
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
  margin: 25px 0;
  padding-left: 35px;
  position: relative;
  text-align: left;
  border: 1px solid #dcdee2;
  border-color: #e8eaec;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
}
section.star-card:hover {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
}
section.star-card > article.star-card-main > img {
  max-width: 40px;
  max-height: 40px;
  position: absolute;
  left: -10px;
  top: -10px;
  border-radius: 50%;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.2);
}
section.star-card > article.star-card-main > header.star-card-header {
  box-sizing: border-box;
  padding-top: 15px;
  height: 45px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
}
section.star-card
  > article.star-card-main
  > header.star-card-header
  > div.star-card-header-title {
  flex: 1 0 auto;
  font-size: 30px;
  line-height: 30px;
  vertical-align: text-top;
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.1px;
}
section.star-card
  > article.star-card-main
  > header.star-card-header
  > div.star-card-header-buttons {
  flex: 0 0 auto;
  height: 100%;
  margin-right: 15px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: stretch;
}
section.star-card
  > article.star-card-main
  > header.star-card-header
  > div.star-card-header-buttons
  > button {
  border-radius: 32px;
  border-style: none;
  padding: 3px 15px;
  color: #fff;
  background-color: #2d8cf0;
  border-color: #2d8cf0;
  line-height: 1.2em;
  vertical-align: middle;
  transition: all 0.3s ease-in-out;
}
section.star-card
  > article.star-card-main
  > header.star-card-header
  > div.star-card-header-buttons
  > button:hover {
  opacity: 0.8;
}
section.star-card
  > article.star-card-main
  > header.star-card-header
  > div.star-card-header-buttons
  > button:active {
  opacity: 0.6;
}
section.star-card
  > article.star-card-main
  > header.star-card-header
  > div.star-card-header-buttons
  > button
  > span {
  padding-left: 10px;
  letter-spacing: 1px;
}
section.star-card > article.star-card-main > p.star-card-description {
  font-size: 1.1em;
}
section.star-card > article.star-card-main > footer.star-card-footer > * {
  display: inline-block;
}
span.star-card-footer-language-icon {
  display: inline-block;
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: aquamarine;
  vertical-align: top;
}
section.star-card > article.star-card-main > footer.star-card-footer {
  padding-bottom: 0.5em;
}
section.star-card > article.star-card-main > footer.star-card-footer * {
  font-size: 0.8em;
}

section.star-card > article.star-card-main > footer.star-card-footer svg {
  vertical-align: top;
  width: 1em;
  height: 1em;
}
</style>
