<template>
  <div id="product__preview" class="w-full">
    <div id="preview__wrapper">
      <div class="flex flex-row justify-center w-full h-full">
        <button
          v-if="selected == 1"
          class="btn__product__preview btn-left animate"
          @click="front = !front"
        >
          <svg
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
                :src="require(`~/assets/images/product-page/clip_raw.png`)"
              />
              <img
                v-if="uploadBack.image"
                id="upload-front"
                :src="uploadBack.image"
                alt=""
              />
            </div>
            <div class="flip__box__back">
              <img
                class="furniture__img"
                :src="require(`~/assets/images/product-page/clip_raw-back.png`)"
              />
              <img
                v-if="uploadFront.image"
                id="upload-back"
                :src="uploadFront.image"
                alt=""
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
          v-if="selected == 1"
          class="btn__product__preview btn-right animate"
          @click="front = !front"
        >
          <svg
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

    <input
      id="btn-upload"
      ref="uploadImg"
      type="file"
      accept="image/*"
      @change="onFileChange($event)"
    />

    <label
      class="button-upload text-center py-2 lg:py-4 px-4 lg:px-8"
      for="btn-upload"
    >
      Motiv auswählen
    </label>
  </div>
</template>

<script>
import LinkDefault from '../LinkDefault.vue'

export default {
  name: 'ProductPreviewCreatorHome',
  components: { LinkDefault },
  props: {
    currentPreview: {
      type: Number,
      required: true,
      default: () => 1,
    },
    uploadFront: {
      type: Object,
      require: false,
    },
    uploadBack: {
      type: Object,
      required: false,
    },
  },
  data: () => {
    return {
      front: false,
      userUpload: 'null',
      uploadBtn: null,
      productSide: 0,
    }
  },
  computed: {
    selected() {
      return this.currentPreview
    },
  },
  mounted() {
    if (document.getElementById('btn-upload')) {
      this.uploadBtn = document.getElementById('btn-upload')
    }
  },
  methods: {

    onFileChange(e) {
      let item
      if (this.front) {
        item = this.uploadFront
      } else {
        item = this.uploadBack
      }
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(item, files[0])
    },
    createImage(item, file) {
      // const image = new Image()
      const reader = new FileReader()

      reader.onload = (e) => {
        item.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage(item) {
      item.image = false
    },
  },
}
</script>

<style  scoped>
#degree {
  position: relative;
  top: -1.8rem;
}
#preview__wrapper {
  width: 100%;
  height: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#product__preview {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 50vh;
  width: 100%;
}
@media only screen and (max-width: 400px) {
  #upload-front {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-48%, -29%);
    border-radius: 50%;
    width: 150px;
    height: 70px;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  #upload-back {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-52%, -29%);
    border-radius: 50%;
    width: 150px;
    height: 70px;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  .furniture__img {
    width: 240px;
  }
}
@media only screen and (min-width: 400px) {
  #upload-front {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-48%, -29%);
    border-radius: 50%;
    width: 186px;
    height: 90px;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  #upload-back {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-52%, -29%);
    border-radius: 50%;
    width: 186px;
    height: 90px;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .furniture__img {
    width: 300px;
  }
}
@media only screen and (min-width: 1000px) {
  #preview__wrapper {
    width: 400px;
    height: 100%;
    max-width: 500px;
  }
  #product__preview {
    max-width: fit-content;
  }
  .btn__upload {
    width: 100%;
  }
  #upload-front {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-48%, -30%);
    border-radius: 50%;
    width: 198px;
    height: 96px;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  #upload-back {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-52%, -30%);
    border-radius: 50%;
    width: 198px;
    height: 96px;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  .furniture__img {
    width: 320px;
    height: auto;
    object-fit: contain;
  }
}
@media only screen and (min-width: 1200px) {
  #degree {
    top: -2rem;
  }
}
img[src=''] {
  display: none !important;
}
input {
  display: none;
}
button:disabled,
button[disabled] {
  border-color: gray;
  color: gray;
}
.flip__box {
  background-color: transparent;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  animation: pulse 1.5s ease;
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
.flip__box__back {
  transform: rotateY(180deg);
}

.button-upload {
  color: white;
  border: 2px solid white;
  font-weight: 500;
  transition: 0.4s;
  text-transform: uppercase;
  letter-spacing: 3.2pt;
  width: 100% !important;
  cursor: pointer;
}

.button-upload:hover {
  background: white;
  color: black;
}
.button-upload:disabled:hover {
  background: none;
  color: gray;
}
</style>
