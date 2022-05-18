<template>
  <div>
    <section id="video-container" class="flex flex-col justify-center">
      <video class="w-screen" loop autoPlay muted playsInline preload="true">
        <source src="~/assets/media/Intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
    <section
      class="
        container
        px-4
        mx-auto
        w-full
        md:min-h-screen
        flex flex-col
        lg:flex-row lg:py-16
        xl:py-32 xl:px-20
      "
    >
      <div
        class="
          flex-1 flex-shrink flex flex-col
          justify-center
          items-center
          lg:items-start
        "
      >
        <img
          class="object-contain lg:h-auto"
          id="product-image-home"
          src="~/assets/images/Product.png"
          alt=""
        />
      </div>
      <div
        class="
          flex-2
          md:flex-1
          flex-grow
          text-justify
          flex flex-col
          justify-center
          items-center
          pb-16
          lg:pb-0 lg:items-start
        "
      >
        <div class="w-full flex flex-row justify-center lg:justify-start">
          <heading-default firstWord="cash" secondWord="clip" />
        </div>

        <div
          class="
            max-w-lg
            w-full
            flex flex-row
            justify-center
            text-justify
            lg:justify-start
          "
        >
          <p class="text-white text-md md:text-lg md:leading-7 lg:leading-8">
            Der in Österreich produzierte RCC ist eine neue Interpretation einer
            Geldscheinklammer für den modernen Menschen von heute!
          </p>
        </div>
      </div>
    </section>

    <section
      v-observe-visibility="removeGrayScale"
      id="section-firefighter"
      class="h-screen w-full flex flex-col justify-end grayscale"
    >
      <div class="md:container w-full lg:mx-auto md:p-8 lg:py-16 xl:px-20">
        <div
          id="firefighter-card"
          class="w-full p-4 py-8 md:p-8 bg-black/70 relative flex flex-col"
        >
          <div
            class="
              w-full
              flex flex-row
              justify-center
              md:justify-start
              max-h-fit
            "
          >
            <heading-default firstWord="for" secondWord="firefighters" />
          </div>

          <p
            class="
              text-white text-md
              md:text-lg md:leading-7
              lg:leading-8
              text-justify
            "
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <div class="w-full flex flex-row justify-center md:justify-start">
            <link-default
              route="/collection/Firefighter"
              title="Kollektion erkunden"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      class="
        container
        py-16
        px-4
        mx-auto
        w-full
        md:min-h-screen
        flex flex-col
        justify-center
        lg:py-16
        xl:py-32 xl:px-20
      "
    >
      <div
        class="
          flex flex-col
          justify-center
          align-middle
          items-center
          pb-4
          md:pb-0
          lg:pb-16
          md:text-center
        "
      >
        <div class="w-full flex flex-row justify-center">
          <heading-default firstWord="for" secondWord="creators" />
        </div>
        <div class="max-w-lg w-full flex flex-row justify-center text-justify">
          <p class="text-white text-md md:text-lg md:leading-7 lg:leading-8">
            Der in Österreich produzierte RCC ist eine neue Interpretation einer
            Geldscheinklammer für den modernen Menschen von heute!
          </p>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center">
        <product-preview-creator-home />
      </div>
    </section>
    <section
      class="
        w-full
        md:min-h-screen
        bg-white
        md:flex
        flex-col
        justify-center
        items-center
        p-4
        py-16
        xl:py-32 xl:px-20
        lg:flex-row
      "
    >
      <div class="container mx-auto flex flex-col justify-center items-center">
        <div
          class="
            flex flex-col
            justify-start
            items-center
            flex-1
            max-w-xl
            lg:max-w-3xl
          "
        >
          <heading-default firstWord="die" secondWord="marke" dark="true" />

          <p
            class="
              text-primary-dark text-md
              md:text-lg md:leading-7
              lg:leading-8
              text-justify
            "
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.<br />
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <link-default route="/" title="mehr erfahren" dark="true" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeadingDefault from '~/components/HeadingDefault.vue'
import LinkDefault from '~/components/LinkDefault.vue'
import ProductPreviewCreatorHome from '~/components/product-page/ProductPreviewCreatorHome.vue'

export default {
  components: {
    LinkDefault,
    HeadingDefault,
    ProductPreviewCreatorHome,
  },
  name: 'index',
  layout: 'default',
  methods: {
    removeGrayScale(isVisible, entry) {
      if (isVisible) {
        // trigger animation for the element
        let domElement = entry.target

        domElement.classList.remove('grayscale')
        console.log(domElement)
      }
    },
  },
  head: {
    title: `REMICHEL | HOME`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },
}
</script>

<style scoped>
#section-firefighter {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('~/assets/images/firefighter-mobile.png');
  transition: 1.5s;
}

#section-creator {
  background: transparent;
}

@media screen and (min-width: 1000px) {
  #section-firefighter {
    background-position: center;
    background-image: url('~/assets/images/firefighter.jpeg');
    background-size: cover;
  }

  #firefighter-card {
    width: max-content;
    max-width: 700px;
  }
}
</style>
