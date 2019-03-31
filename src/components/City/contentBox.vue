<template>
  <div>
    <search :cityList="cityList" />
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="buttonList">
            <div class="buttonWraper">
              <div class="button">{{currentCity}}</div>
            </div>
          </div>
        </div>

        <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="buttonList">
          <div class="buttonWraper" v-for="item in hotCity" :key="item">
            <div class="button" @click="handleChangCity(item)" >{{item}}</div>
          </div>
        </div>
        </div>

        <div class="area" v-for="(item, key) in cityList" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="itemList">
            <div class="item border-bottom" v-for="temp in item" :key="temp.id" @click="handleChangCity(temp.name)" >{{temp.name}}</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import search from './search'
import { mapState,mapMutations } from 'vuex'
export default {
  name: 'contentBox',
  components: {
    search
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
    handleChangCity (city) {
      this.changCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changCity'])
  },
  props: {
    cityList: {
      type: Object,
      default: {}
    },
    hotCity: {
      type: Array,
      default: []
    },
    letter: {
      type: String,
      default: ''
    }
  },
  watch: {
    letter () {
      if(this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>

<style lang="scss" scoped>
  .border-topbottom {
    &::before {
      border-color: #ccc;
    }
    &::after {
      border-color: #ccc;
    }
  }
  .border-bottom {
    &::before {
      border-color: #ccc;
    }
  }
  .list {
    overflow: hidden;
    position: absolute;
    top: 1.6rem;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .title {
    line-height: .44rem;
    padding-left: .2rem;
    background-color: #eee;
    font-size: .26rem;
    color: #666;
  }
  .buttonList {
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;
    .buttonWraper {
      float: left;
      width: 33.33333333333333333333%;
      .button {
        margin: .1rem;
        padding: .1rem 0;
        text-align: center;
        border: .02rem solid #ccc;
        border-radius: .06rem;
      }
    }
  }
  .itemList {
    .item {
      padding-left: .2rem;
      line-height: .66rem;
      font-size: .1rem;
    }
  }
</style>
