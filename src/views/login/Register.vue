<template>
  <div class="wrapper">
    <img class="wrapper__img" target='_blank' src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
        <input class="wrapper__input__coontent" type="text" placeholder="請輸入手機號碼" v-model="username">
    </div>
    <Toast v-if="show" :message="toastMessage" />
    <div class="wrapper__input">
        <input class="wrapper__input__coontent" type="password" placeholder="請輸入密碼" v-model="password" autocomplete="new-password">
    </div>
    <div class="wrapper__input">
        <input class="wrapper__input__coontent" type="password" placeholder="確認密碼" v-model="ensurement">
    </div>
    <div class="wrapper__login-button" @click="handleRegister">註冊</div>
    <div class="wrapper__login-link">
      <router-link :to="'/login'">已有帳號去登錄</router-link>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import { reactive, toRefs } from 'vue'
import Toast, { useToastEffect } from '../../components/Toast'

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const router = useRouter()
    const { show, toastMessage, showToast } = useToastEffect()
    // 註冊相關data
    const data = reactive({
      username: '',
      password: '',
      ensurement: ''
    })
    const { username, password, ensurement } = toRefs(data)

    // router 跳轉頁面
    const handleClick = () => {
      router.push({ name: 'Login' })
    }

    // axios 取得資料相關邏輯
    const handleRegister = async () => {
      const { username, password, ensurement } = data
      // 判斷註冊資料是否完整
      if (username === '' || password === '' || ensurement === '') {
        return showToast('請輸入完整資料')
      } else {
        try {
          // 使用 axios 發送註冊資料
          const result = await post('/api/user/register', {
            username: data.username,
            password: data.password
          })
          console.log(result.errno)
          // 判斷回傳資料邏輯
          if (result.errno === 0) {
            localStorage.isLogin = true
            router.push({ name: 'Login' })
            showToast('註冊成功')
          } else {
            showToast('註冊失败')
          }
        } catch {
          showToast('註冊失败')
        }
      }
    }

    return { handleClick, handleRegister, show, toastMessage, showToast, username, password, ensurement }
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
      &__coontent {
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
