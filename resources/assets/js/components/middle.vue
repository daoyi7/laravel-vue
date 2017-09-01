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
        data() {
            return {
                page: 'Home',
            }
        },
        components: {
            vslide,
            notice,
            blog,
        },
        mounted(){
            this.init()
        },
        methods:{
            init() {
                document.title = this.page + ' | kawhi.me'
            }
        }
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
