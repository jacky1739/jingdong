<template>
  <div>
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <ShopInfo v-for="item in nearbyList" :key="item" :item="item" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'

export default {
  name: 'nearby',
  components: { ShopInfo },
  setup () {
    const nearbyList = ref([])
    const getNearbyList = async () => {
      const result = await get('/api/shop/hot-list')
      console.log(result.data)
      if (result.errno === 0) {
        nearbyList.value = result.data
        console.log(nearbyList.value)
      }
    }

    getNearbyList()

    return {
      nearbyList, getNearbyList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables';
@import '../../style/mixins';

.nearby {
  &__title {
    margin: .16rem 0 .14rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
}
</style>
