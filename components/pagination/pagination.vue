<template>
  <div id="pagination">
    <div
      v-for="(slide, i) in slides"
      :key="i"
      class="pagination-element"
      :class="{ activeElement: activeSlide == i }"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    slides: {
      type: Number,
      required: true,
      default: () => 0,
    },
    activeSlide: {
      type: Number,
      required: true,
      default: () => 0,
    },
  },
}
</script>

<style scoped>
#pagination {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 2rem;
}
.pagination-element {
  width: 2rem;
  height: 2px;
  background:gray;
  margin: 5px;
  transition: all 0.5s ease;
}

.activeElement {
  background: white !important;
}

@media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
  #pagination {
    bottom: 2rem;
  }
}
@media screen and (min-width: 1000px) {
  #pagination {
    bottom: 3rem !important;
  }
}
</style>
