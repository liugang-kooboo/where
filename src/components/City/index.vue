<template>
  <div>
    <cityHeader />
    <contentBox :currentCity="currentCity" :hotCity="hotCity" :cityList="cityList" :letter="letter"/>
    <alphabet :citys="citys" @change="handerChangeLetter"/>
  </div>
</template>

<script>
import cityHeader from './header'
import contentBox from './contentBox'
import alphabet from './alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    cityHeader,
    contentBox,
    alphabet
  },
  methods: {
    getCityInfo () {
      axios.get('/mock/city.json')
        .then(this.getCitySucc)
    },
    getCitySucc (res) {
      console.log(res.data)
      let data = res.data
      this.citys = Object.keys(data.citys)
      this.currentCity = data.currentCity
      this.hotCity = data.hotCity
      this.cityList = data.citys
    },
    handerChangeLetter (e) {
      this.letter = e
    }
  },
  mounted () {
    this.getCityInfo()
  },

  data () {
    return {
      citys: [],
      currentCity: [],
      hotCity: [],
      cityList: {},
      letter: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
