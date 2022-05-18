<template>
  <div class="w-full flex flex-col pb-8 lg:pb-0">
    <button-default :func="addProductToCart" title="zum warenkorb hinzufügen" />
    <button-default :func="navigateBack" title="zurück" />
  </div>
</template>

<script>
import ButtonDefault from '../ButtonDefault.vue'

import LinkDefault from '../LinkDefault.vue'
export default {
  name: 'ProductMenu',
  components: { LinkDefault, ButtonDefault },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
    available: {
      type: Boolean,
      required: false,
      default: () => true,
    },
    submitUpload: {
      type:Function,
      required: false
    }
  },
  computed: {
    availableText() {
      return 'zum warenkorb hinzufügen'
    },
  },
  methods: {
    navigateBack() {
      this.$router.back(-1)
    },
    addProductToCart() {
      if(this.$route.params.id === "10000"){
        this.submitUpload()
      }
      const newItem = {
        id: this.product.id,
        productId: this.product.productId,
        collection: this.product.collection,
        price: this.product.price,
        amount: 1,
      }
      const existingElement = this.$store.state.cart.find((item) => {
        return item.id === newItem.id
      })
      console.log(existingElement)
      if (existingElement) {
        this.$store.commit('increaseCartItem', this.product.id)
      } else {
        this.$store.commit('setCartItem', newItem)
      }

      this.$router.push({
        path: '/cart',
      })
    },
  },
}
</script>

<style  >
</style>
