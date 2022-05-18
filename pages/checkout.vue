<template>
  <div class="w-full min-h-screen bg-white">
    <div
      class="
        container
        mx-auto
        w-full
        p-4
        xl:px-20
        flex flex-row
        justify-center
        pt-40
      "
    >
      <heading-default firstWord="check" secondWord="out" dark="true" />
    </div>
    <div
      class="
        container
        mx-auto
        p-4
        xl:px-20
        flex flex-col
        lg:flex-row lg:gap-x-8
        justify-center
      "
    >
      <div class="flex-1 flex-col lg:max-w-lg">
        <h2 class="text-lg uppercase font-bold mt-8">Rechnungsadresse</h2>
        <div class="flex flex-col">
          <label>Vorname*</label>
          <input
            class="border-black border-2 p-2"
            type="text"
            placeholder="Vorname"
          />
        </div>
        <div class="flex flex-col">
          <label>Nachname*</label>
          <input
            class="border-black border-2 p-2"
            type="text"
            placeholder="Nachname"
          />
        </div>
        <div class="flex flex-row w-full justify-between">
          <div class="flex flex-col flex-4 grow w-full pr-4">
            <label>Straße*</label>
            <input
              class="border-black border-2 p-2"
              type="text"
              placeholder="Straße"
            />
          </div>
          <div class="flex flex-col flex-1 shrink items-end">
            <div class="flex flex-col">
              <label>Nr*</label>
              <input
                id="street-number"
                class="border-black border-2 p-2"
                type="text"
                placeholder="Nr"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <label>Wohnung, Einheit, etc.</label>
          <input
            class="border-black border-2 p-2"
            type="text"
            placeholder="Vorname"
          />
        </div>
        <div class="flex flex-col">
          <label>Stadt*</label>
          <input
            class="border-black border-2 p-2"
            type="text"
            placeholder="Stadt"
          />
        </div>
        <div class="flex flex-col">
          <label>Postleitzahl*</label>
          <input
            class="border-black border-2 p-2"
            type="text"
            placeholder="Postleitzahl"
          />
        </div>
        <div class="flex flex-row items-center mt-4">
          <div class="form-check flex flex-row items-center">
            <input
              class="
                form-check-input
                appearance-none
                h-5
                w-5
                border-2 border-black
                bg-white
                checked:bg-black checked:border-black
                focus:outline-none
                transition
                duration-200
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                pr-2
                cursor-pointer
              "
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
              v-model="checked"
            />
            <label
              class="
                form-check-label
                inline-block
                text-vlack
                pl-2
                cursor-pointer
              "
              for="flexCheckIndeterminate"
            >
              Abweichende Lieferadresse
            </label>
          </div>
        </div>
        <div class="flex-1 flex flex-col lg:max-w-lg">
          <h2 class="text-lg uppercase font-bold mt-8">Zahlungsart</h2>

          <div class="flex flex-col pt-2 lg:pt-8">
            <div>
              <input
                type="radio"
                id="rechnung"
                value="Rechnung"
                v-model="payment"
                class="
                  form-check-input
                  appearance-none
                  h-5
                  w-5
                  border-2 border-black
                  bg-white
                  checked:bg-black checked:border-black
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  pr-2
                  cursor-pointer
                "
              />

              <label for="rechnung" class="pl-2 cursor-pointer">Rechnung</label>
            </div>
            <div class="py-4">
              <input
                type="radio"
                id="paypal"
                value="Paypal"
                v-model="payment"
                class="
                  form-check-input
                  appearance-none
                  h-5
                  w-5
                  border-2 border-black
                  bg-white
                  checked:bg-black checked:border-black
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  pr-2
                  cursor-pointer
                "
              />
              <label for="paypal" class="pl-2 cursor-pointer">Paypal</label>
            </div>
          </div>
        </div>
      </div>
      <div v-if="checked" class="flex-1 flex-col lg:max-w-lg">
        <h2 class="text-lg uppercase font-bold mt-8">Lieferadresse</h2>
        <div class="flex flex-col">
          <label>Vorname*</label>
          <input
            class="border-black border-2 p-2"
            type="text"
            placeholder="Vorname"
          />
        </div>
        <div class="flex flex-col">
          <label>Nachname*</label>
          <input
            class="border-black border-2 p-2"
            type="text"
            placeholder="Nachname"
          />
        </div>
        <div class="flex flex-row w-full justify-between">
          <div class="flex flex-col flex-4 grow w-full pr-4">
            <label>Straße*</label>
            <input
              class="border-black border-2 p-2"
              type="text"
              placeholder="Straße"
            />
          </div>
          <div class="flex flex-col flex-1 shrink items-end">
            <div class="flex flex-col">
              <label>Nr*</label>
              <input
                id="street-number"
                class="border-black border-2 p-2"
                type="text"
                placeholder="Nr"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <label>Wohnung, Einheit, etc.</label>
          <input
            class="border-black border-2 p-2"
            type="text"
            placeholder="Vorname"
          />
        </div>
        <div class="flex flex-col">
          <label>Stadt*</label>
          <input
            class="border-black border-2 p-2"
            type="text"
            placeholder="Stadt"
          />
        </div>
        <div class="flex flex-col">
          <label>Postleitzahl*</label>
          <input
            class="border-black border-2 p-2"
            type="text"
            placeholder="Postleitzahl"
          />
        </div>
      </div>
    </div>
    <div
      class="
        container
        mx-auto
        px-4
        lg:px-0
        pb-8
        flex flex-col
        justify-center
        lg:max-w-lg
      "
    >
      <button-default title="Bestellung aufgeben" :dark="true" />
      <button-default title="zurück" :func="navigateBack" :dark="true" />
    </div>
  </div>
</template>
<script>
import ButtonDefault from '~/components/ButtonDefault.vue'
export default {
  name: 'Chekcout',
  data() {
    return {
      checked: false,
      payment: null,
    }
  },
  mounted() {
    const checkbox = document.getElementById('flexCheckIndeterminate')
    checkbox.indeterminate = true
    const paypal = document.getElementById('paypal')
    paypal.indeterminate = true
    const rechnung = document.getElementById('rechnung')
    rechnung.indeterminate = true
  },
  components: { ButtonDefault },
  methods: {
    navigateBack() {
      this.$router.back(-1)
    },
  },
}
</script>
<style scoped>
h2 {
  letter-spacing: 3.2pt;
}
label {
  padding-top: 0.5rem;
  padding-bottom: 4px;
  letter-spacing: 1.6pt;
}
#street-number {
  max-width: 80px;
}
input {
  cursor: pointer;
}
</style>
