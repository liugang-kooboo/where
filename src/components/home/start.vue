<template>
  <div>
    <span v-for="(item,index) in starcomput" :key="index">
      <span v-show="item" class="iconfont starSolid">&#xe664;</span>
      <span v-show="!item" class="iconfont starHollow">&#xe663;</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'star',
  data () {
    return {
      startList: []
    }
  },
  props: {
    grade: {
      default: 0
    }
  },
  computed: {
    starcomput () {
      var starList = []
      var grade = parseInt(this.grade/2)
      for(var i = 1; i<=5; i++){
        if (i<=grade) {
          starList.push(1)
        } else {
          starList.push(0)
        }
      }
      return starList
    }
  }
}
</script>

<style lang="scss" scoped>
  .starSolid {
    color: yellow;
    margin-right: .05rem;
  }
  .starHollow {
    margin-right: .05rem;
    color: black;
  }
</style>
