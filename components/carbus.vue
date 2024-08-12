<template>
  <section class=" bg-white">
    <h2 class="text-3xl text-primary lg:text-4xl font-semibold mb-6">Offers To Inspire You</h2>
    <div class="flex flex-col md:flex-row justify-center gap-8">
      <!-- Card with Background and Gradient Overlay -->
      <div class="w-full  md:w-1/2 rounded-2xl overflow-hidden shadow-lg relative">
        <!-- Background Image -->
        <img src="https://via.placeholder.com/400x200" alt="South Bali" class="w-full h-full object-cover">
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-[#11a191] via-transparent to-green-200 opacity-70"></div>
        <!-- Text Content -->
        <div class="absolute inset-0 p-2 lg:p-6 flex flex-col justify-between">
          <div>
            <h3 class="lg:text-2xl font-semibold text-secondary">South Bali (Kuta, Canggu, Uluwatu, Jimbaran)</h3>
            <p class="text-secondary text-xs lg:text-base">Travel hassle-free within Bali, visit popular attractions, or do water activities!</p>
          </div>
          <NuxtLink to="/packages" class="lg:w-1/2 w-full text-sm md:text-base text-center mt-4 bg-white text-primary font-bold py-1 lg:py-2 px-2 rounded-full hover:bg-primary hover:text-secondary transition-colors">
            See All Activities
          </NuxtLink>
        </div>
      </div>

      <!-- Similar setup for the second card -->
      <div class="w-full  md:w-1/2 rounded-2xl overflow-hidden shadow-lg relative">
        <img src="https://via.placeholder.com/400x200" alt="Beyond the City" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-blue-900 via-transparent to-blue-200 opacity-70"></div>
        <div class="absolute inset-0 p-2 lg:p-6 flex flex-col justify-between">
          <div>
            <h3 class="lg:text-2xl font-semibold text-secondary">Beyond the City</h3>
            <p class="text-secondary text-xs lg:text-base">Discover the wonders that lie outside the walls of Da Nang with these exciting tours of surrounding areas.</p>
          </div>
          <NuxtLink to="/packages2" class="lg:w-1/2 w-full text-sm md:text-base text-center mt-4 bg-white text-primary font-bold py-1 lg:py-2 px-2 rounded-full hover:bg-primary hover:text-secondary transition-colors">
            See All Activities
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional styling for responsiveness */
.rounded-2xl {
  max-width: 100%;
}
</style>
