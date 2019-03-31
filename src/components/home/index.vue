<template>
  <div style='touch-action: default;'>
    <HomeHeader />
    <HomeSwiper :Swiper="Swiper" />
    <HomeIcons :icons="icons" />
    <Recommend :recommendList="recommendList" :weekendData="weekendData" />
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeSwiper from './Swiper'
import HomeIcons from './Icons'
import Recommend from './Recommend'
import axios from 'axios'
export default {
  name: 'home',

  data() {
    return {
      city: '',
      recommendList: [],
      weekendData: [],
      Swiper: {},
      icons: {}
    }
  },

  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend
  },

  methods: {
    getHomeInfo () {
      axios.get('/mock/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res.data)
      const data = res.data
      this.city = data.city
      this.recommendList = data.recommendList
      this.Swiper = data.Swiper
      this.icons = data.icons
      this.weekendData = data.weekendData
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  //当缓存组件再次被加载的时候
  activated () {
    this.getHomeInfo()
  }
}
</script>
