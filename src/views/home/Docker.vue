<template>
  <div class="docker">
    <div class="docker__item" :class="{ 'docker__item': true, 'docker__item--active': index === 0 }" v-for="( item, index ) in dockList" :key="item">
      <span class="material-icons iconfont">{{ item.icon }}</span>
      {{ item.text }}
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
        text: 'home'
      },
      {
        icon: 'shopping_cart',
        text: '購物車'
      },
      {
        icon: 'toc',
        text: '訂單'
      },
      {
        icon: 'perm_identity',
        text: '我的'
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
