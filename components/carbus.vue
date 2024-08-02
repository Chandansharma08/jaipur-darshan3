<template>
  <section class=" px-4 md:px-8 bg-white">
    <h2 class="text-3xl font-bold mb-12">Offers To Inspire You</h2>
    <div class="flex flex-wrap justify-center gap-8">
      <!-- Card with Background and Gradient Overlay -->
      <div class="rounded-2xl overflow-hidden shadow-lg relative">
        <!-- Background Image -->
        <img src="https://via.placeholder.com/500x250" alt="South Bali" class="w-full object-cover">
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-[#11a191] via-transparent to-green-200 opacity-70"></div>
        <!-- Text Content -->
        <div class="absolute inset-0 p-6 flex flex-col justify-between">
          <div>
            <h3 class="text-2xl font-semibold text-white">South Bali (Kuta, Canggu, Uluwatu, Jimbaran)</h3>
            <p class="text-white">Travel hassle-free within Bali, visit popular attractions, or do water activities!</p>
          </div>
          <NuxtLink to="/south-bali-activities" class="w-1/3 text-center mt-4 bg-white text-[#11a191] font-bold py-2 px-2 rounded-full hover:bg-[#11a191] hover:text-white transition-colors">
            See All Activities
          </NuxtLink>
        </div>
      </div>

      <!-- Similar setup for the second card -->
      <div class="rounded-2xl overflow-hidden shadow-lg relative">
        <img src="https://via.placeholder.com/500x250" alt="Beyond the City" class="w-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-blue-900 via-transparent to-blue-200 opacity-70"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-between">
          <div>
            <h3 class="text-2xl font-semibold text-white">Beyond the City</h3>
            <p class="text-white">Discover the wonders that lie outside the walls of Da Nang with these exciting tours of surrounding areas.</p>
          </div>
          <NuxtLink to="/beyond-city-activities" class="w-1/3 text-center mt-4 bg-white text-[#11a191] font-bold py-2 px-2 rounded-full hover:bg-[#11a191] hover:text-white transition-colors">
            See All Activities
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional styling for responsiveness */
div.rounded-2xl {
  max-width: 100%;
}
</style>
