<template>
  <Navbar />
  
  <!-- Loader -->
  <LoadingSpinner v-if="isLoading" />

  <!-- Main Content -->
  <div v-else class="px-4 md:px-10 space-y-11 bg-[#ffffff] pt-24 font-serif">
    <Banner />
    <Features />
    <Groupcard />
    <Carbus />
    <Activities />
    <Booking />
    <Gallery />
    <Groupitem />
  </div>
  
  <Footer class="font-serif" />
  
  <!-- Back to top button -->
  <div class="fixed bottom-5 right-5 p-4 ">
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
  
  <!-- Back to top button -->
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
import LoadingSpinner from '~/components/LoadingSpinner.vue';

export default {
  components: {
    LoadingSpinner
  },
  data() {
    return {
      isLoading: true, // Set this to true initially to show the loader
    };
  },
  mounted() {
    // Simulate an asynchronous operation and hide loader after it's done
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // Adjust the time as needed
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
};
</script>

<style>
body {
  background-color: aliceblue;
}

* {
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
  /* Standard syntax */
}
</style>
