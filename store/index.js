export const state = () => ({
  toogleMenu: false,
  product: {},
  collection: [],
  uploadFront: {
    image: null,
  },
  uploadBack: {
    image: null,
  },
  cart: [],
})

export const mutations = {
  menu(state) {
    state.toogleMenu = !state.toogleMenu
  },

  setCollection(state, collection) {
    state.collection = collection
  },
  setUploadFront(state, upload) {
    state.uploadFront.image = upload
  },
  setUploadBack(state, upload) {
    state.uploadBack.image = upload
  },
  setProduct(state, product) {
    state.product = product
  },
  setCartItem(state, cartItem) {
    state.cart.push(cartItem)
  },
  increaseCartItem(state, id) {
    state.cart.forEach((item) => {
      if (item.id === id) {
        item.amount++
        return
      }
      return
    })
  },
  decreaseCartItem(state, id) {
    state.cart.forEach((item) => {
      if (item.id === id) {
        item.amount--
        return
      }
      return
    })
  },
  removeCartItem(state, id) {
    const newCart = state.cart.filter((item) => {
      return item.id !== id
    })
    state.cart = newCart
  },
}
