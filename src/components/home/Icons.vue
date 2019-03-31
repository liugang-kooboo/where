<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide class="swiperItem" v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.url">
          </div>
          <p class="icon-desc">{{item.text}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
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
  props:{
    icons: {
      type: Object,
      default: {}
    }
  },
  computed: {
    iconData () {
      return this.icons.iconData||[]
    },
    pages () {
      const pages = []
      this.iconData.forEach((element, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(element)
      })
      return pages
    }
  }
}
</script>

<style lang="scss">
  .icons {
    .swiper-container {
    height: 0;
    padding-bottom: 50%;
      .swiper-pagination {
        bottom: 0;
        .swiper-pagination-bullet-active {
          background-color: red;
        }
      }
    }
    .icon {
      position: relative;
      overflow: hidden;
      float: left;
      width: 25%;
      height: 0;
      padding-bottom: 22%;
      .icon-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
        box-sizing: border-box;
        padding: .1rem;
        img {
          display: block;
          margin: 0 auto;
          height: 100%;
        }
      }
      .icon-desc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        color: #333;
        overflow: hidden;
        // 不换行/益处现实隐藏
        white-space: nowrap;
        text-overflow: ellipsis
      }
    }
  }
</style>
