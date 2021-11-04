<template>
  <div>
    <div class="wrapper">
      <div class="position">
        <span class="material-icons wrapper__icon">room</span>
        北京理工大學國防科技元2號樓10層北京理工大學國防科技元2號樓10層
        <span class="material-icons position__notice">notifications</span>
      </div>
    </div>
    <div class="docker">
      <div class="docker__item">
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

</style>
