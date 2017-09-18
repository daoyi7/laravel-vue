<template>
    <div class="kawhi">
        <background></background>
        <vheader></vheader>
        <vmain></vmain>
        <top></top>
    </div>
</template>

<script type="text/ecmascript-6">
    import vheader from './Home/Main/header'
    import vmain from './Home//Main/main'
    import background from './background'
    import top from './backTop'

    export default {
        components: {
            vheader,
            vmain,
            background,
            top,
        },
    }
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

</style>
