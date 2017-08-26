<template>
    <nav class="nav">
        <div class="nav-wrap">
            <div class="nav-item" v-for="(nav,index) in navs" key="index">
                <router-link class="nav-link" to="/">
                    <i :class="nav.icon"></i>
                    <span class="nav-text">{{ nav.name }}</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        navs: [
          {
            icon: "icon iconfont icon-home",
            name: "HOME"
          },
          {
            icon: "icon iconfont icon-article",
            name: "BLOG"
          },
          {
            icon: "icon iconfont icon-project",
            name: "PROJECT"
          },
          {
            icon: "icon iconfont icon-bangzhu-copy",
            name: "THINK"
          },
          {
            icon: "icon iconfont icon-me",
            name: "ABOUT"
          },
        ]
      }
    }
  }

</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

    .nav
      position: fixed
      top: 5em
      left: 22.48em
      width: 8.75em
      .nav-wrap
        width: 100%
        height: auto
        background-color: rgba(183, 191, 197, 0.6)
        position: absolute
        top: 0
        left: 0
        .nav-item
          line-height: 2.5em
          .nav-link
            font-size: 0.94em
            color: #fff
            display: block
            padding: 0 0 0 .6875em
            -webkit-transition: color .15s linear, background-color .15s linear
            -moz-transition: color .15s linear, background-color .15s linear
            -ms-transition: color .15s linear, background-color .15s linear
            -o-transition: color .15s linear, background-color .15s linear
            transition: color .15s linear, background-color .15s linear
            .icon
              font-size: 1em
              vertical-align: middle
            .nav-text
              font-size: .875em
              margin-left: .375em
              vertical-align: middle
            .nav-link:hover
              color: #00030d
              font-weight: 700

</style>
