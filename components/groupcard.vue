<template>
    <div class="bg-white px-4 md:px-8">
      <h2 class="text-xl md:text-2xl font-semibold mb-6">Top Destination For Your Next Vacation</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <NuxtLink
          v-for="(destination, index) in destinations"
          :key="index"
          :to="destination.url"
          class="relative overflow-hidden rounded-lg group block"
        >
          <img
            :src="destination.image"
            :alt="destination.name"
            class="w-full h- object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 transition-opacity duration-500"
          >
            <!-- Old Heading - Initially hidden, moves up on hover -->
            <div class="absolute bottom-0 left-0 p-4 w-full">
              <h3
                class="text-white text-lg md:text-3xl font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-5 group-hover:translate-y-0"
              >
                {{ destination.name }}
              </h3>
              <p
                class="text-white text-sm opacity-0 mb-4 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-10 group-hover:translate-y-0"
              >
                {{ destination.description }}
              </p>
              <NuxtLink
                :to="destination.url"
                class=" opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-10 group-hover:translate-y-0 mt-2 px-4 py-2 bg-transparent text-white text-sm rounded-full border border-white hover:bg-white hover:text-black"
              >
                See All Tours
              </NuxtLink>
            </div>
            <!-- New Heading - Always visible, hides on hover -->
            <h3
              class="text-white text-lg md:text-3xl font-semibold mb-2 absolute bottom-0 left-0 w-full p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-500"
            >
              {{ destination.name }}
            </h3>
          </div>
        </NuxtLink>
      </div>
      <div class="text-center mt-8">
        <button
          class="bg-transparent text-green-600 px-4 py-2 rounded-full hover:text-white border-2 border-green-600 hover:bg-green-700"
        >
          See All Destinations
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        destinations: [
          {
            name: "Bali",
            image: "https://travelwp.physcode.com/main-demo/wp-content/uploads/sites/7/2023/07/Tokyo.png",
            description: "Discover Bali with our special tours",
            url: "/destinations/bali" // Dynamic URL for Bali
          },
          {
            name: "Bangkok",
            image: "https://placehold.co/300x400.png",
            description: "Discover Bangkok with our special tours",
            url: "/destinations/bangkok" // Dynamic URL for Bangkok
          },
          {
            name: "Cancun",
            image: "https://placehold.co/300x400.png",
            description: "Relax in Cancun with our beach tours",
            url: "/destinations/cancun" // Dynamic URL for Cancun
          },
          {
            name: "Nha Trang",
            image: "https://placehold.co/300x400.png",
            description: "Explore Nha Trang with our city tours",
            url: "/destinations/nha-trang" // Dynamic URL for Nha Trang
          },
          {
            name: "Bali",
            image: "https://placehold.co/300x400.png",
            description: "Discover Bali with our special tours",
            url: "/destinations/bali" // Dynamic URL for Bali
          },
          {
            name: "Bangkok",
            image: "https://placehold.co/300x400.png",
            description: "Discover Bangkok with our special tours",
            url: "/destinations/bangkok" // Dynamic URL for Bangkok
          },
          {
            name: "Cancun",
            image: "https://placehold.co/300x400.png",
            description: "Relax in Cancun with our beach tours",
            url: "/destinations/cancun" // Dynamic URL for Cancun
          },
          {
            name: "Nha Trang",
            image: "https://placehold.co/300x400.png",
            description: "Explore Nha Trang with our city tours",
            url: "/destinations/nha-trang" // Dynamic URL for Nha Trang
          },
        ],
      };
    },
    methods: {
      selectDestination(index) {
        console.log(`Destination selected: ${this.destinations[index].name}`);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Additional styles for hover effect and animation */
  .group:hover .group-hover\:scale-110 {
    transform: scale(1.1); /* Scale up image on hover */
  }
  .group .group-hover\:opacity-100,
  .group .group-hover\:translate-y-0 {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
  </style>
  