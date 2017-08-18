<template>
    <main class="main">
        <vnav></vnav>
        <middle></middle>
        <right></right>
    </main>
</template>

<script type="text/ecmascript-6">
    import vnav from '../nav/nav'
    import middle from '../middle/middle'
    import right from '../right/right'

    export default {
        components: {
            vnav,
            middle,
            right,
        }
    }

</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

    .main
        position: relative
        top: 5em
        display: block
        width: 75em
        margin: 0 auto
        margin-top: .25em
    @media (min-width: 1100px)
        .main
            width: 60em
    @media (min-width: 1920px)
        .main
            width: 75em

</style>