<template>
  <Navbar />
  <div class="bg-white pt-20 px-4 md:px-10 space-y-11">
    <div class="w-full text-black">
      <!-- Banner and Navigation Links -->
      <div class="relative pt-2 ">
        <img class="background-image" src="https://placehold.co/1400x700" alt="background" />

      </div>

      <!-- Content Sections -->
      <div class="bg-white px-4 md:px-8 mt-5">
        <h2 class="text-2xl lg:text-4xl text-primary font-semibold mb-4">
          Top Places For Your Next Vacation
        </h2>
        <p class="md:text-lg lg:text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iste quia dolorem cupiditate odit sequi
          voluptatem provident veniam magnam velit aperiam quas enim dolorum doloribus sint illo exercitationem ipsam!
          Exercitationem sint vel dolorum minima, itaque totam quae architecto, iusto ipsum cumque ratione, culpa
          pariatur repellendus ad earum in assumenda corporis.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-5">
        <NuxtLink v-for="(destination, index) in destinations" :key="index" :to="destination.url"
          class="relative overflow-hidden rounded-3xl group block shadow-card">
          <img :src="destination.image" :alt="destination.name"
            class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
          <div class="absolute inset-0 transition-opacity duration-500 shadow-gradient flex flex-col justify-end p-4">
            <!-- Old heading (initially visible at the bottom) -->
            <h3
              class="text-secondary hidden lg:block text-lg md:text-3xl font-semibold mb-2 lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:p-4 lg:opacity-100 lg:group-hover:opacity-0 lg:transition-opacity lg:duration-500">
              {{ destination.name }}
            </h3>
            <!-- New heading, description, and button -->
            <div
              class="opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-full transition-all duration-500 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 flex flex-col">
              <h3 class="text-secondary text-lg md:text-3xl font-semibold mb-2">{{ destination.name }}</h3>
              <p class="text-secondary text-sm mb-4">{{ destination.description }}</p>
              <!-- Button centered for all views -->
              <NuxtLink :to="destination.url" class="block">
                <button
                  class="px-6 py-2 bg-transparent text-secondary text-sm rounded-full border border-white hover:bg-white hover:text-black">
                  More About
                </button>
              </NuxtLink>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
   
  </div>
  <Footer />
  <div class="fixed bottom-5 right-5 p-4 z-50">
    <button
      class="rounded-full w-10 h-10 flex items-center justify-center"
      @click="openWhatsApp"
    >
      <img
        src="https://ccdstest.b-cdn.net/Jaipur%20Darshan/social.svg"
        alt=""
      />
    </button>
  </div>
  <div class="fixed bottom-5 left-5 p-4">
    <button
      class="bg-primary text-base-100 rounded-full w-10 h-10 flex items-center justify-center"
      @click="backToTop"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // This smoothens the scroll
      });
    },
    openWhatsApp() {
      const phoneNumber = "7742484939";
      const message = "Hello!"; // You can customize the initial message here
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    },
  },
  data() {
    return {
      destinations: [
        {
          name: "Rajmandir",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/raj-mandir-66b704d3951e9.webp",
          description: "Discover Bali with our special tours",
          url: "/places/rajmandir",
        },
        {
          name: "Statue circle",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/statue-cilce-66b704d63b8f8.webp",
          description: "Discover Bangkok with our special tours",
          url: "/places/nahargarh",
        },
        {
          name: "Birla Mandir",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/birla-temple-66b704c30c726.webp",
          description: "Relax in Cancun with our beach tours",
          url: "/places/birla-mandir",
        },
        {
          name: "Albert Hall",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/albert-hall-66b704bfd4f95.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/albert-hall",
        },
        {
          name: "Ramniwas Bagh",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/ramnivwas-garden-66b704d4159f0.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/ramniwas-bagh",
        },{
          name: "Pink City",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/pink-city-street-66b704d13e4fe.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/pink-city",
        },{
          name: "Hawa Mahal",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/hawa-mahal-66b704c84dd91.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/hawa-mahal",
        },{
          name: "Jantar Mantar",
          image: "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/jamtrmantr-66b704cb3cc11.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/jantar-mantar",
        },
        // Add more destinations as needed
      ],
    };
  },
};
</script>
<style>
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
  /* Scale up image on hover */
}

.group .group-hover\:opacity-100,
.group .group-hover\:translate-y-0 {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

/* Blackish gradient inside the card from bottom */
.shadow-gradient {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  /* Creates a gradient from bottom */
}

/* Hide the heading on hover for large screens */
.group:hover .lg\:group-hover\:opacity-0 {
  opacity: 0;
}

/* Show the hidden content on hover for large screens */
.group:hover .lg\:group-hover\:opacity-100 {
  opacity: 1;
  transform: translateY(0);
}

.relative {
  position: relative;
}

.background-image {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  /* Rounded corners */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  /* Shadow */
}

@media (max-width: 1023px) {
  .background-image {
    /* Image size for small and medium screens */
    content: url("https://placehold.co/1400x700");
  }
}

@media (min-width: 1024px) {
  .background-image {
    /* Image size for large, extra-large, and extra-extra-large screens */
    content: url("https://placehold.co/1400x400");
  }
}

</style>