<template>
  <div class="docker">
    <div class="docker__item ">
      <span class="material-icons docker__icon">home</span>
      首頁
    </div>
    <div class="docker__item">
      <span class="material-icons docker__icon">shopping_cart</span>
      購物車</div>
    <div class="docker__item">
      <span class="material-icons docker__icon">toc</span>
      訂單
    </div>
    <div class="docker__item">
      <span class="material-icons docker__icon">perm_identity</span>
      我的
    </div>
  </div>
</template>

<style lang="scss">
.docker {
  display: flex;
  box-sizing: border-box;
  padding: 0 .18rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: 1px solid #f1f1f1;
  background: green;
}

.docker__item {
  flex: 1;
  text-align: center;
}

.docker__icon {
  font-size: 20px;
  display: flex;
  justify-content: center;
}
</style>
