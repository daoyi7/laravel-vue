<template>
    <header class="header">
        <div class="header-wrap">
            <nav class="header-nav">
                <router-link class="header-link" to="/">kawhi.me</router-link>
                <span class="motto">" I Can do all things "</span>
            </nav>
        </div>
    </header>
</template>

<script type="text/ecmascript-6">

</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

    $height: 4.375em

    .header
        width: 100%
        .header-wrap
            position: fixed
            top: 0
            left: 0
            z-index: 9999
            width: 100%
            height: $height
            line-height: $height
            background-color: rgba(183, 191, 197, 0.6)
            color: #00030d
            .header-nav
                height: $height
                line-height: $height
                .header-link
                    display: inline-block
                    width: auto
                    height: 3.75em
                    color: #00030d
                    font-size: 1.875em
                .motto
                    margin-left: 3.75em
                    font-size: 0.88em
        @media (min-width: 1024px)
            .header-nav
                width: 60em
                margin: 0 auto
        @media (min-width: 1100px)
            .header-nav
                width: 60em
                margin: 0 auto
        @media (min-width: 1920px)
            .header-nav
                width: 75em
                margin: 0 auto
</style>