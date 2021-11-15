<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
        <input class="wrapper__input__content" type="text" placeholder="請輸入用戶名" v-model="data.username">
    </div>
    <div class="wrapper__input">
        <input class="wrapper__input__content" type="password" placeholder="請輸入密碼" v-model="data.password">
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登入</div>
    <div class="wrapper__login-link">
      <router-link :to="'/register'">立即註冊</router-link>
    </div>
  </div>
</template>

<script>
// import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
  name: 'Login',
  setup () {
    const data = reactive({
      username: '',
      password: ''
    })
    // const router = useRouter()
    const handleLogin = () => {
      axios.post('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/login', {
        username: data.username,
        password: data.password
      }).then(() => {
        alert('成功')
      }).catch(() => {
        alert('失敗')
      })
      // localStorage.isLogin = true
      // router.push({ name: 'Home' })
      console.log(data)
    }

    return {
      handleLogin, data
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables';

.wrapper {
  margin: auto;
  display: grid;
  justify-content: center;
  align-content: center;
  &__img {
      display: block;
      margin: 0 auto .4rem auto;
      width: .66rem;
      height: .66rem;
  }
  &__input {
      height: .48rem;
      margin: 0 .4rem .16rem .4rem;
      padding: 0 .16rem;
      background: #F9F9F9;
      border: 1px solid rbga(0,0,0,0.10);
      border-radius: 6px;
      &__content {
          line-height: .48rem;
          border: none;
          outline: none;
          width: 100%;
          background: none;
          font-size: .16rem;
          color: $content-notice-fontcolor;
          &::placeholder {
              color: $content-notice-fontcolor;
          }
      }
  }
  &__login-button {
      line-height: .48rem;
      margin: .32rem .4rem .16rem .4rem;
      background: #0091FF;
      box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
      border-radius: 0.04rem;
      border-radius: 0.04rem;
      color: #fff;
      font-size: .16rem;
      text-align: center;
  }
  &__login-link {
      text-align: center;
      font-size: .14rem;
      color: $content-notice-fontcolor;
  }
}
</style>
