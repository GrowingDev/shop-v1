<template>
  <div :class="$style.title">
    <h1 :class="$style.firstWord">{{ words[0] }}</h1>
    <h1 v-if="black" :class="$style.secondWordBlack">{{ words[1] }}</h1>
    <h1 v-else :class="$style.secondWord">{{ words[1] }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    black: {
      type: Boolean,
      required: false,
    },
    title: {
      type: String,
      required: true,
      default: () => 'Test Title',
    },
  },
  computed: {
    words() {
      return this.title.split(' ')
    },
  },
}
</script>

<style module scoped>
.title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: rgb(214, 187, 146);

}
 h1 {
    font-size: 1.2rem;
  }
.secondWord {
  font-weight: 100;
  font-family: 'Montserrat', sans-serif;
  font-weight: light;
  color: white;
}
.secondWordBlack {
  font-weight: 100;
  font-family: 'Montserrat', sans-serif;
  font-weight: light;
  color:rgb(28, 28, 28);
}
@media screen and (min-width: 1000px) {

    .title >  h1 {
      font-size: 2rem !important;
    }

  .secondWord {
    font-weight: 400;
    color: white;
  }
  .secondWordBlack {
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    font-weight: light;
    color:  rgb(28, 28, 28);
  }
}
</style>
