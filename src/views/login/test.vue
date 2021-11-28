<template>
  <!-- <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
        <input class="wrapper__input__content" type="text" placeholder="請輸入手機號碼">
    </div>
    <div class="wrapper__input">
        <input class="wrapper__input__content" type="password" placeholder="請輸入密碼">
    </div>
    <div class="wrapper__login-button">登入</div>
    <div class="wrapper__login-link">
      <router-link :to="'/register'">立即註冊</router-link>
    </div>
  </div> -->
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
      <input class="wrapper__input__content" type="text" placeholder="請輸入手機號碼">
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content"  type="text" placeholder="請輸入密碼">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../style/variables';

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  margin: auto;
  display: grid;
  justify-content: center;
  align-content: center;
  &__img {
    width: .64rem;
    height: .64rem;
    display: block;
    margin: 0 auto .14rem auto;
  }
  &__input {
    background: $search-fontColor;
    height: .48rem;
    border-radius: 6px;
    margin: 0 0 .14rem 0;
    padding: 0 .16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &__content {
      border: none;
      outline: none;
      background: none;
      font-size: .16rem;
    }
  }
}

// .wrapper {
  // position: absolute;
  // top: 50%;
  // left: 0;
  // right: 0;
  // transform: translateY(-50%);
  // margin: auto;
  // display: grid;
  // justify-content: center;
  // align-content: center;
//   &__img {
//     display: block;
//     margin: 0 auto .4rem auto;
//     width: .66rem;
//     height: .66rem;
//   }
//   &__input {
//     height: .48rem;
//     margin: 0 .4rem .16rem .4rem;
//     padding: 0 .16rem;
//     background: #F9F9F9;
//     border: 1px solid rgba(0,0,0,0.10);
//     border-radius: 6px;
//     border-radius: 6px;
//     &__content {
//       height: .48rem;
//       border: none;
//       outline: none;
//       width: 100%;
//       background: none;
//       font-size: .16rem;
//     }
//   }
// }
</style>
