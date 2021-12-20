import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // 第一層級式商鋪的 ID
      shopId: {
        productId: {
          _id: '1',
          name: '番茄 250g / 份',
          imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
          sales: 10,
          price: 33.6,
          oldPrice: 39.6
        }
      },
      2: {

      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
