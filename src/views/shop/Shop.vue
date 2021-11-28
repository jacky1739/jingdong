<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back"><span class="material-icons" @click="handleBackClick">chevron_left</span></div>
      <div class="search__content">
        <span class="material-icons search__content__icon">search</span>
        <input class="search__content__input" placeholder="請輸入商品名稱">
      </div>
    </div>
    <ShopInfo :item="data.item" :hideBorder="true" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ShopInfo from '../../components/ShopInfo.vue'
import { get } from '../../utils/request'
export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    const router = useRouter()
    const route = useRoute()

    const data = reactive({
      item: {}
    })

    // 取得單一商品資訊
    const getItemData = async () => {
      const result = await get(`/api/shop/${route.params.id}`)
      console.log(result)
      if (result.errno === 0 && result.data) {
        data.item = result.data
      }
    }

    getItemData()

    const handleBackClick = () => {
      console.log('click')
      router.back()
    }

    return { data, handleBackClick, getItemData }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables';
@import '../../style/mixins';

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
    background: $search-bgColor;
    border-radius: 16px;
    align-items: center;
    &__icon {
      width: .44rem;
      color: $search-fontColor;
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
      color: $content-fontcolor;
      font-size: .14rem;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
