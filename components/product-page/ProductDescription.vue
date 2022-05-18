<template>
  <div
    id="description-wrapper"
    class="w-full text-center flex flex-col items-start text-white py-8 md:py-4"
  >
    <heading-default firstWord="set" :secondWord="`№${product.id}`" xl="true" />
    <div class="w-full flex flex-row justify-start">
      <div class="flex flex-col items-start w-full flex-1 shrink font-bold">
        <div class="detail__group">
          <p>Collection:</p>
        </div>
        <div class="detail__group">
          <p>Furniture:</p>
        </div>
        <div class="detail__group">
          <p>Inlay:</p>
        </div>
        <div class="detail__group">
          <p>Etui:</p>
        </div>
        <div class="detail__group">
          <p>box:</p>
        </div>
        <div class="detail__group">
          <p>Maße Clip:</p>
        </div>
        <div class="detail__group">
          <p>Gewicht Clip:</p>
        </div>
        <div class="detail__group">
          <p>UVP:</p>
        </div>
      </div>
      <div class="flex flex-col items-start w-full flex-1 ">
        <div class="detail__group">
          <p class="capitalize">{{ product.collection }}</p>
        </div>
        <div class="detail__group">
          <p class="capitalize">{{ product.furniture }}</p>
        </div>
        <div class="detail__group">
          <p class="capitalize">{{ product.inlay }}</p>
        </div>
        <div class="detail__group">
          <p class="capitalize">{{ product.etui }}</p>
        </div>
        <div class="detail__group">
          <p class="capitalize">{{ product.package }}</p>
        </div>
        <div class="detail__group">
          <p class="capitalize">{{ product.size }}</p>
        </div>
        <div class="detail__group">
          <p class="capitalize">{{ product.weight }}</p>
        </div>
        <div class="detail__group">
          <p class="capitalize">{{ product.price + '€' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadingDefault from '../HeadingDefault.vue'

export default {
  name: 'ProdutDescription',
  components: {
    HeadingDefault,
  },

  methods: {},
  props: {
    product: {
      type: Object,
      reqired: true,
      default: () => {
        return {
          id: 8,
          productId: 1008,
          title: 'set Nº1',
          collection: 'Firefighter',
          furniture: 'Schwarz chrom',
          inlay: 'black',
          etui: 'alpaca leder',
          package: 'alpaca leder',
          size: '90mm/42mm',
          weight: '700gramm',
          price: 300,
        }
      },
    },
  },
}
</script>

<style  scoped>

.detail__group {
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  letter-spacing: 1.6pt;
}
#product__description {
  width: 100%;
  padding: 1rem;
  padding-top: 2rem;
  color: white;

  text-transform: uppercase;
}
#product-group {
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 50px;
  font-size: 1rem;
}

#description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}
#details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
#details > strong {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}
@media screen and (min-width: 1000px) {
  #product__description {
    width: 50%;
    text-align: left;
  }
  #details {
    text-align: left;
  }
}
</style>
