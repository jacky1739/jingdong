<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
        <div class="check__icon__tag">{{ total }}</div>
      </div>
      <div class="check__info">
        總計: <span class="check__info__price">&yen; {{ price }}</span>
      </div>
      <div class="check__btn">
        去結算
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

// 獲取購物車訊息邏輯
const useCartEffect = (shopId, cartList) => {
  // 購物車數量的計算
  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      // proxy 是個物件 要先轉乘陣列 才可以使用 forEach
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    return count
  })

  // 購物車金額的計算
  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      // proxy 是個物件 要先轉乘陣列 才可以使用 forEach
      for (const i in productList) {
        const product = productList[i]
        count += product.count * product.price
      }
    }
    return count.toFixed(2) // 小數點後第二位四捨五入
  })

  return { total, price }
}

export default {
  name: 'Cart',
  setup () {
    const store = useStore()
    const route = useRoute()
    const shopId = route.params.id
    const cartList = store.state.cartList

    const { total, price } = useCartEffect(shopId, cartList)

    return { total, price }
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
      min-width: .2rem;
      height: .2rem;
      padding: 0 .04rem;
      line-height: .16rem;
      text-align: center;
      background-color: $highlight-fontColor;
      border-radius: .1rem;
      font-size: .12rem;
      top: .04rem;
      left: .46rem;
      color: $bgColor;
      transform: scale(.5);
      transform-origin: left center;
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
