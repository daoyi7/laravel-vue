<template>
    <main class="main">
        <vnav></vnav>
        <!-- <middle></middle> -->
        <transition name="fade">
            <router-view></router-view>
        </transition>
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
        top: 7em
        display: block
        width: 98.6em
        margin: 0 auto

</style>
