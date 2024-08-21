<template>
  <Navbar />
  <LoadingSpinner v-if="isLoading" />

  <div v-else class="font-serif">
    <div class="px-4 md:px-10 bg-white pt-20">
      <!-- Content Before Team Section -->

      <!-- <img class="shadow-sm w-full pt-0 rounded-xl bg-transparent" src="https://placehold.co/1400x400" alt="background" /> -->
      <div class="relative pt-2">
        <img class="background-image" src="https://placehold.co/1400x400" alt="background" />
        <div class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32">
          <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-black font-semibold">
            Review
          </h1>
          <div class="hidden lg:flex flex-row justify-center gap-4 mt-4">
            <nuxt-link to="/"
              class="text-base hover:text-red-500 md:text-lg lg:text-xl text-black font-bold">Home</nuxt-link>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-chevron-right mt-1">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
            <p class="text-base md:text-lg lg:text-xl text-black font-bold">
              Review
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#ffffff] h-full px-4 md:px-10 space-y-11">
      <div class="bg-[#ffffff] text-black border md:border-none pt-4 mx-2 md:mx-0 flex flex-col items-center lg:p-5">
        <header class="container mx-auto lg:my-0">
          <h1 class="text-3xl lg:text-5xl font-bold text-center text-primary">
            **** Our Customer Stories ****
          </h1>
        </header>
        <main class="container p-8 rounded-lg shadow-lg mx-auto">
          <div>
            <div class="flex flex-col md:flex-row items-center">
              <img src="https://via.placeholder.com/150" alt="General Manager"
                class="rounded-full w-32 h-32 mb-4 md:mb-0 md:mr-4" />
              <div>
                <h2 class="text-2xl font-semibold">Lorem ipsum dolor sit.</h2>
                <p class="text-sm">Lorem, ipsum.</p>
              </div>
            </div>
            <div class="mt-4">
              <p>
                " Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, neque iure! Eius exercitationem iusto beatae
                repudiandae officiis reiciendis aperiam fugit. "
              </p>
              <p class="mt-2">
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Suscipit ipsa eius fuga dicta amet illum, repellendus modi,
                blanditiis neque obcaecati ex aperiam recusandae porro!
                Blanditiis facilis ipsa nostrum aut atque? "
              </p>
            </div>
          </div>
          <div class="mt-6">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowfullscreen></iframe>
          </div>
        </main>
      </div>
      <div class="bg-[#ffffff] py-10 text-primary">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-semibold flex items-end gap-2 mb-8">
            <span> Popular Reviews </span><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="#cd821c" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="lucide lucide-corner-right-down">
                <polyline points="10 15 15 20 20 15" />
                <path d="M4 4h7a4 4 0 0 1 4 4v12" />
              </svg></span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start">
            <!-- Video Item -->
            <div v-for="video in videos" :key="video.id" class="bg-black rounded-lg overflow-hidden relative shadow-lg">
              <iframe :src="video.url" frameborder="0" class="w-full h-full min-h-[300px]"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
              <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-gray-900 to-transparent">
                <h3 class="text-secondary text-lg">{{ video.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  <!-- back to top button -->
  <div class="fixed bottom-5 right-5 p-4 z-50">
    <button class="rounded-full w-10 h-10 flex items-center justify-center" @click="openWhatsApp">
      <img src="https://ccdstest.b-cdn.net/Jaipur%20Darshan/social.svg" alt="" />
    </button>
  </div>
  <div class="fixed bottom-5 left-5 p-4">
    <button class="bg-primary text-base-100 rounded-full w-10 h-10 flex items-center justify-center" @click="backToTop">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
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
      videos: [
        {
          id: 1,
          title: "#1 Client Reviews",
          url: "https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9",
        },
        {
          id: 2,
          title: "#2 Client Reviews",
          url: "https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9",
        },
        {
          id: 3,
          title: "#3 Client Reviews",
          url: "https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9",
        },
        {
          id: 4,
          title: "#1 Client Reviews",
          url: "https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9",
        },
        {
          id: 5,
          title: "#2 Client Reviews",
          url: "https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9",
        },
        {
          id: 5,
          title: "#3 Client Reviews",
          url: "https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Ensures icons and text align properly */
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
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

.text-content {
  max-width: 90%;
  /* Adjust as needed */

  padding: 1rem;
  /* Padding around text */
  border-radius: 8px;
  /* Optional: rounded corners for the text background */
}

/* Responsive text sizes */
h2 {
  font-size: 2rem;
  /* Default for small screens */
}

@media (min-width: 768px) {
  h2 {
    font-size: 2.5rem;
    /* Medium screens */
  }
}
</style>
