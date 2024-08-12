<template>
    <Navbar />
    <div class="text-center px-4 md:px-6 lg:px-10 bg-[#ffffff] screen py-20">
        <div class="relative">
            <img class="background-image" src="https://placehold.co/1400x700" alt="background" />
            <div class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32">
                <h1 class="text-2xl md:text-3xl lg:text-3xl  text-center">Privacy Policy </h1>
                <div class="hidden lg:flex flex-row justify-center gap-4 mt-4">
                    <nuxt-link to="/" class="text-base hover:text-red-500 md:text-lg lg:text-xl ">Home</nuxt-link>
                    <p class="text-base md:text-lg lg:text-xl ">/ Privacy Policy</p>
                </div>
            </div>
        </div>
        <p class="text-left text-xl md:text-2xl py-10 ">
            The company itself is a very successful company. Let him flee from the praisers, and let him bear the great
            gentleness to endure! They are less likely to result in less desire! Of necessity, indeed, other things
            which cause pain are easy to obtain, as I will explain. Is he just looking for the present? It is often
            accepted by him that there is no expedient for the pains, the comforts of the pleasures, the pains
            themselves are alleviated, unless he wills that he who will be the one who leads us when he hinders, is
            spared, and the pain is blessed to be the architect. Let it be pleasing to those who are corrupted by the
            offices of hatred and the pleasure of pains, for who will bear here some of them, indeed all of them will
            result in harsher times, no one who praises the harsh exercise of life? Necessities to, who pleases any
            consequence and pleasure a. To be rejected, to do?</p>
    </div>
    <Footer />
  <!-- back to top button -->
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
};
</script>

<style scoped>
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