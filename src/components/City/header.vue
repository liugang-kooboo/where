<template>
  <div class="cityHeader">
    <div class="back">
      <router-link to="/">
        <span style="color:white">&lt;</span>
      </router-link>
    </div>
    <span class="cityHeader-box">
      <span @click="chooseList" :class="{ 'cityHeader-box-choose': choose, 'cityHeader-box-overseas': !choose }">
        城市选择
      </span>
      <span @click="overseasList" :class="{ 'cityHeader-box-overseas': overseas, 'cityHeader-box-choose': !overseas }">
        国际/地区
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'cityHeader',
  data () {
    return {
      choose: true,
      overseas: true
    }
  },
  methods: {
    chooseList () {
      this.choose = true
      this.overseas = true
    },
    overseasList () {
      this.choose = false
      this.overseas = false
    }
  }
}
</script>

<style lang="scss" scoped>
.cityHeader {
  line-height: .72rem;
  height: .72rem;
  overflow: hidden;
  text-align: center;
  color: aliceblue;
  background-color: #00bcd4;
  .back {
    float: left;
    margin-left: .1rem;
    font-size: .5rem;
  }
  &-box {
    border: 1px solid #ffffff;
    border-radius: 3px;
    &-choose {
      display: inline;
      width: 1.2rem;
      color: #00bcd4;
      background-color: #ffffff;
    }
    &-overseas {
      display: inline;
      width: 1.2rem;
      color: #ffffff;
    }
  }
}
</style>
