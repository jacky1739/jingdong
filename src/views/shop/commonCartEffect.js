import { useStore } from 'vuex'
import { toRefs } from 'vue'
// 購物車相關邏輯
export const useCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
    console.log(shopId, productId, productInfo, num)
  }
  return { cartList, changeCartItemInfo }
}
