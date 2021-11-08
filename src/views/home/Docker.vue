<template>
  <div class="docker">
    <!-- <div class="docker__item docker__item--active">
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
    </div> -->
    <div class="docker__item docker__item--active" v-for="item in dockList" :key="item">
      <span class="material-icons iconfont">{{ item.icon }}</span>
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'docker',
  setup () {
    const dockList = [
      {
        icon: 'home',
        name: 'home'
      },
      {
        icon: 'shopping_cart',
        name: '購物車'
      },
      {
        icon: 'toc',
        name: '訂單'
      },
      {
        icon: 'perm_identity',
        name: '我的'
      }
    ]

    return { dockList }
  }
}
</script>

<style lang="scss">
@import '../../style/variables';
@import '../../style/mixins';

.docker {
  display: flex;
  box-sizing: border-box;
  padding: 0 .18rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  color: $content-fontcolor;
  border-top: 1px solid $content-bgColor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
    margin: 0.07rem 0 0.02rem 0;
    font-size: .2rem;
    display: flex;
    justify-content: center;
    }
  }
}
.docker__item--active {
  color: $docker-itemcolor;
}
</style>
