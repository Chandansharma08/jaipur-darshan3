<template>
  <Navbar />
  <LoadingSpinner v-if="isLoading" />

  <div v-else class="font-serif">
    <div class="bg-white pt-20 px-4 md:px-10 space-y-11">
      <div class="w-full text-black">
        <!-- Banner and Navigation Links -->
        <div class="relative pt-2">
          <img
            class="background-image1"
            src="https://ccdstest.b-cdn.net/Jaipur%20Darshan/Optimized-1723444765.705/1400-by-400-at-2x-66b9ae167a844.webp"
            alt="background"
          />
          <div
            class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32"
          >
            <h1
              class="text-2xl md:text-3xl lg:text-4xl text-center text-black font-semibold"
            >
              Places
            </h1>
            <div class="hidden lg:flex flex-row justify-center gap-4 mt-4">
              <nuxt-link
                to="/"
                class="text-base hover:text-red-500 md:text-lg lg:text-xl text-black font-bold"
                >Home</nuxt-link
              >
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-right mt-1"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
              <p class="text-base md:text-lg lg:text-xl text-black font-bold">
                Places
              </p>
            </div>
          </div>
        </div>

        <!-- Content Sections -->
        <div class="bg-white px-4 md:px-8 mt-5 space-y-2">
          <h2 class="text-2xl text-primary md:text-3xl lg:text-3xl font-semibold text-center">
            Exciting Destinations for Your Next Trip
          </h2>
          <p class="text-lg text-slate-500 md:text-xl text-center">
            Explore breathtaking destinations and create unforgettable memories
            with our curated list of top vacation spots. Whether you’re seeking
            serene beaches, vibrant cities, or cultural landmarks, find the
            perfect getaway to suit your interests and travel style. Discover
            new adventures and make your next vacation truly exceptional.
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-5 mt-4"
        >
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
            <div
              class="absolute inset-0 transition-opacity duration-500 shadow-gradient flex flex-col justify-end p-4"
            >
              <!-- Old heading (initially visible at the bottom) -->
              <h3
                class="text-secondary hidden lg:block text-lg md:text-3xl font-semibold mb-2 lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:p-4 lg:opacity-100 lg:group-hover:opacity-0 lg:transition-opacity lg:duration-500"
              >
                {{ destination.name }}
              </h3>
              <!-- New heading, description, and button -->
              <div
                class="opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-full transition-all duration-500 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 flex flex-col"
              >
                <h3
                  class="text-secondary text-lg md:text-3xl font-semibold mb-2"
                >
                  {{ destination.name }}
                </h3>
                <p class="text-secondary text-sm mb-4">
                  {{ destination.description }}
                </p>
                <!-- Button centered for all views -->
                <NuxtLink :to="destination.url" class="block">
                  <button
                    class="px-6 py-2 bg-transparent text-secondary text-sm rounded-full border border-white hover:bg-white hover:text-black"
                  >
                    More About
                  </button>
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </div>
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
import LoadingSpinner from "~/components/LoadingSpinner.vue";

export default {
  components: {
    LoadingSpinner,
  },
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
  mounted() {
    // Simulate an asynchronous operation and hide loader after it's done
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // Adjust the time as needed
  },
  data() {
    return {
      isLoading: true,
      destinations: [
        {
          name: "Rajmandir",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/raj-mandir-66b704d3951e9.webp",
          description: "Discover Bali with our special tours",
          url: "/places/rajmandir",
        },
        {
          name: "Statue circle",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/statue-cilce-66b704d63b8f8.webp",
          description: "Discover Bangkok with our special tours",
          url: "/places/statue-circle",
        },
        {
          name: "Birla Mandir",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/birla-temple-66b704c30c726.webp",
          description: "Relax in Cancun with our beach tours",
          url: "/places/birla-mandir",
        },
        {
          name: "Albert Hall",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/albert-hall-66b704bfd4f95.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/albert-hall",
        },
        {
          name: "Ramniwas Bagh",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/ramnivwas-garden-66b704d4159f0.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/ramniwas-bagh",
        },
        {
          name: "Pink City",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/pink-city-street-66b704d13e4fe.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/pink-city",
        },
        {
          name: "Hawa Mahal",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/hawa-mahal-66b704c84dd91.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/hawa-mahal",
        },
        {
          name: "Jantar Mantar",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/jamtrmantr-66b704cb3cc11.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/jantar-mantar",
        },
        {
          name: "Amber Fort",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/amber-fort-66b704bfdf5d2.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/amber-fort",
        },
        {
          name: "Art Gallery",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/art-gallery-300-by-300-66b704c2d734e.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/art-gallery",
        },
        {
          name: "City Palace",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/city-palace-66b704c57d6a5.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/city-palace",
        },
        {
          name: "Gaitore",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/gaitore-66b704c5951bb.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/gaitore",
        },
        {
          name: "Jaigarh",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/jaigarh-66b704c89f427.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/jaigarh",
        },
        {
          name: "Jalmahal",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/jalmahal-66b704cb17925.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/jalmahal",
        },
        {
          name: "Nahargarh",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/nahargarh-66b704d13c226.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/nahargarh",
        },
        {
          name: "Kanak Vrindavan",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/kanka-vrindavan-66b704cde7cc5.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/kanak-vrindavan",
        },
        {
          name: "Maotha Lake",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/maotha-lake-66b704ce4c377.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/maotha-lake",
        },
        {
          name: "Wax Museum",
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/best%20dst%202300by%20300/wax-museum-66b704d6aa5cb.webp",
          description: "Explore Nha Trang with our city tours",
          url: "/places/wax-museum",
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
  .background-image1 {
    /* Image size for small and medium screens */
    content: url("https://placehold.co/1400x700");
    border-radius: 8px;
  }
}

@media (min-width: 1024px) {
  .background-image1 {
    /* Image size for large, extra-large, and extra-extra-large screens */
    content: url("https://ccdstest.b-cdn.net/Jaipur%20Darshan/Optimized-1723444765.705/1400-by-400-at-2x-66b9ae167a844.webp");
    border-radius: 8px;
  }
}
</style>
