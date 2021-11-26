<template>
  <div class="wrapper">
    <div class="search"></div>
    <ShopInfo :item="item" :hideBorder="true" />
  </div>
</template>

<script>
import ShopInfo from '../../components/ShopInfo.vue'

export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    const item = {
      _id: '1',
      name: '沃爾瑪',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: 'VIP尊想滿89元減4元運分券'
    }

    return { item }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: .14rem .18rem;
  &__header {
    &__content {
      display: flex;
    }
    &__input__content {
      display: block;
      width: 100%;
    }
  }
}
</style>
