<template>
  <div
    id="cart"
    class="
      container
      flex flex-col
      justify-between
      mx-auto
      min-h-screen
      w-full
      pt-40
      p-4
      pb-8
      xl:px-20
    "
  >
    <div class="flex flex-col flex-1">
      <div class="w-full flex flex-row justify-center lg:justify-start">
        <heading-default firstWord="waren" secondWord="korb" />
      </div>

      <div v-if="cart.length !== 0" id="cart-items" class="lg:mt-8">
        <h2 id="title">set</h2>
        <h2 id="front">vorderseite</h2>
        <h2 id="back">rückseite</h2>
        <h2 id="price">UVP</h2>
        <h2 id="amount">menge</h2>
        <h2 id="total">gesamt</h2>
      </div>

      <cart-item v-for="item in cart" :key="item.id" :item="item" />
    </div>
    <div class="flex-1 w-full text-center">
      <h1 class="text-white/50 font-semibold" v-if="cart.length == 0">
        Es wurden keine Waren gefunden.
      </h1>
    </div>

    <div
      class="
        w-full
        flex
        lg:flex-row
        items-center
        justify-between
        flex-1
        shrink
        flex-col-reverse
      "
    >
      <div class="w-full lg:max-w-sm">
        <button-default
          :func="navigateBack"
          title="zurück"
          @click="navigateBack"
          class="w-full"
        />
      </div>
      <div class="w-full lg:max-w-sm">
        <button-default
          v-if="cart.length !== 0"
          :func="showCheckout"
          title="zur kassa"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonDefault from '~/components/ButtonDefault.vue'
import CartItem from '~/components/cart/CartItem.vue'
import HeadingDefault from '~/components/HeadingDefault.vue'

export default {
  name: 'Cart',
  computed: {
    cart() {
      return this.$store.state.cart
    },
  },
  components: {
    CartItem,
    HeadingDefault,
    ButtonDefault,
  },
  methods: {
    navigateBack() {
      this.$router.back(-1)
    },
    showCheckout(){
         this.$router.push('/Checkout')
    }
  },
  head: {
    title: `REMICHEL | Warenkorb`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },
}
</script>

<style  scoped>
#cart-footer {
  text-align: right;
  width: 100%;
  padding: 200px;
}

#cart > h1 {
  font-weight: 300;
  color: white;
}
#cart-items {
  display: none;
}
@media screen and (min-width: 1024px) {
  #cart-items {
    display: grid;
    grid-template-rows: 50px;
    grid-template-columns: 100px 200px 200px 200px 1fr 1fr 1fr;
    grid-template-areas: ' . title front back price amount total';
    justify-items: center;
  }
}
#cart-items > h2 {
  color: gray;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3.2pt;
}
#front {
  grid-area: front;
}
#back {
  grid-area: back;
}
#etui {
  grid-area: etui;
}
#title {
  grid-area: title;
}
#price {
  grid-area: price;
}
#amount {
  grid-area: amount;
}
#total {
  grid-area: total;
}
</style>
