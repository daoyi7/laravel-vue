<template>
    <div class="blog">
        <div class="head">
            <p class="head-icon"><i class="icon iconfont icon-read"></i></p>
            <p class="slogan" v-text="slogan"></p>
        </div>
        <div class="blog-module" v-for="(blog, index) in blogs" key="index">
            <div class="thumb">
                <router-link to="/">
                    <img :src="blog.thumb">
                </router-link>
            </div>
            <div class="main">
                <h4 class="title">
              <router-link to="/detail">{{ blog.title }}</router-link>
            </h4>
                <p class="info">{{ blog.intro }}</p>
                <div class="list">
                    <p  class="list-icon time">
                        <i class="icon iconfont icon-clock2"></i>
                        <span>{{ blog.published_at | tranTime }}</span>
                    </p>
                    <p  class="list-icon view">
                        <i class="icon iconfont icon-view"></i>
                        <span>{{ blog.view_counts }}</span>
                    </p>
                    <p  class="list-icon comments">
                        <i class="icon iconfont icon-iconcomments"></i>
                        <span>5</span>
                    </p>
                    <p  class="list-icon like">
                        <i class="icon iconfont icon-like1"></i>
                        <span>{{ blog.like_counts }}</span>
                    </p>
                    <p  class="list-icon tag">
                        <i class="icon iconfont icon-tag"></i>
                        <span>think</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                page: 'Blog',
                slogan: "",
                blogs: {},
                icons: [{
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
        },
        created() {
            this.$http.get('http://localhost:8000/api/test').then(response => {
                this.blogs = response.body;
            })
        },
        mounted(){
            this.init()
        },
        filters: {
            tranTime: function (value) {
                value = Vue.prototype.$moment(value).fromNow()

                return value
            }
        },
        methods:{
            init(){
                document.title = this.page + ' | kawhi.me'
                let str = "The true test of a man's character is what he does when no one is watching.",
                    _this = this,
                    timer = null;

                function typing() {
                    let i = - 1,

                    timer = setInterval(() => {
                        i = i + 1

                        _this.slogan = _this.slogan + str[i]

                        if (i > str.length - 2) {
                            clearInterval(timer)
                            setTimeout(deleting,2000)
                        }
                    },100)
                }

                function deleting() {
                    let wstr = str.split(""),
                        j = wstr.length;

                    timer = setInterval(function() {
                        j = j - 1
                        wstr = wstr.slice(0, j)
                        _this.slogan = wstr.join("")

                        if (j <= 0) {
                            clearInterval(timer)
                            setTimeout(typing,200)
                        }
                    }, 100)

                }

                typing()
            },
        }
    }
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

    $trans: .5s linear

    @keyframes blink
        from
            opacity: 1
        to
            opacity: 0

    .blog
        float: left
        width: 66.4em
        margin: 0 0 0 13em
        position: relative
        overflow: hidden
        .head
            position: relative
            width: 100%
            height: 25em
            background: rgba(236, 238, 239, 0.7)
            overflow: hidden
            display: flex
            align-items: center
            margin-bottom: 1em
            .head-icon
                width: 100%
                height: auto
                display: flex
                justify-content: center
                i
                    font-size: 15em
            .slogan
                position: absolute
                left: 0
                bottom: .4em
                width: 100%
                height: auto
                text-align: center
                font-size: 1.7em
                padding: .4em 0
            .slogan::after
                content: ""
                background-color: #00030d
                width: .06em
                height: 1em
                vertical-align: -.2em
                margin-left: .2em
                display: inline-block
                animation: blink .4s infinite alternate
                -webkit-animation: blink .4s infinite alternate
        .blog-module:hover
          background: rgba(255, 255, 255, 0.7)
          .thumb
            a
              img
                transform: translateX(-1em)
        .blog-module
          position: relative
          width: 100%
          background: rgba(236, 238, 239, 0.7)
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
