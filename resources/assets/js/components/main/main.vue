<template>
    <main class="main">
        <vnav></vnav>
    </main>
</template>

<script type="text/ecmascript-6">
    import vnav from '../nav/nav'

    export default {
        components: {
            vnav
        }
    }

</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass">

    .main
        width: 100%
        /*.main-wrap*/
            /*margin: 0 auto*/
            /*position: relative*/
        /*@media (min-width: 1024px)*/
            /*.main-wrap*/
                /*width: 960px*/
        /*@media (min-width: 1100px)*/
            /*.main-wrap*/
                /*width: 960px*/
        /*@media (min-width: 1920px)*/
            /*.main-wrap*/
                /*width: 1200px*/
</style>