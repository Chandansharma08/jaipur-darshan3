<template>
    <div class="bg-[#ffffff]">
      <Navbar />
      <div class="md:px-14 px-4 bg-[#ffffff] pt-10 lg:pt-20">
        <div class="py-8">
          <nuxt-link to="/" class="hover:text-green-500 my-2">Home</nuxt-link><span>/</span>
          <nuxt-link to="#" class="hover:text-green-500 my-2">Places</nuxt-link>
          <h1 class="text-2xl font-semibold">Places</h1>
          <p class="text-gray-600">Select country or city to explore</p>
          <div class="mt-4 flex gap-4 items-center">
            <div class="flex-1">
              <input type="text" placeholder="Search your places"
                class="w-full text-black px-4 py-2 border rounded bg-white" />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white px-4 md:px-14 pb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-6">
          Top Destination For Your Next Vacation
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <NuxtLink v-for="(destination, index) in destinations" :key="index" :to="destination.url"
            class="relative overflow-hidden rounded-3xl group block">
            <img :src="destination.image" :alt="destination.name"
              class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-500">
              <!-- Name of the destination always visible -->
              <h3 class="text-white text-lg md:text-3xl font-semibold mb-2">{{ destination.name }}</h3>
              <!-- Description for mobile and tablet views, hidden on larger screens -->
              <p class="text-white text-sm mb-4 lg:opacity-0 lg:group-hover:opacity-100">{{ destination.description }}</p>
              <!-- Button for mobile and tablet views, hidden on larger screens -->
              <NuxtLink :to="destination.url"
                class="block lg:hidden">
                <button
                  class="px-6 py-2 bg-transparent text-white text-sm rounded-full border border-white hover:bg-white hover:text-black">
                  More About
                </button>
              </NuxtLink>
              <!-- Button for larger screens, appears on hover -->
              <NuxtLink :to="destination.url"
                class="hidden lg:flex lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 items-center justify-center">
                <button
                  class="px-6 py-2 bg-transparent text-white text-sm rounded-full border border-white hover:bg-white hover:text-black">
                  More About
                </button>
              </NuxtLink>
            </div>
          </NuxtLink>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        destinations: [
          {
            name: "Bali",
            image: "https://placehold.co/300x300.png",
            description: "Discover Bali with our special tours",
            url: "/places",
          },
          {
            name: "Bangkok",
            image: "https://placehold.co/300x300.png",
            description: "Discover Bangkok with our special tours",
            url: "/places",
          },
          {
            name: "Cancun",
            image: "https://placehold.co/300x300.png",
            description: "Relax in Cancun with our beach tours",
            url: "/places",
          },
          {
            name: "Nha Trang",
            image: "https://placehold.co/300x300.png",
            description: "Explore Nha Trang with our city tours",
            url: "/places",
          },
          // Add more destinations as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
  }
  
  .group .group-hover\:opacity-100 {
    transition: opacity 0.5s ease-in-out;
  }
  
  @media (min-width: 1024px) {
    .group .group-hover\:opacity-0 {
      opacity: 0;
    }
  
    .group:hover .group-hover\:opacity-0 {
      opacity: 1;
    }
  
    .group .group-hover\:opacity-100 {
      opacity: 1;
    }
  }
  
  @media (max-width: 1023px) {
    .group .group-hover\:opacity-100 {
      opacity: 1 !important;
    }
  
    .group .group-hover\:opacity-0 {
      opacity: 1 !important;
    }
  }
  </style>
  