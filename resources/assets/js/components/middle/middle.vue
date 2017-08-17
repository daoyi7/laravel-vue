<template>
    <div class="middle">
        <vslide></vslide>
    </div>
</template>

<script type="text/ecmascript-6">
    import vslide from '../slide/slide'

    export default {
        components: {
            vslide,
        }
    }

</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>
    .middle
        float: left;
        width: 42.5em;
        margin: 0 0 0 12.5em;
        position: relative;
        overflow: hidden;
</style>