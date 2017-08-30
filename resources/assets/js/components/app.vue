<template>
    <div class="kawhi">
        <background></background>
        <vheader></vheader>
        <vmain></vmain>
    </div>
</template>

<script type="text/ecmascript-6">
    import vheader from './Home/Main/header'
    import vmain from './Home//Main/main'
    import background from './background'

    export default {
        components: {
            vheader,
            vmain,
            background,
        },
    }
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

</style>
