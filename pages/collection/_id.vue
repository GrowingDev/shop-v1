<template>
  <div id="collection-page" class="min-h-screen" @mousemove="cursor">
    <div id="cursor"><p>Click for Details</p></div>
    <collection-item
      v-for="(item, index) in this.products"
      :key="item.id"
      :collection-item="item"
      :index="index"
    />
  </div>
</template>

<script>
import CollectionItem from '@/components/collection/collection-item.vue'

export default {
  name: 'Collection',
  components: {
    CollectionItem,
  },
  data: () => ({
    mouse: null,

  }),
  async fetch() {
    let products = await fetch(
      'http://api.andreasbenz.org/product/filter/' + this.$route.params.id
    ).then((res) => res.json())

    this.$store.commit('setCollection', products)
  },
  mounted() {
    if (document.getElementById('cursor')) {
      this.mouse = document.getElementById('cursor')
    }
  },
  methods: {
    cursor(e) {
      this.mouse.style.top = `${e.pageY}px`
      this.mouse.style.left = `${e.pageX}px`
    },
  },
  computed: {
    products() {
      return this.$store.state.collection
    },
  },
  head: {
    title: `REMICHEL | Kollektion`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },
}
</script>

<style scoped>
#collection-page {
  background: #1c1c1c;
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100vw !important;
}
</style>
