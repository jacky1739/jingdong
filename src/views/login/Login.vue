<template>
  <div class="wrapper">
    <img class="wrapper__img" src="../../../public/images/编组@2x.png" alt="">
    <div class="wrapper__input">
      <input class="wrapper__input__content" type="text" placeholder="請輸入用戶名" v-model="username">
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" type="password" placeholder="請輸入密碼" v-model="password" autocomplete="new-password">
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登入</div>
    <div class="wrapper__login-link">
      <router-link :to="'/register'">立即註冊</router-link>
    </div>
    <Toast v-if="show" :message="toastMessage"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import { reactive, toRefs } from 'vue'
import Toast, { useToastEffect } from '../../components/Toast'

const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterClick }
}

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const router = useRouter()
    // 登陸資料
    const { handleRegisterClick } = useRegisterEffect()
    const data = reactive({
      username: '',
      password: ''
    })
    const { username, password } = toRefs(data)
    // toast 邏輯
    const { show, toastMessage, showToast } = useToastEffect()

    // 登陸邏輯
    const handleLogin = async () => {
      try {
        const { username, password } = data
        // 判斷登陸資料是否完整
        if (username === '' || password === '') {
          return showToast('請輸入帳號和密碼')
        } else {
          // 使用 axios 發送登陸資料
          const result = await post('/api/user/login', {
            username: data.username,
            password: data.password
          })
          // 判斷回傳資料邏輯
          if (result.errno === 0) {
            localStorage.isLogin = true
            router.push({ name: 'Home' })
            showToast('登陸成功')
            console.log(toastMessage)
          } else {
            showToast('登陆失败')
          }
        }
      } catch (e) {
        showToast('请求失败')
      }
    }
    return {
      username, password, handleLogin, handleRegisterClick, show, toastMessage
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
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
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
      background: $btn-bgColor;
      box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
      border-radius: 0.04rem;
      border-radius: 0.04rem;
      color: $bgColor;
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
