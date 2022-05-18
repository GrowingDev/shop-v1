<template>
  <button
    class="
      menu-link
      p-4
      pl-4
      lg:pl-8
      md:text-md
      uppercase
      flex flex-row
      items-center
      justify-between
    "
    @click="btnHandler(title)"
  >
    {{ title
    }}<svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'NavigationGroupOpener',
  props: {
    title: {
      type: String,
      required: false,
      default: () => '',
    },
    btnHandler: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.menu-link {
  transition: all ease 0.3s;
  color: white;
  fill: white;
}
.menu-link:hover {
  background: white;
  color: #1c1c1c;
  fill: #1c1c1c;
}
.menu-link:hover > svg {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateX(-25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
