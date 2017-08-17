<template>
    <swiper class="slide-wrap" :options="swiperOption">
        <swiper-slide class="slide-item" v-for="(slide,index) in swiperSlides" key="index">
            <!--I'm Slide {{ slide }}-->
            <router-link class="slide-link" to="/">
                <span class="slide-title">{{ slide.title }}</span>
                <img :src="slide.thumb">
            </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
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
//        mounted() {
//            setInterval(() => {
////                let swiperSlides = this.swiperSlides
////                if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
//            }, 3000)
//        }
    }
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

    .slide-wrap
        .slide-item
            width: 100%
            height: 300px
            position: relative
            overflow: hidden
            .slide-link
                p

                img
                    width: 100%
                    transform: rotate(0) scale(1)
                    transition: transform 1s
                img:hover
                    transition: transform 1s;
                    transform: rotate(2deg) scale(1.1);

</style>