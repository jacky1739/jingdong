<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back"><span class="material-icons" @click="handleBackClick">chevron_left</span></div>
      <div class="search__content">
        <span class="material-icons search__content__icon">search</span>
        <input class="search__content__input" placeholder="請輸入商品名稱">
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import ShopInfo from '../../components/ShopInfo.vue'

export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    const router = useRouter()
    const item = {
      _id: '1',
      name: '沃爾瑪',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: 'VIP尊想滿89元減4元運分券'
    }

    const handleBackClick = () => {
      console.log('click')
      router.back()
    }

    return { item, handleBackClick }
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
.search {
  margin: 0 0 .16rem 0;
  // background: #000;
  display: flex;
  &__back {
    width: .3rem;
    height: .32rem;
    font-size: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #B6B6B6;
    // background: #000;
  }
  &__content {
    display: flex;
    flex: 1;
    line-height: .32rem;
    background: #F5F5F5;
    border-radius: 16px;
    align-items: center;
    &__icon {
      width: .44rem;
      color: #B7B7B7;
      padding: 0 0 0 .08rem;
      display: inline-block;
      text-align: center;
      font-size: .2rem;
    }
    &__input {
      padding-right: .2rem;
      background: none;
      outline: none;
      border: none;
      display: block;
      width: 100%;
      color: #333;
      font-size: .14rem;
      &::placeholder {
        color: #333;
      }
    }
  }
}
</style>
