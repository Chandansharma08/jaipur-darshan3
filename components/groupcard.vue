<template>
  <div class="bg-white ">
    <h2 class="text-3xl  lg:text-4xl font-semibold mb-6">Top Destination For Your Next Vacation -</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <NuxtLink
        v-for="(destination, index) in destinations"
        :key="index"
        :to="destination.url"
        class="relative overflow-hidden rounded-3xl group block shadow-card"
      >
        <img
          :src="destination.image"
          :alt="destination.name"
          class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 transition-opacity duration-500 shadow-gradient flex flex-col justify-end p-4">
          <!-- Name for larger screens, always visible but hidden on hover -->
          <h3 class="text-white text-lg md:text-3xl font-semibold mb-2 lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:p-4 lg:opacity-100 lg:group-hover:opacity-0 lg:transition-opacity lg:duration-500">
            {{ destination.name }}
          </h3>
          <!-- Description and Button for mobile and tablet views, hidden on larger screens -->
          <div class="lg:hidden">
            <p class="text-white text-sm mb-4">{{ destination.description }}</p>
            <NuxtLink :to="destination.url" class="block">
              <button
                class="px-6 py-2 bg-transparent text-white text-sm rounded-full border border-white hover:bg-white hover:text-black"
              >
                See All Tours
              </button>
            </NuxtLink>
          </div>
          <!-- Heading, Description and Button for larger screens, appears on hover with animation -->
          <div class="hidden lg:flex lg:flex-col lg:justify-end lg:transition-opacity lg:duration-500 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transform lg:group-hover:translate-y-0">
            <h3 class="text-white text-lg md:text-3xl font-semibold mb-2 lg:opacity-100 lg:transition-opacity lg:duration-500">
              {{ destination.name }}
            </h3>
            <p class="text-white text-sm mb-4 lg:opacity-100 lg:transition-opacity lg:duration-500">
              {{ destination.description }}
            </p>
            <NuxtLink :to="destination.url">
              <button
                class="mt-1 px-4 py-2 bg-transparent text-white text-sm rounded-full border border-white hover:bg-white hover:text-black lg:opacity-100 lg:transition-opacity lg:duration-500"
              >
                See All Tours
              </button>
            </NuxtLink>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div class="text-center md:text-right ">
      <button
        class="bg-transparent text-green-600 px-4 py-2 rounded-full hover:text-white border-2 border-emerald-500 hover:bg-emerald-500 mt-5"
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
          name: "Rajmandir",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/raj-mandir-66b704d3951e9.webp",
          description: "Discover Bali with our special tours",
          url: "/places" // Dynamic URL for Bali
        },
        {
          name: "Nahargarh",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/nahargarh-66b704d13c226.webp",
          description: "Discover Bangkok with our special tours",
          url: "/places" // Dynamic URL for Bangkok
        },
        
        {
          name: "Albert Hall ",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/albert-hall-66b704bfd4f95.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places" // Dynamic URL for Nha Trang
        },
        {
          name: "Birla Mandir",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/birla-temple-66b704c30c726.webp",
          description: "Relax in Cancun with our beach tours",
          url: "/places" // Dynamic URL for Cancun
        },
        // Add more destinations as needed
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
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1); /* Scale up image on hover */
}
.group .group-hover\:opacity-100,
.group .group-hover\:translate-y-0 {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}
/* Blackish shadow at the bottom of the card */

/* Blackish gradient inside the card from bottom */
.shadow-gradient {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent); /* Creates a gradient from bottom */
}
/* Hide the heading on hover */
.group:hover .lg\:group-hover\:opacity-0 {
  opacity: 0;
}
/* Show the hidden content on hover */
.group:hover .lg\:group-hover\:opacity-100 {
  opacity: 1;
  transform: translateY(0);
}
</style>
