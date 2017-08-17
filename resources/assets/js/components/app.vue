<template>
    <div class="kawhi">
        <particle></particle>
        <vheader></vheader>
        <vmain></vmain>
    </div>
</template>

<script>
    import vheader from './header/header'
    import vmain from './main/main'
    import particle from './back/background'

    export default {
        components: {
            vheader,
            vmain,
            particle,
        }
    }
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

</style>