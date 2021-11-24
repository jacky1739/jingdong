<template>
  <div>
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <div class="nearby__item" v-for="item in nearbyList" :key="item">
        <img class="nearby__item__img" :src="item.imgUrl" alt="">
        <div class="nearby__content">
          <div class="nearby__content__title">{{ item.title }}</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag" v-for="item in item.tag" :key="item">{{ item }}</span>
          </div>
          <p class="nearby__content__highlight">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'

export default {
  name: 'nearby',
  setup () {
    // const nearbyList = [
    //   {
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
    //     title: '沃尔玛',
    //     tag: ['月售1万+', '起送¥0', '基础运费¥5'],
    //     desc: 'vip 尊享满89元减4元运费券 (每月3张)'
    //   },
    //   {
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
    //     title: '沃尔玛',
    //     tag: ['月售1万+', '起送¥0', '基础运费¥5'],
    //     desc: 'vip 尊享满89元减4元运费券 (每月3张)'
    //   }
    // ]

    const nearbyList = ref([])
    const getNearbyList = async () => {
      const result = await get('/api/shop/hot-list')
      console.log(result)
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
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding-top: .12rem 0;
    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }
  &__content {
    flex: 1;
    border-bottom: 1px solid $content-bgColor;
    margin-bottom: .12rem;
    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__tags {
      padding-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight {
      padding-top: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #E93B3B;
    }
  }
}
</style>
