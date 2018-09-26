<template>
  <article class="introduction">
    <div class="introduction-content-wrapper">
      <p class="introduction__presentation">
        <span class="introduction__presentation__header">iGitStar</span> 是管理 GitHub stars 的辅助工具，它是独立于 GitHub 的，而不会影响你的 GitHub 的数据。对于经常需要翻阅 stars 或者借助 stars 学习的用户非常适用，它可以帮你置顶你喜欢的 star 项目。
      </p>
      <p class="introduction__instruction">
        马上加入吧，只需要在右上角输入你的 GitHub Login Name（请注意，不是登录邮箱哦）。
      </p>
      <p class="introduction__footer">Yours</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style>
.introduction {
  position: relative;
}
.introduction-content-wrapper {
  padding-top: 50px;
  width: 500px;
  padding: 20px 40px;
  transition: all 0.3s ease-in-out;
  position: relative;
  top: 30px;
}
.introduction-content-wrapper:hover {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border: 1px solid #dcdee2;
  border-color: #e8eaec;
  border-radius: 26px;
  background-color: #fff;
  transform: translateY(-10px);
}
.introduction__presentation {
  font-size: 1.5em;
  font-weight: 100;
  color: #4d84b2;
  line-height: 2em;
  text-align: justify;
}
.introduction__presentation__header {
  padding: 0 5px;
  display: inline-block;
  transform: rotate(-18deg);
  font-weight: 500;
}
.introduction__instruction {
  font-size: 1.3em;
  font-weight: 100;
  color: #daac6c;
  line-height: 1.8em;
  text-align: justify;
}
.introduction__footer {
  text-align: right;
  font-size: 1.5em;
  line-height: 2em;
  color: #BC3F4E;
  transition: all 0.3s linear;
}
.introduction-content-wrapper:hover > .introduction__footer{
  transform: translateX(-10px);
}
@media screen and (max-width: 600px) {
  .introduction-content-wrapper {
    width: 90%;
  }
}
</style>
