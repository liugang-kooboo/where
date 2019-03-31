<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe633;</span>
      输入城市
    </div>
    <router-link to="/City">
      <div class="header-right">
        <span class="header-right-text">{{this.city}}</span>
        <span class="iconfont">&#xeb6d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="scss" scoped>
  $bgColor : #00bcd4;

  .header {
    display: flex;
    background-color: $bgColor;
    line-height: .86rem;
    color: #ffffff;

    &-left {
      float: left;
      width: .86rem;
      text-align: center;
    }
    &-input {
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin-top: .12rem;
      margin-left: .2rem;
      padding-left: .2rem;
      background-color: #fff;
      border-radius: .1rem;
      color: #ccc;
    }
    &-right {
      float: right;
      min-width: 1.24rem;
      padding: 0 .1rem;
      text-align: center;
      color: #fff;  
    }
  }
</style>
