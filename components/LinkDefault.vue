<template>
  <NuxtLink
    :to="route"
    class="w-full mt-8 md:mt-8 text-center py-2 lg:py-4 px-4 lg:px-8"
    :class="[dark ? darkFont : 'white-font']"
    >{{ title }}</NuxtLink
  >
</template>

<script>
export default {
  props: ['route', 'title', 'dark'],
  created() {},
  data() {
    return {
      darkFont: 'dark-font',
    }
  },
}
</script>

<style scoped>
a {
  font-weight: 500;
  width: 100%;
  transition: 0.4s;
  text-transform: uppercase;
  letter-spacing: 3.2pt;
}
.white-font {
  color: white;
  border: 2px solid white;
}
.dark-font {
  color: #1c1c1c;
  border: 2px solid #1c1c1c;
}
.white-font:hover {
  background: white;
  color: #1c1c1c;
}
.dark-font:hover {
  background: #1c1c1c;
  color: white;
}
@media screen and (min-width: 425px) {
  a {
    letter-spacing: 6.4pt;
  }
}
</style>
