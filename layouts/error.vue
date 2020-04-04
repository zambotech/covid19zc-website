<template>
  <div class="maintenance-container flex flex-col justify-center items-center text-center">
    <img class="maintenance-image" src="~/assets/images/maintenance.svg">
    <h1 class="font-bold text-purple-900 text-2xl md:text-3xl md">This page is under maintenance.</h1>
    <h2 class="text-primary text-sm md:text-lg">Just come back later for more updates.</h2>
    <nuxt-link to="/" class="underline text-primary text-sm md:text-lg">Go to home</nuxt-link>
  </div>
</template>

<style scoped>
.maintenance-container {
  height: 80vh;
}

.maintenance-image {
  width: 40%;
  height: auto;
}

@media (max-width: 768px) {
  .maintenance-image {
    width: 100%;
    height: auto;
  } 
}
</style>