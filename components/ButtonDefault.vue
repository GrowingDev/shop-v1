<template>
  <button
    @click="func"
    class="
      button__default
      w-full
      mt-8
      md:mt-8
      text-center
      py-2
      lg:py-4
      px-4
      lg:px-8
    "
    :class="[dark ? darkFont : 'white-font']"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: ['title', 'dark', 'func'],
  props: {
    title: {
      type: String,
      required: true,
      default: () => 'Test Title',
    },
    dark: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    func: {
      type: Function,
      required: false,
      default: () => console.log('click'),
    },
  },

  data() {
    return {
      darkFont: 'dark-font',
    }
  },
}
</script>

<style scoped>
.button__default {
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
  .button__default {
    letter-spacing: 6.4pt;
  }
}
</style>
