<template>
  <div :id="$style.slider__homebase__a">
    <div :id="$style.slider__a__slides">
      <button :class="$style.btnPreSlide" @click="prevSlide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
        </svg>
      </button>
      <slide
        v-for="(slide, i) in productSlides"
        :key="i"
        :slide="slide"
        :active="i == currentProductSlideIndex"
        :index="i"
      />

      <button :class="$style.btnNextSlide" @click="nextSlide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
        </svg>
      </button>
    </div>
    <div :class="$style.slider__a__slide__description">
      <transition
        v-for="(slide, index) in productSlides"
        :key="index"
        name="fade"
        mode="in-out"
      >
        <text-box
          v-if="index == currentProductSlideIndex"
          :content="slide"
          :number="currentProductSlideIndex"
          :index="index"
        />
      </transition>
    </div>
    <pagination
      :active-slide="currentProductSlideIndex"
      :slides="productSlides.length"
    />
  </div>
</template>

<script>
import Pagination from './pagination'
import TextBox from './text-box'
import Slide from './slide'

export default {
  name: 'SliderA',
  components: {
    TextBox,
    Pagination,
    Slide,
  },
  data: () => {
    return {
      mouse: null,
      touch: {
        startX: 0,
        endX: 0,
      },
    }
  },
  computed: {
    currentProductSlideIndex() {
      return this.$store.state.business.selectedProductSlide
    },
    currentContent() {
      return this.secondSlides[this.currentProductSlideIndex]
    },
    productSlides() {
      return this.$store.state.business.secondSlides
    },
    productListLength() {
      return {
        width: this.secondSlides.length * 30 + '%',
      }
    },
    listPosition() {
      return {
        transform: 'translateX(-' + this.currentProductSlideIndex * 100 + '%)',
      }
    },
  },
  mounted() {
    this.$el.addEventListener('touchstart', (e) => this.touchstart(e))
    this.$el.addEventListener('touchmove', (e) => this.touchmove(e))
    this.$el.addEventListener('touchend', () => this.touchend())
  },
  methods: {
    touchstart(event) {
      this.touch.startX = event.touches[0].clientX
      this.touch.endX = 0
    },
    touchmove(event) {
      this.touch.endX = event.touches[0].clientX
    },
    prevSlide() {
      this.$store.commit('business/prevProductSlide')
    },
    nextSlide() {
      this.$store.commit('business/nextProductSlide')
    },
    touchend() {
      if (
        !this.touch.endX ||
        Math.abs(this.touch.endX - this.touch.startX) < 20
      )
        return

      if (this.touch.endX < this.touch.startX)
        this.$store.commit('business/nextProductSlide')
      else this.$store.commit('business/prevProductSlide')
    },
  },
}
</script>

<style  module scoped>
#slider__homebase__a {
  width: 100vw;
  overflow: hidden;
  background: white;
}
#slider__a__slides {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  padding: 1.5rem;
  padding-top: 2.5rem;
  background: rgb(28, 28, 28);
}
.slider__a__slide__image {
  width: 100%;
  height: auto;
  filter: grayscale(1);
  transform: scale(0.8);
  transition: all 0.8s ease;
  cursor: pointer;
}
.slider__a__slide__image:hover {
  filter: grayscale(0);
  transform: scale(1.2);
}

.slider__a__slide__description {
  background: white;
  width: 100%;
  min-height: 300px;

  text-align: center;
  padding: 2rem;
  min-height: 70vh;
}

.btnPreSlide {
  position: absolute;
  z-index: 4;
  left: 1rem;
  background: none;
  border: none;
  outline: 0;
  fill: #4a4a4a;
  cursor: pointer;
}
.btnNextSlide {
  position: absolute;
  z-index: 4;
  right: 1rem;
  background: none;
  border: none;
  outline: 0;
  fill: #4a4a4a;
  cursor: pointer;
}
.btnPreSlide:hover,
.btnNextSlide:hover {
  transition: all 0.5s ease;
  fill: rgb(214, 187, 146) !important;
}
@media screen and (min-width: 300px) and (max-width: 350px) {
  .slider__a__slide__description {
    background: rgb(28, 28, 28);
    width: 100%;

    text-align: center;
    padding: 1.5rem;
  }
}
@media screen and (min-width: 600px) and (max-width: 1200px) {
  #slider__a__slides {
    padding: 1rem;
  }
  .slider__a__slide__description {
    padding: 2rem;
  }
  .btnPreSlide {
    left: 1rem;
  }
  .btnNextSlide {
    right: 1rem;
  }
}
@media screen and (min-width: 1200px) {
  #slider__a__slides {
    padding: 3rem;
  }
  .slider__a__slide__description {
    padding: 5rem;
    height: 40vh;
  }
  .btnPreSlide {
    left: 3rem;
  }
  .btnNextSlide {
    right: 3rem;
  }
}
</style>
