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
            <router-link to="/detail">一篇测试的文章</router-link>
          </h4>
          <p class="info">这里是一个info这里是一个info这里是一个info这里是一个info这里是一个info这里是一个info这里是一个info</p>
          <div class="list">
            <p class="list-icon" :class="blog.class" v-for="(icon, index) in icons" key="index">
              <i :class="icon.icn"></i>
              <span>{{ icon.text }}</span>
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
          },
          {
            thumb: "../../../images/bg1.png",
            class: "view",
            icon: "icon iconfont icon-view",
          },
          {
            thumb: "../../../images/bg2.png",
            class: "comments",
            icon: "icon iconfont icon-iconcomments",
          },
          {
            thumb: "../../../images/bg3.png",
            class: "like",
            icon: "icon iconfont icon-like1",
          },
          {
            thumb: "../../../images/bg4.png",
            class: "tag",
            icon: "icon iconfont icon-tag",
          },
        ],
        icons: [
          {
            icn: "icon iconfont icon-clock2",
            text: "2小时前"
          },
          {
            icn: "icon iconfont icon-view",
            text: "80"
          },
          {
            icn: "icon iconfont icon-iconcomments",
            text: "20"
          },
          {
            icn: "icon iconfont icon-like1",
            text: "6"
          },
          {
            icn: "icon iconfont icon-tag",
            text: "think"
          },
        ]
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
              transform: translateX(-1em)
      .blog-module
        position: relative
        width: 100%
        background: #fff
        padding: .4em 0em
        margin-bottom: 1em
        display: flex
        transition: background $trans
        -moz-transition: background $trans
        -webkit-transition: background $trans
        -o-transition: background $trans
        .thumb
          flex: 0 0 17em
          width: 17em
          height: 11em
          margin-right: 1em
          padding-left: 0.5em
          a
            width: 100%
            height: 100%
            display: block
            overflow: hidden
            img
              min-width: 100%
              max-width: calc(100% + 1.5em)
              width: calc(100% + 1.5em)
              min-height: 13em
              height: auto
              transform: translateX(0)
              transition: transform $trans
              -moz-transition: transform $trans
              -webkit-transition: transform $trans
              -o-transition: transform $trans
        .main
          flex: 1
          padding-right: 1.6em
          .title:hover
            transform: translateX(.7em)
            a::before
              width: 100%
          .title
            line-height: 2em
            padding-bottom: .5em
            font-weight: 700
            transform: translateX(0)
            transition: transform $trans
            -moz-transition: transform $trans
            -webkit-transition: transform $trans
            -o-transition: transform $trans
            a
              position: relative
              font-size: 1.4em
              color: #00030d
            a::before
              content: ""
              position: absolute
              top: 1.3em
              width: 0
              height: 1px
              background: #00030d
              transition: width $trans
              -moz-transition: width $trans
              -webkit-transition: width $trans
              -o-transition: width $trans
          .info
            height: 5em
            font-size: 1.3em
            line-height: 1.8em
            color: #1d1d1d
          .list
            display: flex
            line-height: 1.4em
            padding-top: .2em
            font-size: 1.2em
            .list-icon
              flex: 1
              i
                vertical-align: middle
                margin-right: .2em
                font-size: 1.2em
              span
                vertical-align: middle
            .list-icon.like
              cursor: pointer
            .list-icon.tag
              i
                font-weight: 700

</style>
