<template>
    <div class="comment">
        <div class="head">
            <div class="type">
                <span class="comments">
                    <i class="icon iconfont icon-comment"></i>
                    0条评论
                </span>
                <span class="likes">
                    <i class="icon iconfont icon-like1"></i>
                    6人点赞
                </span>
            </div>
        </div>
        <div class="wrap">
            <div class="item">
                <div class="avatar">
                    <img src="../../../images/avatar.jpg">
                </div>
                <div class="info">
                    <span class="name">kawhi</span>
                    <span class="system">
                        <i class="icon iconfont icon-win"></i>
                        windows
                    </span>
                    <span class="explore">
                        <i class="icon iconfont icon-chrome"></i>
                        chrome
                    </span>
                    <span class="address">
                        <i class="icon iconfont icon-address"></i>
                        china
                    </span>
                    <span class="floor">#1</span>
                </div>
                <div class="main">
                    <div class="text">
                        <div class="text-apply">
                            <span>回复</span>
                            <router-link class="apply-floor" to="">#1</router-link>
                            <router-link class="apply-name" to="">@kawhi:</router-link>
                        </div>
                        <div class="apply">
                            <div>
                                你这篇文章写得真是太好了
                            </div>
                        </div>
                    </div>
                </div>
                <div class="more">

                </div>
            </div>
        </div>
        <div class="submit">
            <img class="default-avatar" src="../../../images/avatar.jpg">
            <div class="submit-form">
                <div class="apply-info">
                    <input class="applyname" placeholder="name *" type="text">
                    <input class="applyemail" placeholder="email *" type="text">
                    <input class="applyskill" placeholder="java C++ javascript php" type="text">
                </div>
                <div class="apply-to">
                    <div class="apply">

                    </div>
                </div>
                <div class="apply-content">

                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>
    .comment
        padding: .4em 1.5em
        background: rgba(236, 238, 239, 0.7)
        overflow: hidden
        .head
            padding: 1em 0
            border-bottom: .1em dashed #c9cfd4
            .type
                span
                    padding: .6em 1em
                    background-color: #d6d6d7
                    display: inline-block
                    margin-right: .8em
                    font-size: 1.2em
                    i
                        vertical-align: middle
                        margin-right: .2em
                span:last-child
                    margin-right: 0
        .wrap
            width: 100%
            height: auto
            margin: .8em 0
            border-bottom: .1em dashed #c9cfd4
            .item
                margin: 1.5em 0
                margin-left: 3em
                padding: .8em 0
                height: auto
                min-height: 10em
                position: relative
                background-color: rgba(208, 209, 210, 0.84)
                .avatar
                    position: absolute
                    top: 50%
                    left: -3.3em
                    margin-top: -3.3em
                    padding: 0
                    width: 6em
                    height: 6em
                    display: inline-block
                    border: .3em solid rgba(183, 191, 197, 0.69)
                    overflow: hidden
                    box-shadow: 0 0 1em rgba(183, 191, 197, 0.69)
                    img
                        width: 100%
                        height: 100%
                .info
                    // width: 68em
                    height: auto
                    margin-left: 3em
                    line-height: 1.8em
                    font-size: 1.4em
                    color: #00030d
                    span
                        margin-right: .8em
                        idea
                            font-size: 1.4em
                            margin-right: .2em
                    span.name
                        color: #00030d
                        font-weight: 700
                    span.floor
                        float: right
                .main
                    height: auto
                    margin-left: 3em
                    line-height: 2.5em
                    font-size: 1.4em
                    color: #00030d
                    .text
                        .text-apply
                            span
                                font-size: .9em
                            .apply-floor,.apply-name
                                font-weight: 700
                                margin-left: .3em
                                cursor: pointer
                                color: #00030d
                                text-decoration: none
                            a:hover
                                text-decoration: underline
                        .apply
                            padding-right: .8em
                            width: 100%
                            height: auto
                            font-size: .9em
                            line-height: 2em
                            word-wrap: break-word
                            word-break: break-all
        .submit
            position: relative
            margin: 1.5em 0
            padding: .8em 0
            height: auto
            min-height: 10em
            .default-avatar
                position: absolute
                top: .4em
                left: 0
                padding: 0
                overflow: hidden
                width: 5em
                height: 5em
                display: inline-block
                border: 3px solid rgba(183, 191, 197, 0.69)
                box-shadow: 0 0 1em rgba(183, 191, 197, 0.69)
            .submit-form
                height: auto
                margin-left: 6em
                font-size: 1.2em
                color: #00030d
                .apply-info
                    width: 100%
                    display: flex
                    justify-content: space-between
                    input
                        flex: 0 0 5em
                        height: 1.4em
                        padding: .3em
                        background: #d6d6d7
                        border: none
                        // margin: 0 0 0 1em
                        vertical-align: top
                        font-weight: 200
                        text-indent: .4em
                        font-size: 1.2em
                        color: #00030d
                    input:active,input:hover,input:focus
                        outline: none


</style>
