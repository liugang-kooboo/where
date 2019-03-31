<template>
  <div class="homeswiper">
    <swiper :options="swiperOption">
    <!-- slides -->
      <swiper-slide class="swiperItem" v-for="item in swiperImgList" :key="item.id">
        <img class="swiperImg" :src="item.url">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      "swiperOption": {
        "loop": true,
        "pagination": {
          "el": ".swiper-pagination",
          "clickable": true
        }
      }
    }
  },
  computed: {
    swiperImgList () {
      return this.Swiper.swiperImgList||[]
    }
  },
  props: {
    Swiper: {
      type: Object,
      default: {}
    }
  },
}
</script>

<style lang="scss">
  .swiper-pagination > .swiper-pagination-bullet-active {
    background-color: white;
  }
  .homeswiper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.66666666666%;

    .swiperItem {
      .swiperImg {
        width: 100%;
      }
    }
  }
</style>
