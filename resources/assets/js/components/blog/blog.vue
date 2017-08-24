<template>
  <div class="blog-wrap">
    <div class="blog-item">
      <div class="blog-module">
        <div class="thumb">
          <router-link to="/">
            <img src="../../../images/bg.png">
          </router-link>
        </div>
        <div class="main">
          <div class="title">
            <h2>
              <router-link to="/">一篇测试的文章</router-link>
            </h2>
          </div>
          <div class="info">
            <p>这里是一个info这里是一个info这里是一个info这里是一个info这里是一个info这里是一个info这里是一个info</p>
          </div>
          <div class="list">
            <p :class="blog.class"  v-for="(blog, index) in blogs" key="index">
              <i :class="blog.icon"></i>
              <span>{{ blog.text }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        blogs: [
          {
            class: "time",
            icon: "icon iconfont icon-clock2",
            text: "2小时前"
          },
          {
            class: "view",
            icon: "icon iconfont icon-view",
            text: "80"
          },
          {
            class: "comments",
            icon: "icon iconfont icon-iconcomments",
            text: "80"
          },
          {
            class: "like",
            icon: "icon iconfont icon-like1",
            text: "6"
          },
          {
            class: "tag",
            icon: "icon iconfont icon-tag",
            text: "think"
          },
        ]
      }
    }
  }

</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>
  .blog-wrap
    width: 100%
    height: auto
    overflow: hidden
    margin-top: 1em
    .blog-item
      position: relative
      width: 100%
      display: flex
      .blog-module
        width: 100%
        background: #fff
        padding: 0.5em
        .thumb
          flex: 0 0 11.75em
          width: 11.75em
          height: 7.5em
          margin-right: 1em
          a
            width: 100%
            height: 100%
            display: block
            overflow: hidden
            img
              min-width: 100%
              max-width: calc(100% + 15px)
              width: calc(100% + 15px)
              min-height: 130px
              height: auto

</style>
