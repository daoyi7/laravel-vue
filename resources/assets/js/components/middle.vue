<template>
    <div class="content">
        <vslide></vslide>
        <notice></notice>
        <blog></blog>
    </div>
</template>

<script type="text/ecmascript-6">

    import vslide from './Home/Content/slide'
    import notice from './Home/Content/notice'
    import blog from './Home/Content/blog'
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
        width: 66.4em
        margin: 0 0 0 13em
        position: relative
        overflow: hidden

</style>
