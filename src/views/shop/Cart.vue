<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
        <div class="check__icon__tag">1</div>
      </div>
      <div class="check__info">
        總計: <span class="check__info__price">&yen;127</span>
      </div>
      <div class="check__btn" @click="clickBtnCheck">
        去結算
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  setup () {
    const clickBtnCheck = () => {
      console.log('click')
    }

    return { clickBtnCheck }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables';

.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.check {
  display: flex;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  &__icon {
    width: .84rem;
    position: relative;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag {
      position: absolute;
      width: .2rem;
      height: .2rem;
      line-height: .16rem;
      text-align: center;
      background-color: $highlight-fontColor;
      border-radius: 50%;
      font-size: .12rem;
      top: 0.04rem;
      right: 0.2rem;
      color: $bgColor;
      transform: scale(.5);
    }
  }
  &__info {
    flex: 1;
    color: $content-fontcolor;
    &__price {
      color: $highlight-fontColor;
      font-size: .18rem;
      line-height: .49rem;
    }
  }
  &__btn {
    width: .98rem;
    height: 100%;
    color: $bgColor;
    line-height: .49rem;
    text-align: center;
    font-size: .14rem;
    background: #4FB0F9;
  }
}
</style>
