<template>
  <div class="text-box" :style="zIndex">
    <Title v-if="show" :title="content.title" :black="true" />
    <hr class="divider" />
    <p>{{ content.description01 }}</p>

    <p style="margin-top: 15px">{{ content.description02 }}</p>
    <a class="button__black--full" href="https://registrierung.netlify.app/"
      >jetzt registrieren</a
    >
  </div>
</template>

<script>
import Title from '@/components/title.vue'
export default {
  name: 'TextBox',
  components: {
    Title,
  },
  props: {
    default: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    content: {
      type: Object,
      required: true,
      default: () => {},
    },
    index: {
      type: Number,
      required: true,
      default: () => 0,
    },
  },
  data: () => {
    return {
      show: true,
    }
  },
  computed: {
    zIndex() {
      return `z-index: ${this.index}`
    },
  },
}
</script>

<style scoped>
.text-box {
  width: 100%;
  left: 0;
  right: 0;
  color: rgb(28, 28, 28);
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p {
  padding-left: 1rem;
  padding-right: 1rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1.2s ease 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.divider {
  width: 15%;
  margin: 1.2rem;
  border-top: 1px solid rgb(214, 187, 146);
  border-color: rgb(214, 187, 146);
}
@media screen and (min-width: 800px) {
  p {
    width: 80%;
    font-size: 1.2rem;
  }
}
@media screen and (min-width: 1000px) {
  p {
    width: 60%;
    font-size: 1.3rem !important;
  }
  .divider {
    width: 50px;
    margin: 2rem;
  }
}

.button__black--full {
  outline: 0;
  cursor: pointer;
  transition: all 0.5s ease;
  background: rgb(28, 28, 28);
  color: white;
  padding: 8px 11px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.2rem;
  max-width: 350px !important;
  margin-right: 25px;
}
.button__black--full:hover {
  background: rgb(28, 28, 28);
  color: white;
}
</style>
