<template>
    <swiper class="slide-wrap" :options="swiperOption">
        <swiper-slide class="slide-item" v-for="(slide,index) in swiperSlides" key="index">
            <router-link class="slide-link" to="/">
                <span class="slide-title">{{ slide.title }}</span>
                <img class="slide-thumb" :src="slide.thumb">
            </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    autoplay: 3500,
                    setWrapperSize: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    mousewheelControl: false,
                    observeParents: true,
                    autoplayDisableOnInteraction: false,
                },
                swiperSlides: [
                    {
                        thumb:"../../../images/bg.png",
                        title:"bg1",
                    },
                    {
                        thumb:"../../../images/bg1.png",
                        title:"bg2",
                    },
                    {
                        thumb:"../../../images/bg2.png",
                        title:"bg3",
                    },
                ]
            }
        },
    }
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

    .slide-wrap
        margin-bottom: 1em
        .slide-item
            width: 100%
            height: 25em
            position: relative
            overflow: hidden
            .slide-link
                span.slide-title
                    position: absolute
                    right: 1.7em
                    top: 1.2em
                    z-index: 2
                    padding: .4em .7em
                    display: block
                    background: rgba(183, 191, 197, 0.25)
                    color: #fff
                    font-size: 1.4em
                img.slide-thumb
                    width: 100%
                    transform: rotate(0) scale(1)
                    transition: transform 1s
                img.slide-thumb:hover
                    transition: transform 1s
                    transform: rotate(2deg) scale(1.1)
        .swiper-pagnation
            span.swiper-pagination-bullet.swiper-pagination-bullet-active
                background: #00030d

</style>
