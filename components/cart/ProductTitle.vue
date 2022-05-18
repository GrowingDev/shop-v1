<template>
  <div
    class="
      flex flex-row
      justify-center
      uppercase
      product-title
      text-lg
      md:text-2xl
      w-fit
      h-fit
    "
    :class="[xl ? bigFont : '']"
  >
    <h1 class="text-primary-gold font-bold" :class="[xl ? 'font-medium' : '']">
      {{ firstWord }}
    </h1>
    <h1 class="md:font-thin" :class="[dark ? darkFont : 'white-font']">
      {{ secondWord }}
    </h1>
  </div>
</template>

<script>
export default {
  props: ['firstWord', 'secondWord', 'dark', 'xl'],

  data() {
    return {
      darkFont: 'dark-font',
      bigFont: 'text-3xl',
    }
  },
}
</script>
<style scoped>
.white-font {
  color: white;
}
.dark-font {
  color: #1c1c1c;
}
@media screen and (max-width: 320px) {
  .product-title {
    font-size: 18px;
    letter-spacing: 1.6pt;
  }
}
</style>
