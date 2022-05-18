<template>
  <div class="btn-nav-link">
    <router-link
      :class="[
        route.fullPath === '/' + navLink + '/' ||
        route.fullPath === `/${navLink}/${route.params.id}`
          ? 'btn-nav-link router-link-exact-active'
          : 'btn-nav-link',
      ]"
      :to="'/' + navLink"
      >{{ title }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'NavigationGroupLink',
  props: {
    route: null,
    title: String,
    link: String,
  },
  computed: {
    navLink() {
      return this.link
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
