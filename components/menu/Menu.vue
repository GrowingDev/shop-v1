<template>
  <transition name="slide-fade">
    <div id="menu" class="bg-black/75 z-9" @mouseleave="closeMenu">
      <div id="menu-list">
        <nuxt-link class="menu-link  md:text-md p-4 pl-4 lg:pl-8 uppercase" to="/">
          Home
        </nuxt-link>
        <navigation-group-opener
          title="kollektionen"
          :btn-handler="showNavigationGroup"
        />
           <nuxt-link class="menu-link  md:text-md p-4 pl-4 lg:pl-8 uppercase" to="/product/10000">
          creator
        </nuxt-link>
        <nuxt-link class="menu-link  md:text-md p-4 pl-4 lg:pl-8 uppercase" to="/">
          die marke
        </nuxt-link>
        <nuxt-link class="menu-link  md:text-md p-4 pl-4 lg:pl-8 uppercase" to="/">
          faq
        </nuxt-link>
        <nuxt-link class="menu-link  md:text-md p-4 pl-4 lg:pl-8 uppercase" to="/">
          kontakt
        </nuxt-link>
      </div>
      <transition name="slide-fade">
        <accessoires-sub-navigation
          v-if="show"
          :btn-handler="showNavigationGroup"
          :navigation-group="'kollektion'"
          :show-nav="showNav"
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
  props: {
    showNav: {
      type: Function,
      required: true,
      default: () => {
        console.log('test')
      },
    },
  },
  data() {
    return {
      show: false,
      selectedNavigationGroup: String,
      collectionGroup: [
        {
          title: 'Firefighter',
          link: 'collection',
        },
      ],
    }
  },

  methods: {
    showNavigationGroup(group) {
      this.selectedNavigationGroup = group
      this.show = !this.show
    },
    closeMenu() {
      if (!this.show) {
        this.showNav()
      }
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
  color: #1C1C1C;
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

@media print {
  #menu {
    display: none;
  }
}
</style>
