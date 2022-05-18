<template>
  <nav class="bg-black/75 fixed top-0 w-full z-10">
    <div class="container p-4 mx-auto flex flex-row justify-between xl:px-20">
      <div class="flex-1 shrink"></div>
      <div
        class="
          flex-2
          md:grow
          text-center
          uppercase
          flex flex-row
          justify-center
          text-lg
        "
      >
        <h1 class="text-primary-gold font-bold">re</h1>
        <h1 class="text-white">michel</h1>
      </div>
      <div
        class="flex-1 shrink text-right flex flex-row justify-end align-middle"
      >
        <button class="mr-6" @click="openCart">
          <img id="cart-icon" src="~/assets/icons/cart.svg" alt="Cart" />
        </button>
        <button @click="openMenu">
          <img v-if="menu" src="~/assets/icons/menu-close.svg" alt="Menu" />
          <img v-if="!menu" src="~/assets/icons/menu-white.png" alt="Menu" />
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavigationBar',

  props: {
    openMenu: {
      type: Function,
      required: true,
      default: () => {},
    },
    menu: {
      type: Boolean,
      required: true,
      default: () => false,
    },
  },
  methods: {
    showNav() {
      this.nav = !this.nav
    },
    openCart() {
      this.$router.push('/Cart')
    },
  },
}
</script>
<style scoped>
img {
  width: 26px;
  height: auto;
}
</style>
