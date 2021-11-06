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
  border-top: 1px solid #f1f1f1;
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

</style>
