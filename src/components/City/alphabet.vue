<template>
  <ul class="itemList">
    <li class="item" v-for="(item, index) in letters" 
    :key="index"
    :ref="item"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="handerClickLetter">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'alphabet',
  props: {
    citys: {
      type: Array,
      default: []
    }
  },
  methods: {
    handerClickLetter (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if(this.touchStatus && this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(()=> {
        const touchY = e.touches[0].clientY - 82
        const index = Math.floor((touchY - this.startY)/16)
        this.$emit('change', this.letters[index])
      }, 16);
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      this.citys.forEach(element => {
        letters.push(element)
      })
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  }
}
</script>

<style lang="scss" scoped>
  .itemList {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    top: 1.6rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    .item {
      line-height: .32rem;
      text-align: center;
      font-size: .2rem;
      color: #00bcd4;
    }
  }
</style>

