<template>
  <transition name="slide-fade">
    <div id="menu" class="bg-black/75 z-9" >
      <div id="menu-list">
        <button
          @click="showHome"
          class="menu-link md:text-md p-4 pl-4 lg:pl-8 uppercase text-left"
        >
          Home
        </button>
        <navigation-group-opener
          title="kollektionen"
          :btn-handler="showNavigationGroup"
        />
        <button
        @click="showCreator"
          class="menu-link md:text-md p-4 pl-4 lg:pl-8 uppercase text-left"
        >
          creator
        </button>
        <button
          class="menu-link md:text-md p-4 pl-4 lg:pl-8 uppercase text-left"
        >
          die marke
        </button>
        <button
          class="menu-link md:text-md p-4 pl-4 lg:pl-8 uppercase text-left"
        >
          faq
        </button>
               <button @click="showB2B"
          class="menu-link md:text-md p-4 pl-4 lg:pl-8 uppercase text-left"
        >
          b2b
        </button>
        <button
          class="menu-link md:text-md p-4 pl-4 lg:pl-8 uppercase text-left"
        >
          kontakt
        </button>
      </div>
      <transition name="slide-fade">
        <accessoires-sub-navigation
          v-if="subMenu"
          :toogleSubMenu="showNavigationGroup"
        />
      </transition>
    </div>
  </transition>
</template>

<script>
import NavigationGroupOpener from '@/components/menu/components/NavigationGroupOpener.vue'
import AccessoiresSubNavigation from '@/components/menu/components/accessoires-sub-navigation.vue'
export default {
  name: 'Menu',
  components: {
    NavigationGroupOpener,
    AccessoiresSubNavigation,
  },

  data() {
    return {
      subMenu: false,
    }
  },

  methods: {
    showNavigationGroup() {
      this.subMenu = !this.subMenu
    },
    closeMenu() {
      this.$store.commit("menu")
    },
    showCreator() {
      this.closeMenu()
      this.$router.push({
        path: '/product/10000',
      })
    },
    showHome() {
       this.closeMenu()
      this.$router.push({
        path: '/',
      })

    },

       showB2B() {
       this.closeMenu()
      this.$router.push({
        path: '/business-terminal',
      })

    },
  },
}
</script>

<style >
.menu-link {
  transition: all ease 0.3s;
  color: white;
}
.menu-link:hover {
  background: white;
  color: #1c1c1c;
}
#menu {
  position: fixed;
  top: 0;
  right: 0;
}
#menu,
#menu-list {
  display: flex;
  flex-direction: column;
  overflow: auto;

  height: 100vh;

  width: 100%;
}
@media screen and (min-width: 700px) {
  #menu,
  #menu-list {
    width: 300px;
  }
}
#menu-list {
  padding-top: 60px;
}
#navigation-header {
  height: 130px;
  border-bottom: 0.5px solid #d0b48f;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(300px);
  opacity: 0;
}


</style>
