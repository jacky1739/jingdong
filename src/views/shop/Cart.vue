<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
        <!-- <div class="check__icon__tag">1</div> -->
      </div>
      <div class="check__info">
        總計: <span class="check__icon__price">&yen;127</span>
      </div>
      <div class="check__btn">
        去結算
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .5rem;
}
.check {
  display: flex;
  height: 100%;
  // background: #4FB0F9;
  &__icon {
    width: .84rem;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
  }
  &__info {
    flex: 1;
  }
  &__btn {
    width: .98rem;
    height: 100%;
    line-height: .5rem;
    display: flex;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    background: #4FB0F9;
  }
}
</style>
