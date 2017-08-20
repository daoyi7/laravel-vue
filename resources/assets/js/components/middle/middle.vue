<template>
    <div class="middle">
        <vslide></vslide>
        <div class="notice-wrap">
            <div class="notice-icon">
                <span>
                    <i class="lnr lnr-volume-medium"></i>
                </span>
            </div>
            <swiper class="notice-container" :options="swiperOption">
                <swiper-slide class="notice-item">
                    <router-link class="notice-link" to="/">
                        <span class="slide-title">111</span>
                    </router-link>
                </swiper-slide>
                <swiper-slide class="notice-item">
                    <router-link class="notice-link" to="/">
                        <span class="slide-title">111</span>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import vslide from '../slide/slide'

    export default {
        name: 'carrousel',
        components: {
            vslide,
        },
        data() {
            return {
                swiperOption: {
                    autoplay: 3500,
                    direction: 'verticle',
                    setWrapperSize: true,
                    mousewheelControl: false,
                    observeParents: true,
                    autoplayDisableOnInteraction: false,
                },
            }
        },
    }

</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>
    .middle
        float: left
        width: 42.5em
        margin: 0 0 0 12.5em
        position: relative
        overflow: hidden
        .notice-wrap
            position: relative
            width: 100%
            height: 2.5em
            overflow: hidden
            .notice-icon
                position: absolute
                top: 0
                left: 0
                width: 2.2em
                text-align: center
                height: 100%
                line-height: 2.625em
                background: #fff
                color: #000
            .notice-container
                position: absolute
                left: 2.2em
                top: 0
                width: 36.8125em
                height: 100%
    @media (min-width: 1100px)
        .middle
            width: 39.3em
            margin: 0 0 0 8.5em
    @media (min-width: 1920px)
        .middle
            width: 42.5em
            margin: 0 0 0 12.5em
</style>