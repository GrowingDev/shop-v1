<template>
  <div class="cart-item w-full">
    <button class="cart-item-delete" @click="removeCartItem()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        viewBox="0 0 24 24"
        width="30"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
        />
      </svg>
    </button>
    <div class="cart-item-title">
      <product-title firstWord="№" :secondWord="item.id" />
    </div>

    <div class="cart-item-front">
      <img
        v-if="item.productId !== '10000'"
        class="cart-item-furniture"
        :src="`https://api.andreasbenz.org/images/10001-front.png`"
        alt="logo"
      />
      <img
        v-else
        class="cart-item-furniture"
        :src="require(`~/assets/images/product-page/clip_raw.png`)"
        alt="logo"
      />
    </div>
    <div class="cart-item-back">
      <img
        v-if="item.productId !== '10000'"
        class="cart-item-furniture"
        :src="`https://api.andreasbenz.org/images/10001-back.png`"
        alt="logo"
      />
      <img
        v-else
        class="cart-item-furniture"
        :src="require(`~/assets/images/product-page/clip_raw-back.png`)"
        alt="logo"
      />
    </div>
    <p id="price-label" class="font-semibold">UVP:</p>
    <p class="cart-item-price">{{ item.price + '€' }}</p>
    <div class="cart-item-counter">
      <button @click="decreaseAmount">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 13H5v-2h14v2z" />
        </svg>
      </button>
      {{ item.amount }}
      <button @click="increaseAmount">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
    </div>
    <p id="total-label" class="font-semibold">GESAMT:</p>
    <p class="cart-item-total">{{ total + '€' }}</p>
  </div>
</template>

<script>
import ProductTitle from '@/components/cart/ProductTitle.vue'

export default {
  name: 'CartItem',
  components: {
    ProductTitle,
  },
  props: {
    item: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  mounted() {
    this.uploadFront.image = this.$store.state.uploadFront.image
    this.uploadBack.image = this.$store.state.uploadBack.image
  },
  data() {
    return {
      uploadFront: {
        image: null,
      },
      uploadBack: {
        image: null,
      },
    }
  },
  computed: {
    total() {
      return this.item.amount * this.item.price
    },
  },
  methods: {
    increaseAmount() {
      this.$store.commit('increaseCartItem', this.item.id)
    },
    decreaseAmount() {
      if (this.item.amount !== 1) {
        this.$store.commit('decreaseCartItem', this.item.id)
      }
    },
    removeCartItem() {
      this.$store.commit('removeCartItem', this.item.id)
    },
  },
}
</script>

<style  scoped>
button {
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  fill: gray;
  transition: 0.4s;
}
button:hover {
  fill: white;
}

.upload-image-front {
  transform: translate(-48%, -29%);
  z-index: 2;
  border-radius: 50%;
  width: 103px;
  height: 48px;
}
.upload-image-back {
  z-index: 2;
  border-radius: 50%;
  width: 103px;
  height: 48px;
}
@media screen and (max-width: 1024px) {
  .cart-item {
    padding: 1rem;
    display: grid;
    grid-template-rows: auto auto auto auto auto auto;
    grid-template-columns: 30px auto auto auto 30px;
    grid-template-areas:
      'left title title title right'
      '. front front front .'
      '. back back back .'
      'amount amount amount amount amount'
      'middleleft middleleft . price price'
      'totalleft totalleft . total total';

    justify-items: center;
    color: white;
  }
  #price-label {
    grid-area: middleleft;
    justify-self: start;
    letter-spacing: 3.2pt;
  }
  #total-label {
    grid-area: totalleft;
    justify-self: start;
    letter-spacing: 3.2pt;
  }
  .cart-item-delete {
    grid-area: right;
  }
  .cart-item-price {
    letter-spacing: 3.2pt;
    justify-self: end;
  }
  .cart-item-total {
    letter-spacing: 3.2pt;
    justify-self: end;
  }
  .cart-item {
    background: #2d2d2d;
    margin-bottom: 1rem;
  }
}
@media screen and (min-width: 1024px) {
  .cart-item:nth-child(odd) {
    background: #2d2d2d;
  }
  .cart-item {
    display: grid;
    grid-template-rows: 140px;
    grid-template-columns: 100px 200px 200px 200px 1fr 1fr 1fr;
    grid-template-areas: 'delete title front back  price amount total';
    justify-items: center;
    color: white;
  }
  .cart-item-delete {
    grid-area: delete;
  }
  #price-label {
    display: none;
  }
  #total-label {
    display: none;
  }
}

.cart-item-furniture {
  object-fit: scale-down;
  height: 100%;
  width: auto;
  margin: auto;
  width: 240px;
}

.cart-item-front {
  grid-area: front;
  width: 100%;
}

.cart-item-back {
  grid-area: back;
  position: relative;
}

.cart-item-title {
  grid-area: title;
  justify-self: center;
  align-self: center;
}

.cart-item-price {
  grid-area: price;
  align-self: center;
  font-size: 16px;
  font-weight: 500;
}
.cart-item-counter {
  width: 120px;
  display: flex;
  flex-direction: row;
  grid-area: amount;
  justify-content: space-evenly;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
}
.cart-item-total {
  align-self: center;
  grid-area: total;
  font-size: 16px;
  font-weight: 500;
}
</style>
