<template>
  <div class="bg-primary-dark">

   <navigation-bar :openMenu="this.openMenu" :menu="this.toogleMenu"/>
    <nuxt-child />
    <Footer />
      <Menu v-if="toogleMenu" :show-nav="this.openMenu" />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import NavigationBar from '~/components/NavigationBar.vue';
import Menu from '~/components/menu/Menu.vue';

export default {
  data: () => {
    return {
      toogleMenu: false,
    }
  },
  components:{
    NavigationBar,
    Footer,
    Menu
  },
  methods: {
    openMenu() {
      this.toogleMenu = !this.toogleMenu;
    console.log(this.toogleMenu)
    },
  },
}
</script>
