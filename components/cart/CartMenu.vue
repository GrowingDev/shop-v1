<template>
  <div id="cart-menu">
    <span id="price-label">
      Gesamt:
      <span>{{ this.$store.getters.cartTotal.toFixed(2) + '€' }}</span>
    </span>
    <button @click="showCheckout">zur kassa</button>
  </div>
</template>

<script>
export default {
  name: 'CartMenu',

  methods: {
    showCheckout() {},
  },
}
</script>


<style scoped >
#cart-menu {
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  text-align: left;
  padding: 60px;
  padding-right: 30px;
}
span {
  margin-right: 15px;
}
button {
  background: white;
  border: none;
  text-transform: uppercase;
  color: #1c1c1c;
  border-radius: 20px;
  padding: 8px 16px;
  text-transform: uppercase;
  transition: all 0.3s;
  letter-spacing: 0.1em;
  cursor: pointer;
  margin: 15px;
  outline: none !important;
}
button:hover {
  background: rgb(214, 187, 146);
  color: white;
}
#price-label {
  font-weight: 700;
}
#price-label > span {
  font-weight: normal;
}
</style>
