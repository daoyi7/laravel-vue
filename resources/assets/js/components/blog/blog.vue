<template>
  <div class="blog-wrap">
    <div class="blog-item">
      <div class="blog-module" v-for="(blog, index) in blogs" key="index">
        <div class="thumb">
          <router-link to="/">
            <img :src="blog.thumb">
          </router-link>
        </div>
        <div class="main">
          <h4 class="title">
            <router-link to="/">一篇测试的文章</router-link>
          </h4>
          <p class="info">这里是一个info这里是一个info这里是一个info这里是一个info这里是一个info这里是一个info这里是一个info</p>
          <div class="list">
            <p class="list-icon" :class="blog.class" v-for="">
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
            thumb: "../../../images/bg.png",
            class: "time",
            icon: "icon iconfont icon-clock2",
            text: "2小时前"
          },
          {
            thumb: "../../../images/bg1.png",
            class: "view",
            icon: "icon iconfont icon-view",
            text: "80"
          },
          {
            thumb: "../../../images/bg2.png",
            class: "comments",
            icon: "icon iconfont icon-iconcomments",
            text: "80"
          },
          {
            thumb: "../../../images/bg3.png",
            class: "like",
            icon: "icon iconfont icon-like1",
            text: "6"
          },
          {
            thumb: "../../../images/bg4.png",
            class: "tag",
            icon: "icon iconfont icon-tag",
            text: "think"
          },
        ],
      }
    }
  }

</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

  $trans: .5s linear

  .blog-wrap
    width: 100%
    height: auto
    overflow: hidden
    margin-top: 1em
    .blog-item
      width: 100%
      .blog-module:hover
        background: rgba(255, 255, 255, 0.6)
        .thumb
          a
            img
              transform: translateX(-.625em)
      .blog-module
        position: relative
        width: 100%
        background: #fff
        padding: .5em 0em
        margin-bottom: .5em
        display: flex
        transition: background $trans
        -moz-transition: background $trans
        -webkit-transition: background $trans
        -o-transition: background $trans
        .thumb
          flex: 0 0 11.75em
          width: 11.75em
          height: 7.5em
          margin-right: 1em
          padding-left: .4em
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
              transform: translateX(0)
              transition: transform $trans
              -moz-transition: transform $trans
              -webkit-transition: transform $trans
              -o-transition: transform $trans
        .main
          flex: 1
          padding-right: 1em
          .title:hover
            transform: translateX(.4em)
            a::before
              width: 100%
          .title
            line-height: 1.56em
            padding-bottom: .625em
            font-weight: 700
            transform: translateX(0)
            transition: transform $trans
            -moz-transition: transform .5s linear
            -webkit-transition: transform $trans
            -o-transition: transform $trans
            a
              position: relative
              font-size: .875em
              color: #00030d
            a::before
              content: ""
              position: absolute
              top: 1.2em
              width: 0
              height: 1px
              background: #00030d
              transition: width $trans
              -moz-transition: width $trans
              -webkit-transition: width $trans
              -o-transition: width $trans
          .info
            height: 3.98em
            font-size: .8em
            line-height: 1.7em
            color: #1d1d1d
          .list
            display: flex
            line-height: 1.56em
            padding-top: .625em
            font-size: .875em
            .list-icon
              flex: 1
              i
                vertical-align: middle
                margin-right: .3em
              span
                vertical-align: middle
            .list-icon.like
              cursor: pointer
            .list-icon.tag
              i
                font-weight: 700

</style>
