<template>
  <div class="bg-primary-dark">
    <navigation-bar />
    <nuxt-child />
        <Menu  v-if="menu"/>
    <Footer />

  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import NavigationBar from '~/components/NavigationBar.vue'
import Menu from '~/components/menu/Menu.vue'

export default {
  components: {
    NavigationBar,
    Footer,
    Menu,
  },
  computed: {
    menu() {
      return this.$store.state.toogleMenu
    },
  },
}
</script>
