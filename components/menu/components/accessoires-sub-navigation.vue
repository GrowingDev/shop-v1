<template>
  <div id="navigation-group-page" class="bg-black/90" @mouseleave="closeMenu">
    <div id="navigation-group-container">
      <nuxt-link
        v-for="item in collections"
        :key="item.id"
        class="menu-link md:text-md p-4 pl-8 uppercase"
        :to="`/collection/${item.title}`"
      >
        <a @click="showNav">{{ item.title }}</a>
      </nuxt-link>
    </div>
    <button
      class="
        menu-link
        md:text-md
        p-4
        pl-8
        uppercase
        flex flex-row
        items-center
        justify-start
      "
      @click="btnHandler"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
      </svg>
      Zurück
    </button>
  </div>
</template>

<script>
export default {
  name: 'AccessoiresSubNavigation',
  data: () => ({
    collections: [],
  }),
  async fetch() {

    this.collections = await fetch('http://api.andreasbenz.org/collection/').then(
      (res) => res.json()
    )
  },

  props: {
    btnHandler: {
      type: Function,
      required: true,
      default: () => {},
    },

    showNav: {
      type: Function,
      required: true,
      default: () => {},
    },
  },
  methods: {
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
  fill: white;
  letter-spacing: 1.6pt;
}
.menu-link > svg {
  transform: translateX(-5px);
}
.menu-link:hover {
  background: white;
  color: #1c1c1c;
  fill: #1c1c1c;
}
.menu-link:hover > svg {
  animation: bounce 1s infinite;
}
#navigation-group-page {
  position: absolute;
  top: 60px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  height: calc(100% - 80px);
  width: 100%;
  z-index: 2;
}
@media screen and (min-width: 700px) {
  #navigation-group-page {
    width: 300px;
  }
}
#navigation-group-title {
  color: white;
  font-weight: 400px;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: start;
  text-transform: uppercase;
  margin: 0;
  padding: 30px;
}
#navigation-group-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
@media print {
  #navigation-group-page {
    display: none;
  }
}

.btn-nav-link {
  width: 100%;
  text-align: left;
  font-size: 16px;
  border-left: 2px solid transparent;
  text-transform: uppercase;
  transition: all ease 200ms;
  color: #868686;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  fill: #868686;
  outline: none !important;
}

.btn-nav-link:hover {
  background: #303030;
  color: white;
}

#btn-nav-back {
  width: 100%;
  background: none;
  border: none;
  list-style: none;
  padding: 15px;
  padding-right: 30px;
  padding-left: 30px;
  text-align: left;
  font-size: 14px;
  border-left: 2px solid transparent;
  text-transform: uppercase;
  transition: all ease 200ms;
  color: #868686 !important;
  cursor: pointer;
  text-decoration: none !important;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  fill: #868686;
  outline: none !important;
}
#btn-nav-back:hover {
  color: white !important;
  fill: white !important;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateX(-5px);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateX(0px);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
