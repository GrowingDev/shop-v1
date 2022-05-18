<template>
  <div id="product__preview">
    <div id="preview__wrapper">
      <div class="flex flex-row justify-center w-full h-full">
        <button
          class="btn__product__preview btn-left animate"
          @click="front = !front"
        >
          <svg
            v-if="selected == 1"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"
            />
          </svg>
        </button>
        <div v-if="selected == 1" class="flip__box">
          <div class="flip__box__inner" :class="{ rotateForward: front }">
            <div class="flip__box__front">
              <img
                class="furniture__img"
                src="http://api.andreasbenz.org/images/10001-front.png"
              />
            </div>
            <div class="flip__box__back">
              <img
                class="furniture__img"
                src="http://api.andreasbenz.org/images/10001-back.png"
              />
            </div>
          </div>
        </div>
        <img
          v-if="selected == 2"
          class="animate"
          :src="require(`~/assets/images/product-page/clip_package.png`)"
        />
        <img
          v-if="selected == 0"
          class="animate"
          :src="require(`~/assets/images/product-page/clip_etui.png`)"
        />
        <button
          class="btn__product__preview btn-right animate"
          @click="front = !front"
        >
          <svg
            v-if="selected == 1"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"
            />
          </svg>
        </button>
      </div>
      <img
        class="animate"
        v-if="selected == 1"
        id="degree"
        src="~/assets/icons/360.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPreview',
  props: {
    currentPreview: {
      type: Number,
      required: true,
      default: () => 1,
    },
    productImages: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data: () => {
    return {
      front: false,
    }
  },
  computed: {
    selected() {
      return this.currentPreview
    },
  },
}
</script>

<style scoped>
#product__preview {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 50vh;
  width: 100%;
}
#preview__wrapper {
  width: 100%;
  height: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#degree {
  position: relative;
  top: -1.8rem;
}

.furniture__img {
  padding: 1rem;
}

.btn__product__preview {
  transition: all 0.4s;
  border: none;
  background: none;
  outline: 0;
  position: relative;
  fill: gray;
  padding: 0;
  cursor: pointer;
}
.btn__product__preview:hover {
  fill: white;
}
.flip__box {
  background-color: transparent;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  animation: pulse 1.5s ease;
}
/* This container is needed to position the front and back side */
.flip__box__inner {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.rotateForward {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip__box__front,
.flip__box__back {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip__box__front > img {
  width: 100%;
  max-width: 350px;
}
.flip__box__back {
  transform: rotateY(180deg);
}
/* Style the back side */
.flip__box__back > img {
  width: 100%;
  max-width: 350px;
}
.default__img {
  max-width: 350px;
  animation: pulse 1.5s ease;
}

@media screen and (min-width: 500px) {
  #product__preview {
    width: 60vw;
    height: 40vh;
    max-width: 400px;
    min-height: 350px;
  }
}

@media screen and (min-width: 1000px) {
  #preview__wrapper {
    width: 400px;
    height: 100%;
    max-width: 500px;
  }
  #product__preview {
    width: 300vw;
    max-width: fit-content;
    min-height: 400px;
  }
}
</style>
