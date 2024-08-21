<template>
  <section class="bg-white">
    <h2 class="text-3xl text-primary lg:text-4xl font-semibold mb-6">Offers To Inspire You</h2>
    <div class="flex flex-col md:flex-row justify-center gap-8">
      <!-- Card with Background and Gradient Overlay -->
      <NuxtLink to="/packages">
      <div class="group rounded-2xl overflow-hidden shadow-lg relative">
        <!-- Background Image -->
        <img src="https://ccdstest.b-cdn.net/Jaipur%20Darshan/4.webp" alt="South Bali" class="object-cover w-full h-full">
        <!-- Gradient Overlay on Hover -->
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <!-- Text Content -->
        <div class="absolute inset-0 p-2 lg:p-6 flex flex-col justify-between">
          <div>
            <h3 class="lg:text-2xl font-semibold text-white">Jaipur Sightseen With Buses</h3>
            <p class="text-white text-xs lg:text-base">Travel hassle-free within Bali, visit popular attractions, or do water activities!</p>
          </div>
          <NuxtLink to="/packages" class="opacity-90 border lg:w-1/2 w-full text-sm md:text-base text-center mt-4 bg-white text-primary font-bold py-1 lg:py-2 px-2 rounded-full hover:bg-primary hover:text-secondary transition-colors">
            See All Bus Tours Packages
          </NuxtLink>
        </div>
      </div></NuxtLink>

      <!-- Similar setup for the second card -->
       <NuxtLink to="/packages2">
      <div class="group rounded-2xl overflow-hidden shadow-lg relative">
        <img src="https://ccdstest.b-cdn.net/Jaipur%20Darshan/3.webp" alt="Beyond the City" class="object-cover w-full h-full">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div class="absolute inset-0 p-2 lg:p-6 flex flex-col justify-between">
          <div>
            <h3 class="lg:text-2xl font-semibold text-white">Jaipur Sightseen With Cars</h3>
            <p class="text-white text-xs lg:text-base">Discover the wonders that lie outside the walls of Da Nang with these exciting tours of surrounding areas.</p>
          </div>
          <NuxtLink to="/packages2" class="border lg:w-1/2 w-full text-sm md:text-base text-center mt-4 bg-white text-primary font-bold py-1 lg:py-2 px-2 rounded-full hover:bg-primary hover:text-secondary transition-colors">
            See All Car Tours Packages
          </NuxtLink>
        </div>
      </div></NuxtLink>
    </div>
  </section>
</template>

<style scoped>
/* Additional styling for responsiveness */
.rounded-2xl {
  max-width: 100%;
}
</style>
