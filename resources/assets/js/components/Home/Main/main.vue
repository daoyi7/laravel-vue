<template>
<main class="main">
    <vnav></vnav>
    <!-- <middle></middle> -->
    <right></right>
    <transition name="fade">
        <router-view></router-view>
    </transition>
</main>
</template>

<script type="text/ecmascript-6">
    import vnav from './nav'
    import right from './right'

    export default {
        components: {
            vnav,
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
        .fade-enter-active, .fade-leave-active
            transition: opacity .5s
        .fade-enter, .fade-leave-to
            opacity: 0

</style>
