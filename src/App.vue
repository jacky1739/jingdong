<template>
  <div>
    <div class="wrapper">
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
        <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
      </div>
      <div class="icons">
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="">
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/菜市场.png" alt="">
          <p class="icons__item__desc">菜市场</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/水果店.png" alt="">
          <p class="icons__item__desc">水果店</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/鲜花.png" alt="">
          <p class="icons__item__desc">鲜花绿植</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/医药健康.png" alt="">
          <p class="icons__item__desc">医药健康</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/家居.png" alt="">
          <p class="icons__item__desc">家居时尚</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/蛋糕.png" alt="">
          <p class="icons__item__desc">蛋糕</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/签到.png" alt="">
          <p class="icons__item__desc">签到</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/大牌免运.png" alt="">
          <p class="icons__item__desc">大牌免运</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/红包.png" alt="">
          <p class="icons__item__desc">红包</p>
        </div>
      </div>
      <div class="gap"></div>
      <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <div class="nearby__item">
          <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
          <div class="nearby__content">
            <div class="nearby__content__title">沃尔玛</div>
            <div class="nearby__content__tags">
              <span class="nearby__content__tag">月售1万+</span>
              <span class="nearby__content__tag">月售1万+</span>
              <span class="nearby__content__tag">月售1万+</span>
            </div>
            <p class="nearby__content__highlight">vip 尊享满89元减4元运费券 (每月3张)</p>
          </div>
        </div>
        <div class="nearby__item">
          <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
          <div class="nearby__content">
            <div class="nearby__content__title">沃尔玛</div>
            <div class="nearby__content__tags">
              <span class="nearby__content__tag">月售1万+</span>
              <span class="nearby__content__tag">月售1万+</span>
              <span class="nearby__content__tag">月售1万+</span>
            </div>
            <p class="nearby__content__highlight">vip 尊享满89元减4元运费券 (每月3张)</p>
          </div>
        </div>
        <div class="nearby__item">
          <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
          <div class="nearby__content">
            <div class="nearby__content__title">沃尔玛</div>
            <div class="nearby__content__tags">
              <span class="nearby__content__tag">月售1万+</span>
              <span class="nearby__content__tag">月售1万+</span>
              <span class="nearby__content__tag">月售1万+</span>
            </div>
            <p class="nearby__content__highlight">vip 尊享满89元减4元运费券 (每月3张)</p>
          </div>
        </div>
        <div class="nearby__item">
          <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
          <div class="nearby__content">
            <div class="nearby__content__title">沃尔玛</div>
            <div class="nearby__content__tags">
              <span class="nearby__content__tag">月售1万+</span>
              <span class="nearby__content__tag">月售1万+</span>
              <span class="nearby__content__tag">月售1万+</span>
            </div>
            <p class="nearby__content__highlight">vip 尊享满89元减4元运费券 (每月3张)</p>
          </div>
        </div>
        <div class="nearby__item">
          <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
          <div class="nearby__content">
            <div class="nearby__content__title">沃尔玛</div>
            <div class="nearby__content__tags">
              <span class="nearby__content__tag">月售1万+</span>
              <span class="nearby__content__tag">月售1万+</span>
              <span class="nearby__content__tag">月售1万+</span>
            </div>
            <p class="nearby__content__highlight">vip 尊享满89元减4元运费券 (每月3张)</p>
          </div>
        </div>
      </div>
    </div>
    <!-- BEM block element modifier block裡面的element是靠著下底線連結  -->
    <div class="docker">
      <div class="docker__item docker__item--active">
        <span class="material-icons iconfont">home</span>
        首頁
      </div>
      <div class="docker__item">
        <span class="material-icons iconfont">shopping_cart</span>
        購物車</div>
      <div class="docker__item">
        <span class="material-icons iconfont">toc</span>
        訂單
      </div>
      <div class="docker__item">
        <span class="material-icons iconfont">perm_identity</span>
        我的
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/variables';
@import './style/mixins';

.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem;
}
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
  background: #F5F5F5;
  color: #B7B7B7;
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
.docker {
  display: flex;
  box-sizing: border-box;
  padding: 0 .18rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  color: $content-fontcolor;
  border-top: 1px solid $content-bgColor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
    margin: 0.07rem 0 0.02rem 0;
    font-size: .2rem;
    display: flex;
    justify-content: center;
    }
  }
}
.docker__item--active {
  color: $docker-itemcolor;
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
.nearby {
  &__title {
    margin: .16rem 0 .14rem 0;
    font-size: .18rem;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding-top: .12rem 0;
    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }
  &__content {
    flex: 1;
    border-bottom: 1px solid $content-bgColor;
    margin-bottom: .12rem;
    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__tags {
      padding-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight {
      padding-top: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #E93B3B;
    }
  }
}

</style>
