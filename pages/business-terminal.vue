<template>
  <div id="homebase-container" @mousemove="cursor">
    <div id="cursor"><p>Click for Details</p></div>
    <slider-c />
    <showroom-index />
  </div>
</template>

<script>
import ShowroomIndex from '@/components/showroom/showroom-index.vue'
import SliderC from '@/components/sliders/business-terminal/slider-c/slider-c.vue'
export default {
  layout: 'layout-business-terminal',
  components: {
    ShowroomIndex,
    SliderC,
  },
  data: () => {
    return {
      mouse: null,
      isMobile: false,
    }
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
  head: {
    title: `REMICHEL | B2B-TERMINAL`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },
}
</script>

<style  scoped>
#homebase-container {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  background: rgb(28, 28, 28);
  overflow-x: hidden;
}
#homebase-parallax-container {
  background: #1c1c1c;
}
#homebase-header-container {
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
}
#homebase-header-title {
  text-transform: uppercase;
  color: white;
  font-size: 30px;
  margin-bottom: 25px;
}
img {
  width: 100%;
  height: auto;
}
video {
  width: 100vw;
  height: auto;
  background: #1c1c1c;
}
.button__white--full {
  outline: 0;
  cursor: pointer;
  transition: all 0.5s ease;
  background: white;
  color: rgb(28, 28, 28);
  padding: 8px 11px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.2rem;
  max-width: 350px !important;
  margin-right: 25px;
}
.button__white--full:hover {
  background: rgb(28, 28, 28);
  color: white;
}
</style>
