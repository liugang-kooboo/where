<template>
  <div class="Recommend">
    <div class="title">热门推销</div>
    <ul>
      <li v-for="(item,index) in recommendSortList" :key="index" class="item border-bottom">
        <div class="item-tips" v-if="item.tips">{{item.tips}}</div>
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <div class="item-level-comment">
            <div class="level">
              <start :grade="item.grade"/>
            </div>
            <span class="comment">{{item.comment}}</span>
          </div>
          <p class="item-price">￥{{item.price}}</p>
        </div>
        <div class="item-adress">{{item.adress}}</div>
      </li>
    </ul>
    <div class="all-pruduct"><span>查看所有产品</span></div>
    <div class="weekend">
      <div class="weekend-title">周末去哪儿</div>
      <ul>
        <li class="weekend-item" v-for="(item, index) in weekendData" :key="index">
          <img :src="item.imgSrc" />
          <div class="weekend-item-info">
            <p class="weekend-item-info-main">{{item.mainText}}</p>
            <p class="weekend-item-info-sub">{{item.subText}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import start from './start.vue'
export default {
  name: 'Recommend',
  components: {
    start
  },
  props: {
    recommendList: {
      type: Array,
      default: []
    },
    weekendData: {
      type: Array,
      default: []
    }
  },
  computed: {
    recommendSortList () {
      return this.recommendList.sort((a, b) => {
        if(a.grade === b.grade) {
          return 0
        } else {
          return b.grade - a.grade
        }
      })
    }
  }
}
</script>

<style lang="scss"  scoped>
  .Recommend {
    font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
    .title {
      line-height: .6rem;
      background-color:#eee;
      text-indent: .2rem;
      font-weight: bold;
    }
    .item {
      position: relative;
      overflow: hidden;
      display: flex;
      height: 1.9rem;
      .item-tips {
        position: absolute;
        top: .1rem;
        left: .1rem;
        padding: .1rem;
        width: 1rem;
        height: .2rem;
        background-color: rgb(255, 164, 25);
        border-radius: 0 0 .25rem 0;
        font-size: .05rem;
        color: #eee
      }
      .item-img {
        width: 1.7rem;
        height: 1.7rem;
        padding: .1rem;
      }
      .item-info {
        flex: 1;
        padding: .1rem;
        .item-title {
          line-height: .74rem;
          font-size: .34rem;
          font-weight: bold;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .item-level-comment {
          line-height: .4rem;
          overflow: hidden;
          .level {
            float: left;
            margin-right: .5rem;
          }
          .comment {
            float: left;
            color: #ccc;
          }
        }
        .item-price {
          margin-top: .2rem;
          line-height: .3rem;
          color: red;
          font-weight: bold;
        }
      }
      .item-adress {
        margin: 0;
        position: absolute;
        right: .1rem;
        bottom: .1rem;
        color: gray;
      }
    }
    .all-pruduct {
      display: flex;
      align-items: center;
      line-height: 1rem;
      justify-content: center;
      span {
        font-size: .3rem;
        color: #00afc7;
        letter-spacing: .05rem;
      }
    }
    .weekend {
      background-color: #f5f5f5;
      &-title {
        color: black;
        line-height: 1rem;
        padding-left: .3rem;
        font-size: .35rem;
      }
      &-item {
        background-color: white;
        img {
          width: 100%;
        }
        &-info {
          padding: .5rem;
          color: black;
          font-size: .35rem;
          &-main {
            margin-bottom: .2rem;
          }
          &-sub {
            color: #616161;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
</style>
