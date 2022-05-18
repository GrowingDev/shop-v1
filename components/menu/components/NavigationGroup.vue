<template>
  <div class="navigation-group">
    <button class="group-opener" @click="showItems">
      {{ title }}
      <svg
        v-if="!visible"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
      </svg>
    </button>
    <router-link
      v-show="visible"
      v-for="item in groupItems"
      :key="item.title"
      :class="[
        route.fullPath === '/' + item.link + '/new' ||
        route.fullPath === `/${item.link}/${route.params.id}`
          ? 'navigation-group-link router-link-exact-active'
          : 'navigation-group-link',
      ]"
      :to="'/' + item.link + '/list'"
      >{{ item.title }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'NavigationGroup',
  props: {
    title: String,
    groupItems: Array,
    route: null,
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    showItems() {
      this.visible = !this.visible
    },
  },
}
</script>

<style scoped >
.navigation-group {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.group-opener {
  font-family: 'Montserrat' !important;
  border: none;
  background: none;
  outline: none;
  width: 100%;
  padding: 15px;
  padding-right: 15px;
  padding-left: 30px;
  text-align: left;
  font-size: 16px;
  border-left: 2px solid transparent;
  text-transform: uppercase;
  transition: all ease 200ms;
  color: #868686 !important;
  cursor: pointer;
  text-decoration: none !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  fill: #868686;
}
.group-opener:hover {
  background: #303030;
  color: white !important;
}
</style>
