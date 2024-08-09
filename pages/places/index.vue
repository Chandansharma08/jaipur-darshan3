<template>
    
        <Navbar />
        <div class="bg-white pt-20">

            <div class="w-full text-black">
                <!-- Banner and Navigation Links -->
                <div class="relative">
                    <img src="https://placehold.co/1600x400/png" alt="Banner Image" class="w-full h-auto" />
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32">
                        <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">Places</h1>
                        <div class="hidden lg:flex flex-row justify-center items-center gap-4 my-4">
                            <nuxt-link to="/"
                                class="text-base hover:text-red-500 md:text-lg lg:text-xl xl:text-2xl">Home</nuxt-link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-chevron-right mt-1">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                            <p class="text-base md:text-lg lg:text-xl xl:text-2xl">Places</p>
                        </div>
                    </div>
                </div>

                <!-- Content Sections -->
                <div class="mt-10 px-4 md:px-10 lg:px-10 mb-10">
                    
                    <div class="mt-4 flex gap-4 items-center">
                        <div class="flex-1">
                            <input type="text" placeholder="Search your places"
                                class="w-full text-black px-4 py-2 border rounded bg-white" />
                        </div>
                    </div>
                </div>
            
            <div class="bg-white px-4 md:px-8 ">
                <h2 class="text-xl text-emerald-500 md:text-2xl font-semibold mb-6">
                    Top Destination For Your Next Vacation
                </h2>
            </div>
        

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-5">
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
            url: "/places/car1",
          },
          {
            name: "Bangkok",
            image: "https://placehold.co/300x300.png",
            description: "Discover Bangkok with our special tours",
            url: "/places/car2",
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
          {
            name: "Nha Trang",
            image: "https://placehold.co/300x300.png",
            description: "Explore Nha Trang with our city tours",
            url: "/places",
          },
          {
            name: "Nha Trang",
            image: "https://placehold.co/300x300.png",
            description: "Explore Nha Trang with our city tours",
            url: "/places",
          },
          {
            name: "Nha Trang",
            image: "https://placehold.co/300x300.png",
            description: "Explore Nha Trang with our city tours",
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