<template>

    <div class="right">
        <div class="search-box">
            <input class="search-text" type="text" placeholder="Search your want..."><button class="search-submit">
                <i class="lnr lnr-magnifier"></i>
            </button>
        </div>
        <div class="hot-reads">
            <h2 class="hot-all">
                <i class="lnr lnr-menu"></i>
                <span class="hot-all-text">热门文章</span>
            </h2>
            <ul>
                <li class="hot-list" v-for="(hot,index) in hots" key="index">
                    <span class="hot-num">{{ hot.num }}</span>
                    <router-link class="hot-title" to="/">{{ hot.title }}</router-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">

    export default {
        data() {
            return {
                hots: [
                    {
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
        width: 13em
        float: right
        .search-box
            width: 100%
            height: auto
            overflow: hidden
            display: flex
            .search-text
                flex: 1
                padding: .3875em
                width: 11em
                height: 1.5625em
                margin: 0
                font-size: .75em
                font-weight: 200
                text-indent: .25em
                border: none
                background: #fff
                color: rgb(162, 168, 173)
                transition: background .5s linear
                // vertical-align: top
            .search-text:hover, .search-text:active, .search-text:focus
                outline: none
                background: #d1d4d6
            .search-submit
                flex: 0 0 2.3em
                width: 2.3em
                height: 2.1em
                padding: 0
                margin: 0
                text-align: center
                line-height: 2.48em
                border: none
                background: #b7bfc5
                cursor: pointer
                transition: background .15s linear
                vertical-align: top
            .search-submit:focus, .search-submit:active, .search-submit:hover
                outline: none
                background: #a2a8ad
        .hot-reads
            width: 100%
            height: auto
            overflow: hidden
            background-color: #fff
            margin-top: .75em
            .hot-all
                line-height: 2.2em
                text-indent: .5em
                font-size: .875em
                .lnr-menu
                    vertical-align: top
                .hot-all-text
                    font-size: .875em
                    vertical-align: top
            ul
                .hot-list:hover
                  .hot-title::before
                    width: 100%
                .hot-list
                    width: 12.5em
                    height: 2.2em
                    line-height: 2.2em
                    margin-left: .5em
                    .hot-num
                        width: 1.3em
                        height: 1.25em
                        background: #b7bfc5
                        color: #fff
                        display: inline-block
                        text-align: center
                        line-height: 1.25em
                        vertical-align: middle
                        font-size: .875em
                        font-style: italic
                    .hot-title
                        width: 12.65em
                        color: #00030d
                        font-size: .875em
                        vertical-align: middle
                        text-indent: .625em
                        position: relative
                        display: inline-block
                        text-overflow: ellipsis
                        white-space: nowrap
                        overflow: hidden
                    .hot-title::before
                        content: ""
                        position: absolute
                        top: 1.9em
                        width: 0
                        height: 1px
                        background: #00030d
                        transition: width $trans
                        -moz-transition: width $trans
                        -webkit-transition: width $trans
                        -o-transition: width $trans
                .hot-list:last-child .hot-num
                    text-align: left

</style>
