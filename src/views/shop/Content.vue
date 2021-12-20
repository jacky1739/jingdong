<template>
  <div class="content">
    <ul class="category">
      <li :class="{ 'category__item': true, 'category__item--active': currentTab === item.tab }" v-for="item in categories" :key="item" @click="() => handleTabClick(item.tab)">{{ item.name }}</li>
    </ul>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" alt="">
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售 {{ item.sales }} 件</p>
          <p class="product__item__price">
            <span class="product__item__yen">¥</span>{{ item.price }}
            <span class="product__item__origin">¥{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus">-</span>
          {{ cartList?.[shopId]?.[item._id]?.count || 0 }}
          <span class="product__number__plus" @click="() => { addItemToCart(shopId, item._id, item) }">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { get } from '../../utils/request'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }
]

// 和 Tab 切換相關的邏輯
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
    console.log(currentTab.value)
  }
  return { currentTab, handleTabClick }
}

// 列表內容相關的邏輯
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] })
  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value
    })
    if (result.errno === 0 && result.data.length) {
      content.list = result.data
    }
    console.log(watchEffect, result.data)
  }

  watchEffect(() => { getContentData() })

  const { list } = toRefs(content)
  return { list }
}

// 購物車相關邏輯
const useCartEffect = (currentTab) => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const addItemToCart = (shopId, productId, productInfo) => {
    store.commit('addItemToCart', { shopId, productId, productInfo })
    console.log(shopId, productId, productInfo)
  }

  return { cartList, addItemToCart }
}

export default {
  name: 'Content',
  setup () {
    const router = useRoute()
    const shopId = router.params.id
    const { currentTab, handleTabClick } = useTabEffect()
    const { cartList, addItemToCart } = useCartEffect()
    const { list } = useCurrentListEffect(currentTab, shopId)

    console.log(list)
    return { list, categories, handleTabClick, currentTab, cartList, shopId, addItemToCart }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables';
@import '../../style/mixins';

@include ulolReset;

.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .49rem;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: .76rem;
  background: $search-bgColor;
  &__item {
    line-height: .4rem;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    text-align: center;
    &--active {
      background: $bgColor;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    display: flex;
    padding: .12rem .16rem;
    margin: 0 .16rem;
    border-bottom: 1px solid $content-bgColor;
    position: relative;
    &__detail {
      overflow: hidden;
    }
    &__img {
      height: .68rem;
      width: .68rem;
      margin-right: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: #333;
      @include ellipsis;
    }
    &__sales {
      margin: .06rem 0;
      line-height: .16rem;
      font-size: .12rem;
      color: #333;
    }
    &__price {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: #E93B3B;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: .12rem;
      &__plus, &__minus {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .18rem;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }
      &__minus {
        border: .01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: .05rem;
      }
      &__plus {
        background: $btn-bgColor;
        color: $bgColor;
        justify-content: center;
        align-content: center;
        margin-left: .05rem;
      }
    }
  }
}
</style>
