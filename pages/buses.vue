<template>
  <div>
    <Navbar />
    <div class="bg-white pt-20">
      <div class="w-full text-black">
        <div class="relative">
          <img src="https://placehold.co/1600x400/png" alt="Banner Image" class="w-full h-auto" />
          <div class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32">
            <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">Bus Rental Service In Jaipur</h1>
            <div class="hidden lg:flex flex-row justify-center items-center gap-4 my-4">
              <nuxt-link to="/" class="text-base md:text-lg lg:text-xl xl:text-2xl">Home</nuxt-link>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right mt-1"><path d="m9 18 6-6-6-6"/></svg>
              <p class="text-base md:text-lg lg:text-xl xl:text-2xl">Bus Rental Service In Jaipur</p>
            </div>
          </div>
        </div>
        <div class="mt-10 px-4 md:px-10 lg:px-20">
          <h1 class="text-2xl">Bus Rental Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet cumque saepe illo mollitia repellat, placeat unde, nam quae molestias enim esse adipisci ipsa recusandae laudantium. Sit, at nesciunt. Esse maxime vel molestiae corporis eligendi possimus ut nesciunt eos nulla consequatur dolorum delectus repellendus suscipit neque labore, optio in amet.</p>
        </div>
        <div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10 px-4 md:px-10 lg:px-20 py-10">
          <div v-for="(bus, index) in buses" :key="index" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
            <img :src="bus.image" :alt="bus.name" class="w-full h-auto" />
            <h1 class="text-pink-600">{{ bus.name }}</h1>
            <div class="flex items-center">
              <p class="text-pink-600">INR</p>
              <p class="text-pink-600 text-2xl">{{ bus.price }}RS</p>
            </div>
            <hr class="my-2 w-1/2 h-0.5 bg-pink-600" />
            <p class="text-gray-600">Per Kilometer</p>
          </div>
        </div>
        <h1 class="font-bold text-2xl flex justify-center">Hire Taxi Rental Services</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 px-4 md:px-10 lg:px-20 py-10">
          <div v-for="(service, index) in services" :key="index" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
            <img :src="service.image" :alt="service.name" class="w-full h-auto" />
            <h1 class="text-pink-600 py-2">{{ service.name }}</h1>
            <div class="flex justify-center mb-2">
              <nuxt-link :to="service.link" class="border border-pink-600 bg-pink-600 flex items-center justify-between gap-4 px-5 rounded-full text-white">
                <span class="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-right">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                    <path d="m12 16 4-4-4-4" />
                  </svg>
                </span>
                <span>View More</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      buses: [
        { name: 'Toyota Etios', price: 11, image: 'https://placehold.co/200x150/png' },
        { name: 'Toyota Etios', price: 11, image: 'https://placehold.co/200x150/png' },
        
        // Add more buses as needed
      ],
      services: [
        { name: 'Bus Rental Service in Jaipur', image: 'https://placehold.co/200x150/png', link: '/buses' },
        { name: 'Bus Rental Service in Jaipur', image: 'https://placehold.co/200x150/png', link: '/buses' },
        { name: 'Bus Rental Service in Jaipur', image: 'https://placehold.co/200x150/png', link: '/buses' },
        { name: 'Bus Rental Service in Jaipur', image: 'https://placehold.co/200x150/png', link: '/buses' },
        { name: 'Bus Rental Service in Jaipur', image: 'https://placehold.co/200x150/png', link: '/buses' },
        { name: 'Bus Rental Service in Jaipur', image: 'https://placehold.co/200x150/png', link: '/buses' },
        { name: 'Bus Rental Service in Jaipur', image: 'https://placehold.co/200x150/png', link: '/buses' },
        { name: 'Bus Rental Service in Jaipur', image: 'https://placehold.co/200x150/png', link: '/buses' },
        { name: 'Bus Rental Service in Jaipur', image: 'https://placehold.co/200x150/png', link: '/buses' },
        
        // Add more services as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
