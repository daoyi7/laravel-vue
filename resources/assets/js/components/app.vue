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
        mounted () {
            this.init()
        },
        methods: {
            init() {
                document.addEventListener('visibilitychange', function() {
                    let isHidden = document.hidden
                    let _title = document.title

                    if (isHidden) {
                        document.title = '离开了'
                    } else {
                        document.title = _title
                    }
                });
            }
        }
    }
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

</style>
