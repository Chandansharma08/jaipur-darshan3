<template>
  <div class="bg-white ">
    <h2 class="text-3xl text-primary lg:text-4xl font-semibold mb-6">Top Destination For Your Next Vacation -</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <NuxtLink
        v-for="(destination2, index) in destinations2"
        :key="index"
        :to="destination2.url"
        class="relative overflow-hidden rounded-3xl group block shadow-card"
      >
        <img
          :src="destination2.image"
          :alt="destination2.name"
          class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 transition-opacity duration-500 shadow-gradient flex flex-col justify-end p-4">
          <!-- Name for larger screens, always visible but hidden on hover -->
          <h3 class="text-secondary text-2xl md:text-3xl font-semibold mb-2 lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:p-4 lg:opacity-100 lg:group-hover:opacity-0 lg:transition-opacity lg:duration-500">
            {{ destination2.name }}
          </h3>
          <!-- Description and Button for mobile and tablet views, hidden on larger screens -->
          <div class="lg:hidden">
            <p class="text-secondary text-sm mb-4">{{ destination2.description }}</p>
            <NuxtLink :to="destination2.url" class="block">
              <button
                class="px-6 py-2 bg-transparent text-secondary text-sm rounded-full border border-white hover:bg-white hover:text-black"
              >
                See All Tours
              </button>
            </NuxtLink>
          </div>
          <!-- Heading, Description and Button for larger screens, appears on hover with animation -->
          <div class="hidden lg:flex lg:flex-col lg:justify-end lg:transition-opacity lg:duration-500 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transform lg:group-hover:translate-y-0">
            <h3 class="text-secondary text-lg md:text-3xl font-semibold mb-2 lg:opacity-100 lg:transition-opacity lg:duration-500">
              {{ destination2.name }}
            </h3>
            <p class="text-secondary text-sm mb-4 lg:opacity-100 lg:transition-opacity lg:duration-500">
              {{ destination2.description }}
            </p>
            <NuxtLink :to="destination2.url">
              <button
                class="mt-1 px-4 py-2 bg-transparent text-secondary text-sm rounded-full border border-white hover:bg-white hover:text-black lg:opacity-100 lg:transition-opacity lg:duration-500"
              >
                See All Tours
              </button>
            </NuxtLink>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div class="text-center md:text-right mt-5">
      <nuxt-link to="/places"
        class="bg-transparent text-primary px-4 py-2 rounded-full hover:text-secondary border-2 border-primary hover:bg-primary mt-5"
      >
        See All Destinations
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      destinations2: [
        {
          name: "Amber Fort",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/amber-fort-66b704bfdf5d2.webp",
          description: "Majestic fort with stunning Rajasthan architecture",
          url: "/places" // Dynamic URL for Bali
        },       
        {
          name: "Albert Hall",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/albert-hall-66b704bfd4f95.webp",
          description: "Historic hall showcasing cultural heritage and art",
          url: "/places" // Dynamic URL for Nha Trang
        },
        {
          name: "Nahargarh",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/nahargarh-66b704d13c226.webp",
          description: "Historic palace with panoramic city views",
          url: "/places" // Dynamic URL for Bangkok
        },
        {
          name: "Birla Mandir",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/birla-temple-66b704c30c726.webp",
          description: "Grand temple dedicated to Hindu deities",
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
