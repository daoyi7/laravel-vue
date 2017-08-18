<template>

    <div class="right">
        <div class="search-box">
            <input class="search-text" type="text" placeholder="Search your want..."><button class="search-submit">
                <i class="lnr lnr-magnifier"></i>
            </button>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">

    export default {}

</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

    .right
        width: 10.746em
        float: right
        .search-box
            width: 100%
            height: auto
            overflow: hidden
            .search-text
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
                vertical-align: top
            .search-text:hover,.search-text:active,.search-text:focus
                outline: none
                background: #d1d4d6
            .search-submit
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
            .search-submit:focus,.search-submit:active,.search-submit:hover
                outline: none
                background: #a2a8ad

</style>