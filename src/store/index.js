import { createStore } from 'vuex'

export default createStore({
  state: { // 在vuex裡面，vuex 會把state轉換成proxy的數據，也就是響應式的數據
    cartList: {
      // 第一層級式商鋪的 ID
      // shopId: {
      //   productId: {
      //     _id: '1',
      //     name: '番茄 250g / 份',
      //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
      //     sales: 10,
      //     price: 33.6,
      //     oldPrice: 39.6,
      //     count: 2
      //   }
      // }
    }
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo } = payload
      let productList = state.cartList[shopId]
      if (!productList) { productList = {} }
      let product = productList[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }

      product.count = product.count + payload.num
      productList[productId] = product
      state.cartList = productList
    }
  },
  actions: {
  },
  modules: {
  }
})
