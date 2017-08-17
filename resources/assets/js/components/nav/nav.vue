<template>
    <nav class="nav">
        <div class="nav-wrap">
            <div class="nav-item">
                <router-link class="nav-link" to="/">
                    <i class="lnr lnr-home"></i>
                    <span class="nav-text">HOME</span>
                </router-link>
            </div>
            <div class="nav-item">
                <router-link class="nav-link" to="/">
                    <i class="lnr lnr-book"></i>
                    <span class="nav-text">BLOG</span>
                </router-link>
            </div>
            <div class="nav-item">
                <router-link class="nav-link" to="/">
                    <i class="lnr lnr-code"></i>
                    <span class="nav-text">PROJECT</span>
                </router-link>
            </div>
            <div class="nav-item">
                <router-link class="nav-link" to="/">
                    <i class="lnr lnr-magic-wand"></i>
                    <span class="nav-text">THINK</span>
                </router-link>
            </div>
            <div class="nav-item">
                <router-link class="nav-link" to="/">
                    <i class="lnr lnr-user"></i>
                    <span class="nav-text">ABOUT</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script type="text/ecmascript-6">

</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass">

    .nav
        .nav-wrap
            height: auto
            background-color: rgba(183, 191, 197, 0.6)
            position: fixed
            top: 5em
            .nav-item
                line-height: 40px
                .nav-link
                    font-size: 0.94em
                    color: #fff
                    display: block;
                    padding: 0 0 0 1.25em;
                    -webkit-transition: color .15s linear, background-color .15s linear;
                    -moz-transition: color .15s linear, background-color .15s linear;
                    -ms-transition: color .15s linear, background-color .15s linear;
                    -o-transition: color .15s linear, background-color .15s linear;
                    transition: color .15s linear, background-color .15s linear;
                .nav-link:hover
                    color: #00030d
        @media (min-width: 1024px)
            .nav-wrap
                width: 6.875em
                left: 0
        @media (min-width: 1100px)
            .nav-wrap
                width: 6.875em
                left: 0
        @media (min-width: 1920px)
            .nav-wrap
                width: 8.75em
                left: 22.48em
</style>