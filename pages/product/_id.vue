<template>
  <div
    class="
      container
      mx-auto
      p-4
      flex flex-col
      items-center
      justify-evenly
      text-center
      lg:flex-row
      pt-20
      md:pt-0
      min-h-screen
    "
  >
    <div
      class="flex-1 w-full max-w-lg flex flex-col items-center justify-center"
    >
      <product-preview-creator
        v-if="product.collection === 'Creator'"
        :current-preview="selectedPreview"
        :uploadFront="uploadFront"
        :uploadBack="uploadBack"
      />
      <product-preview v-else :current-preview="selectedPreview" />
      <product-preview-thumbnails
        :product-images="product.images"
        :current-thumbnail="selectedPreview"
        :select-thumbnail="selectThumbnail"
      />
    </div>
    <div class="w-full flex-1 max-w-lg">
      <product-description :product="product" />
      <product-menu
        :product="product"
        :available="true"
        :submitUpload="submitUpload"
      />
    </div>
  </div>
</template>

<script>
import ProductPreview from '@/components/product-page/ProductPreview.vue'

import ProductPreviewThumbnails from '@/components/product-page/ProductPreviewThumbnails.vue'
import ProductMenu from '~/components/product-page/ProductMenu.vue'
import ProductDescription from '~/components/product-page/ProductDescription.vue'
import ProductPreviewCreator from '~/components/product-page/ProductPreviewCreator.vue'

export default {
  name: 'Product',
  components: {
    ProductPreview,
    ProductPreviewThumbnails,
    ProductMenu,
    ProductDescription,
    ProductPreviewCreator,
  },

  async fetch() {
    let product = await fetch(
      'https://api.andreasbenz.org/product/' + this.$route.params.id
    ).then((res) => res.json())
    this.$store.commit('setProduct', product)
  },

  data() {
    return {
      selectedPreview: 1,
      index: 0,
      uploadFront: {
        image: null,
      },
      uploadBack: {
        image: null,
      },
    }
  },
  computed: {
    product() {
      return this.$store.state.product
    },
  },
  mounted() {
    if (this.$route.params.id === '10000') {
      this.uploadFront.image = this.$store.state.uploadFront.image
      this.uploadBack.image = this.$store.state.uploadBack.image
    }
  },

  methods: {
    submitUpload() {
      this.$store.commit('setUploadFront', this.uploadFront.image)
      this.$store.commit('setUploadBack', this.uploadBack.image)
    },
    selectThumbnail(i) {
      this.selectedPreview = i
    },
    showFrontHandler() {
      document
        .querySelector('.flip-box-inner')
        .classList.remove('rotateForward')
    },
    showBackHandler() {
      document.querySelector('.flip-box-inner').classList.add('rotateForward')
    },
    showThumbnail(id) {
      this.index = id
    },
  },
  head: {
    title: `REMICHEL | Produktdetails`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },
}
</script>

<style scoped>
#product-details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.placeholder {
  padding: 1rem;
}

#product-preview-container {
  width: 100%;
  height: 65vh;
  text-align: center;
}

@media screen and (min-width: 500px) {
  #product-preview-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    width: 100%;
  }
}

@media screen and (min-width: 1000px) {
  #product-details-container {
    align-items: flex-start;
    width: 45%;
    height: 85vh;
    justify-content: center;
  }

  #product-preview-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 4rem;
    width: 55%;
    height: 85vh;
  }
}
</style>
