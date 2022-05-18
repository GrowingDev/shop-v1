<template>
  <div id="product-preview-thumbnails">
    <img
      v-for="(image, i) in productImages"
      :key="i"
      class="thumbnail"
      :src="`http://localhost:4000/images/${image.url}.png`"
      :a="image.title"
      :alt="image.imageAlt"
      :class="{ selectedThumbnail: i == selected }"
      @click="selectThumbnail(i)"
    />
  </div>
</template>

<script>
export default {
  name: 'ProductPreviewThumbnails',
  props: {
    productImages: {
      type: Array,
      required: true,
      default: () => [],
    },
    currentThumbnail: {
      type: Number,
      required: true,
      default: () => 1,
    },
    selectThumbnail: {
      type: Function,
      required: true,
      default: () => {},
    },
  },
  computed: {
    selected() {
      return this.currentThumbnail
    },
  },
}
</script>

<style scoped>
#product-preview-thumbnails {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 440px;
}
.thumbnail {
  width: calc(100% / 3);
  height: auto;
  filter: grayscale(1);
  transform: scale(0.5);
  transition: all 0.5s ease;
  cursor: pointer;
}
.thumbnail:hover {
  filter: grayscale(0);
  transform: scale(1);
}
.selectedThumbnail {
  transform: scale(1);
  filter: grayscale(0);
}
@media screen and (min-width: 400px) {
  .thumbnail {
    max-width: 120px;
  }
}
</style>
