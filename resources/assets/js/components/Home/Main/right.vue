<template>
<div class="right">
    <div class="search-box">
        <input class="search-text" type="text" placeholder="Search your want..."><button class="search-submit">
                <i class="icon iconfont icon-icon19"></i>
            </button>
    </div>
    <div class="hot-reads">
        <h2 class="hot-all">
                <i class="icon iconfont icon-list1"></i>
                <span class="hot-all-text">热门文章</span>
            </h2>
        <ul>
            <li class="hot-list" v-for="(hot,index) in hots" key="index">
                <span class="hot-num">{{ hot.num }}</span>
                <router-link class="hot-title" to="/detail">{{ hot.title }}</router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default {
    data() {
        return {
            hots: [{
                    num: 1,
                    title: "The First Demo"
                },
                {
                    num: 2,
                    title: "Its second LOL"
                },
                {
                    num: 3,
                    title: "Ok Im wrong man"
                },
                {
                    num: 4,
                    title: "So exaut"
                },
                {
                    num: 5,
                    title: "I Dont know say what"
                },
                {
                    num: 6,
                    title: "Six Six Six"
                },
                {
                    num: 7,
                    title: "Ya Hip-Hop Man"
                },
                {
                    num: 8,
                    title: "This about eight content"
                },
                {
                    num: 9,
                    title: "Get a long title about this module OK?"
                },
                {
                    num: 10,
                    title: "I wanna test about 10"
                },
            ]
        }
    }
}
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

    $trans: .5s linear

    .right
        width: 18em
        float: right
        .search-box
            width: 100%
            height: auto
            overflow: hidden
            display: flex
            .search-text
                flex: 1
                padding: .1em
                width: 17.6em
                height: 2.2em
                line-height: 2.2em
                margin: 0
                font-size: 1.2em
                font-weight: 200
                text-indent: .4em
                border: none
                background: rgba(255, 255, 255, 0.4)
                color: rgb(162, 168, 173)
                transition: background .5s linear
            .search-text:hover, .search-text:active, .search-text:focus
                outline: none
                background: #d1d4d6
            .search-submit
                flex: 0 0 2.4em
                width: 2.4em
                height: 2.2em
                padding: 0
                margin: 0
                text-align: center
                line-height: 2.2em
                border: none
                background: rgba(183, 191, 197, 0.4)
                cursor: pointer
                transition: background .15s linear
            .search-submit:focus, .search-submit:active, .search-submit:hover
                outline: none
                background: #a2a8ad
        .hot-reads
            width: 100%
            height: auto
            overflow: hidden
            background-color: rgba(255, 255, 255, 0.4)
            margin-top: 1em
            .hot-all
                line-height: 2.5em
                text-indent: .8em
                font-size: 1.4em
                .icon
                    vertical-align: top
                .hot-all-text
                    font-size: 1.1em
                    vertical-align: top
            ul
                padding-bottom: .5em
                .hot-list:hover
                    .hot-num
                        background: #00030d
                .hot-list
                    width: 17.2em
                    height: 3em
                    line-height: 3em
                    margin-left: .8em
                    display: flex
                    .hot-num
                        flex: 0 0 1.5em
                        width: 1.5em
                        height: 1.5em
                        background: #b7bfc5
                        color: #fff
                        display: inline-block
                        text-align: center
                        line-height: 1.5em
                        margin-top: 0.5em
                        font-size: 1.4em
                        font-style: italic
                        transition: background $trans
                        -moz-transition: background $trans
                        -webkit-transition: background $trans
                        -o-transition: background $trans
                    .hot-title
                        flex: 1
                        color: #00030d
                        font-size: 1.3em
                        vertical-align: middle
                        text-indent: .7em
                        position: relative
                        display: inline-block
                        text-overflow: ellipsis
                        white-space: nowrap
                        overflow: hidden
                .hot-list:last-child .hot-num
                    text-align: left

</style>
