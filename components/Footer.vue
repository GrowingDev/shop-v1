<template>
  <footer
    class="
      w-full
      bg-white
      p-4
      py-8
      xl:px-32
      flex flex-col
      lg:flex-row lg:justify-between
      uppercase
      text-black
    "
  >
    <div class="p-4 justify-self-start">
      <h2 class="font-bold text-md">Remichel GmbH</h2>
      <ul>
        <li>
          <p class="text-sm">pfarrplatz 4</p>
        </li>
        <li>
          <p class="text-sm">4040 Linz</p>
        </li>
        <li>
          <p class="text-sm">+43 (0) 664 7863 455</p>
        </li>
        <li>
          <p class="text-sm">office@remichelgroup.at</p>
        </li>
      </ul>
    </div>
    <div class="flex flex-col lg:flex-row">
      <div class="p-4 justify-self-end xl:mr-20 flex flex-col">
        <h2 class="font-bold text-md">sitemap</h2>

        <NuxtLink to="/" class="text-sm">die marke</NuxtLink>

        <NuxtLink to="/" class="text-sm">faq</NuxtLink>

        <NuxtLink to="/" class="text-sm">kontakt</NuxtLink>
      </div>
      <div class="p-4 pr-0 justify-self-end flex flex-col">
        <h2 class="font-bold text-md">rechtliches</h2>

        <NuxtLink to="/" class="text-sm">datenschutz</NuxtLink>

        <NuxtLink to="/" class="text-sm">impressum</NuxtLink>

        <NuxtLink to="/" class="text-sm">agb</NuxtLink>
      </div>
    </div>
  </footer>
</template>
<style scoped>
h2 {
  color: black;
  letter-spacing: 1.4pt;
  margin-right: 10px;
}
li {
  height: fit-content;
}
a:hover {
  transition: ease all 0.3s;

  padding-left: 5px;
}
</style>
