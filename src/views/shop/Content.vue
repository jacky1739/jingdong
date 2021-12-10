<template>
  <div class="content">
    <!-- <div class="category">
      <div class="category__item">全部商品</div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令蔬菜</div>
      <div class="category__item">肉蛋家禽</div>
    </div> -->
    <ul class="category">
      <li class="category__item category__item--active">全部商品</li>
      <li class="category__item">秒杀</li>
      <li class="category__item">新鲜水果</li>
      <li class="category__item">休闲食品</li>
      <li class="category__item">时令蔬菜</li>
      <li class="category__item">肉蛋家禽</li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins';
@include ulolReset;

.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .49rem;
  // background: #ccc;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: .76rem;
  // background: black;
  background: #F5F5F5;
  &__item {
    line-height: .4rem;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    text-align: center;
    &--active {
      background: #F5F5F5;
    }
  }
}
</style>
