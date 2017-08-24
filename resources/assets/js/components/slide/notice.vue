<template>
  <div class="notice">
    <div class="icon">
      <i class="icon iconfont icon-gonggao"></i>
    </div>
    <swiper class="slide-wrap" :options="swiperOption">
        <swiper-slide class="slide-item" v-for="(notice,index) in notices" key="index">
            <router-link class="slide-link" to="/">
                <span class="slide-title">{{ notice.title }}</span>
            </router-link>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    autoplay: 3500,
                    setWrapperSize: true,
                    direction: 'vertical',
                    autoplayDisableOnInteraction: false,
                },
                notices: [
                    {
                        title:"bg1",
                    },
                    {
                        title:"bg2",
                    },
                ]
            }
        },
    }
</script>


<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>
  .notice
    width: 100%
    height: 2.5em
    display: flex
    background-color: #fff
    line-height: 2.5em
    .icon
      flex: 0 0 2em
      width: 2em
      height: 100%
      text-align: center
      line-height: 2.74em
      i.icon
        font-size: 1em
    .slide-wrap
      flex: 1
      .slide-item
        .slide-link
          color: #00030d
          font-size: .9em
</style>
