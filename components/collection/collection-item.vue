<template>
  <div
    id="collection-item"
    class="p-4"
    :class="animationClass"
  >
    <collection-item-title :title="`${collectionItem.id}`" />
    <nuxt-link
      :to="`/product/${collectionItem.productId}`"
      class="collection-item-link flex flex-row justify-center items-center"
    >
      <img
        class="collection__item__image"
        :src="require(`~/assets/images/product-page/clip_ff.png`)"
        alt
        @mouseenter="showDescriptions"
        @mouseout="hideDescriptions"
      />
    </nuxt-link>
    <button-default
      class="show-item"
      :func="showProduct"
      title="show details"
      :dark="true"
    />
  </div>
</template>

<script>
import CollectionItemTitle from '@/components/collection/collection-item-title.vue'
import LinkDefault from '../LinkDefault.vue'

export default {
  name: 'CollectionItem',
  components: {
    CollectionItemTitle,
    LinkDefault,
  },
  props: {
    collectionItem: {
      type: Object,
      required: true,
      default: () => {},
    },
    index: {
      type: Number,
      required: false,
      default: () => 0,
    },
  },
  data: () => {
    return {
      mouse: null,
      title: null,
      parentElement: null,
      price: null,
      show: false,
    }
  },
  computed: {
    animationClass() {
      return `item-${this.index + 1}`
    },
  },
  mounted() {
    if (document.getElementById('cursor')) {
      this.mouse = document.getElementById('cursor')
    }
  },
  methods: {
    showDescriptions() {
      this.mouse.style.opacity = 1
      this.show = true
    },
    hideDescriptions() {
      this.mouse.style.opacity = 0
      this.show = false
    },

    showProduct() {
      this.$router.push({
        path: `/product/${this.collectionItem.productId}`,
      })
    },
  },
}
</script>
<style >
.item-1 {
  background: linear-gradient(to left, #f1c40f 50%, white 50%);
  background-size: 200% 100%;
  background-position: left bottom;
  animation-name: right-left;
}

.item-2 {
  background: linear-gradient(to right, #dd6f47 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  animation-name: left-right;
}

.item-3 {
  background: linear-gradient(to bottom, white 50%, #c5a198 50%);
  background-size: 100% 200%;
  background-position: top bottom;
  animation-name: bottom-top;
}

.item-4 {
  background: linear-gradient(to bottom, #444c64 50%, white 50%);
  background-size: 100% 200%;
  background-position: left bottom;
  animation-name: top-bottom;
}

.item-5 {
  background: linear-gradient(to left, #cc595b 50%, white 50%);
  background-size: 200% 100%;
  background-position: left bottom;
  animation-name: right-left;
}

.item-6 {
  background: linear-gradient(to right, #69b0da 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  animation-name: left-right;
}

.item-7 {
  background: linear-gradient(to bottom, white 50%, #8c6063 50%);
  background-size: 100% 200%;
  background-position: top bottom;
  animation-name: bottom-top;
}

.item-8 {
  background: linear-gradient(to bottom, #5991b1 50%, white 50%);
  background-size: 100% 200%;
  background-position: left bottom;
  animation-name: top-bottom;
}

.item-9 {
  background: linear-gradient(to left, #0b8389 50%, white 50%);
  background-size: 200% 100%;
  background-position: left bottom;
  animation-name: right-left;
}

#collection-item {
  color: black;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  width: 100%;
  height: 80vh;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-columns: 1fr;
  grid-template:
    'top'
    'main'
    'bottom';
}
.collection-item-button {
  text-transform: uppercase;
  padding: 8px 10px;
  border: 2px solid black;
  background: none;
  color: black;
  text-decoration: none;
}
.item-title {
  grid-area: 'top';
}
.collection__item__image {
  width: 70%;
  grid-area: 'main';
  cursor: pointer;
}
.item-price {
  color: black;
  grid-area: 'bottom';
  font-size: 1.2rem;
  font-weight: 600;
}

@media only screen and (min-width: 700px) {
  #collection-item {
    width: calc(100% / 2);
    height: 60vh;
  }
  #collection-item > .item-title {
    font-size: 1rem !important;
    transition: 500ms all;
  }
  #collection-item > .item-price {
    font-size: 1.3rem;
    transition: 500ms all;
  }
}
@media only screen and (min-width: 900px) {
  .collection__item__image {
    width: 100%;
    height: auto;
  }
  #collection-item {
    width: calc(100% / 3) !important;
    height: 60vh;
  }
  .show-item {
    display: none !important;
  }
}

@keyframes right-left {
  to {
    background-position: right bottom;
  }
}

@keyframes left-right {
  to {
    background-position: left bottom;
  }
}

@keyframes bottom-top {
  to {
    background-position: bottom left;
  }
}
@keyframes top-bottom {
  to {
    background-position: top left;
  }
}
.show-item {
  text-align: center;
}
</style>
