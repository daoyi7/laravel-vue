<template>
    <div class="backTop">
        <div class="rico write">
            <router-link to="/" class="icon iconfont icon-write"></router-link>
        </div>
        <div class="rico qq">
            <i class="icon iconfont icon-qq"></i>
            <!-- <img src="../../../../images/qq.jpg"> -->
        </div>
        <div class="rico wechat">
            <i class="icon iconfont icon-wechat"></i>
            <!-- <img src="../../../..//images/wechat.jpg"> -->
        </div>
        <div class="rico github">
            <i class="icon iconfont icon-github"></i>
        </div>
        <div class="rico rollback" @click="topClick">
            <i class="icon iconfont icon-back-to-top"></i>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        methods: {
            topClick: function () {
                let m = 0
                setTimeout( () => {
                    m = m + 1

                    console.log(m)
                }, 2000)
            }
        }
    }
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

    @keyframes iconmove
        0%
            transform: translateY(.15em)
        50%
            transform: translateY(-.15em)
        100%
            transform: translateY(.15em)

    @-webkit-keyframes iconmove
        0%
            transform: translateY(.15em)
        50%
            transform: translateY(-.15em)
        100%
            transform: translateY(.15em)

    .backTop
        position: fixed
        bottom: 5em
        right: 2em
        width: 3em
        height: auto
        background: #fff
        .rico
            position: relative
            width: 100%
            height: 3em
            text-align: center
            line-height: 3em
            border-bottom: 1px solid #eee
            &:hover
                img
                    visibility: visible
            .icon
                color: #8e8e8e
                cursor: pointer
                display: inline-block
                transform: translateY(0)
                // transition: transform .2s linear
                &.icon-write
                    font-size: 1.3em
                &.icon-back-to-top
                    font-size: 2.2em
                    color: #6b6b6b
                &.icon-qq:hover
                    color: #0086f1
                &.icon-wechat:hover
                    color: #2ba245
                &.icon-github:hover
                    color: #00030d
                &.icon-back-to-top:hover
                    animation: iconmove 1s infinite
            img
                width: 200%
                height: 200%
</style>
