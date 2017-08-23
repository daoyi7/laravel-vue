<template>
  <div class="notice-wrap">
    <div class="notice-icon">
      <i class="lnr lnr-volume-medium"></i>
    </div>
    <div class="norice-container">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(notice, index) in notices" key="index">
          <router-link class="notice-link" to="/">
            <span class="notice-title">{{ notice.title }}</span>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          direction: 'vertical'
        },
        notices: [
          {
            title: 'This is NO.1'
          },
          {
            title: 'TEST PAGES LOL'
          },
        ]
      }
    }
  }
</script>
