<template>
  <div class="productSlide">
    <img
      :src="require(`~/assets/images/${slide.imageUrl}.png`)"
      :alt="slide.imageAlt"
      class="productImage"
      :class="{ selectedImg: active }"
      @click="selectProductSlide"
      @mouseenter="showDescriptions"
      @mouseout="hideDescriptions"
    />
  </div>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    index: {
      type: Number,
      required: true,
      default: () => 0,
    },
    slide: {
      type: Object,
      required: false,
      default: () => {},
    },
    active: Boolean,
  },
  data: () => {
    return {
      mouse: null,
    }
  },
  mounted() {
    if (document.getElementById('cursor')) {
      this.mouse = document.getElementById('cursor')
    }
  },
  methods: {
    selectProductSlide() {
      this.$store.commit('business/selectProductSlide', this.index)
    },
    showDescriptions() {
      this.mouse.style.opacity = 1
      this.show = true
    },
    hideDescriptions() {
      this.mouse.style.opacity = 0
      this.show = false
    },
  },
}
</script>

<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.show-details {
  text-transform: uppercase;
}

.productSlide {
  text-align: center;
}
.selectedImg {
  transform: scale(1.2) !important;
  filter: grayscale(0) !important;
}
.productImage {
  width: 100%;
  height: auto;
  filter: grayscale(1);
  transform: scale(0.6);
  transition: all 0.8s ease;
  cursor: pointer;
}
@media screen and (min-width: 600px) and (max-width: 1200px) {
  .productImage {
    width: 100%;
    height: auto;
    filter: grayscale(1);
    transform: scale(0.6);
    transition: all 0.8s ease;
    cursor: pointer;
  }
  .show-details {
    display: inline;
  }
  .productImage:hover {
    filter: grayscale(0);
    transform: scale(1);
  }
  .selectedImg {
    transform: scale(1) !important;
    filter: grayscale(0) !important;
  }
}
@media screen and (min-width: 1200px) {
  .productImage {
    width: 100%;
    height: auto;
    filter: grayscale(1);
    transform: scale(0.5);
    transition: all 0.8s ease;
    cursor: pointer;
  }
  .show-details {
    display: inline;
  }
  .productImage:hover {
    filter: grayscale(0);
    transform: scale(1);
  }
  .selectedImg {
    transform: scale(1) !important;
    filter: grayscale(0) !important;
  }
}
</style>
