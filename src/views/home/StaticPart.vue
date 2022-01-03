<template>
  <div>
    <div class="position">
      <span class="material-icons wrapper__icon">room</span>
      北京理工大學國防科技元2號樓10層北京理工大學國防科技元2號樓10層
      <span class="material-icons position__notice">notifications</span>
    </div>
    <div class="search">
      <span class="material-icons search__icon">search</span>
      山姆會員商店優惠商品
    </div>
    <div class="banner">
      <img class="banner__img" src="../../../public/images/banner.jpg" alt="">
    </div>
    <div class="icons">
      <div class="icons__item" v-for="item in staticPartList" :key="item">
        <img class="icons__item__img" :src="item.imgUrl" alt="">
        <!-- <img class="icons__item__img" src="../../assets/超市.png" alt=""> -->
        <p class="icons__item__desc">{{ item.text }}</p>
      </div>
    </div>
    <div class="gap"></div>
  </div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    // const staticPartList = [
    //   {
    //     imgUrl: '../../assets/超市.png',
    //     text: '超市便利'
    //   },
    //   {
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
    //     text: '菜市场'
    //   },
    //   {
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
    //     text: '水果店'
    //   },
    //   {
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
    //     text: '鲜花'
    //   },
    //   {
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
    //     text: '医药健康'
    //   },
    //   {
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/家居.png',
    //     text: '家居'
    //   },
    //   {
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
    //     text: '蛋糕'
    //   },
    //   {
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/签到.png',
    //     text: '签到'
    //   },
    //   {
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
    //     text: '大牌免运'
    //   },
    //   {
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/红包.png',
    //     text: '红包'
    //   }
    // ]

    const staticPartList = [
      {
        imgUrl: '../../assets/超市.png',
        text: '超市便利'
      }
    ]

    return { staticPartList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables';
@import '../../style/mixins';

.position {
  color: $content-fontcolor;
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .wrapper__icon {
    position: relative;
    box-sizing: border-box;
    font-size: .2rem;
    top: .04rem;
    // vertical-align: text-bottom;
  }
  .position__notice {
    position: absolute;
    right: 0;
    top: .19rem;
    font-size: .2rem;
  }
}
.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: $search-bgColor;
  color: $search-fontColor;
  border-radius: .16rem;
  font-size: .14rem;
  .search__icon {
    padding: 0 .08rem 0 .16rem;
    display: inline-block;
    vertical-align: text-bottom;
    font-size: .2rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  margin-top: .16rem;
  display: flex;
  flex-wrap: wrap;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      color: $content-fontcolor;
      margin: .06rem 0 .16rem 0;
      text-align: center;
    }
  }
}
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background-color: $content-bgColor;
}
</style>
