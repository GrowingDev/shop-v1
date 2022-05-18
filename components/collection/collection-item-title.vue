<template>
  <div class="title">
    <h3 class="text-xl font-medium">№</h3>
    <h3 class="text-xl font-light">{{ words[0] }}</h3>
  </div>
</template>

<script>
export default {
  name: 'CollectionItemTitle',
  props: {
    title: {
      type: String,
      required: true,
      default: () => 'Test Title',
    },
  },
  computed: {
    words() {
      return this.title.split(' ')
    },
  },
}
</script>

<style scoped>
.title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: black;
}
.title > h3 {
  letter-spacing: 1.6pt;
}

@media screen and (min-width: 1000px) {
  .title > h3 {
    font-size: 1.6rem !important;
  }
}
@media screen and (min-width: 425px) {
  .title > h3 {
    letter-spacing: 3.2pt;
  }
}
</style>
