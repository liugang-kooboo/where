<template>
  <div>
    <div class="search">
      <input v-model="keyWord" class="search-input" type="text" placeholder="请输入城市姓名或拼音">
    </div>
    <div class="search-content" ref="searchContent" v-show="keyWord">
      <ul>
        <li class="search-item border-bottom"
         v-for="(item,index) in list" 
         :key="index"
         @click="changCity(item.name)"
         >
          {{item.name}}
         </li>
        <li class="search-item border-bottom" v-show="!list.length">没有查询到相关城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'search',
  data () {
    return {
      keyWord: '',
      timer: null,
      list: []
    }
  },
  props: {
    cityList: {
      type: Object,
      default: {}
    }
  },
  watch: {
    keyWord () {
      if(this.timer) {
        clearTimeout(this.timer)
      }
      if(!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for(let i in this.cityList){
          this.cityList[i].map((value) => {
            if (value.spell.indexOf(this.keyWord)> -1 || value.name.indexOf(this.keyWord)> -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.searchContent)
  },
  methods: {
    changCity (city) {
      this.$store.commit('changCity', city)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  .border-bottom {
    &::before {
      border-color: #ccc;
    }
  }
  .search {
    height: .72rem;
    background-color: #00bcd4;
    padding: .1rem;
    &-input {
      box-sizing: border-box;
      padding: .1rem;
      width: 100%;
      height: .62rem;
      line-height: .62rem;
      text-align: center;
      border-radius: .06rem;
      font-size: .25rem;
    }
  }
  .search-content {
    overflow: hidden;
    position: absolute;
    z-index: 3;
    top: 1.6rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    .search-item {
      padding-left: .45rem;
      line-height: .5rem;
      color: #666;
    }
  }
</style>
