<template>
    <div class="content">
        <vslide></vslide>
        <notice></notice>
        <blog></blog>
    </div>
</template>

<script type="text/ecmascript-6">

    import vslide from '../slide/slide'
    import notice from '../slide/notice'
    import blog from '../blog/blog'
    export default {
        components: {
            vslide,
            notice,
            blog,
        },
    }

</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>
    .content
        float: left
        width: 42.5em
        margin: 0 0 0 12.5em
        position: relative
        overflow: hidden


    @media (min-width: 1100px)
        .content
            width: 39.3em
            margin: 0 0 0 8.5em
    @media (min-width: 1920px)
        .content
            width: 50.7em
            margin: 0 0 0 10em
</style>
