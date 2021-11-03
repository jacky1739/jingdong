<template>
  <div class="docker">
    <div class="docker__item ">
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
</template>

<style lang="scss">
.docker {
  display: flex;
  box-sizing: border-box;
  padding: 0 .18rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: 1px solid #f1f1f1;
  // background: green;
}

.docker__item {
  flex: 1;
  text-align: center;
  .iconfont {
    margin: 0.07rem 0 0.02rem 0;
    font-size: .2rem;
    display: flex;
    justify-content: center;
  }
}

</style>
