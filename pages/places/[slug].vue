<template>
  <Navbar />
  <main class="pt-20 px-4 md:px-10 space-y-11 bg-[#ffffff]">
    <div>
      <div class="relative">
        <picture>
          <!-- Image for small and medium screens (sm and md) -->
          <source media="(max-width: 1023px)" :srcset="placeData.mainImage1" />
          <!-- Image for large and extra-large screens (lg and xl) -->
          <source media="(min-width: 1024px)" :srcset="placeData.mainImage2" />
          <!-- Fallback image (if no media queries match) -->
          <img
            :src="placeData.mainImage2"
            class="background-image"
            alt="background"
          />
        </picture>
        <div
          class="absolute inset-0 flex flex-col text-secondary items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32"
        >
          <h1
            class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold"
          >
            {{ placeData.title }}
          </h1>
          <div class="hidden lg:flex flex-row justify-center items-center font-bold gap-4 mt-4">
            <nuxt-link
              to="/"
              class="text-base hover:text-red-500 md:text-lg lg:text-xl  font-bold"
              >Home</nuxt-link
            >
            <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right mt-1">
                                <path d="m9 18 6-6-6-6" />
                            </svg></p>
            <nuxt-link
              to="/places"
              class="text-base hover:text-red-500 md:text-lg lg:text-xl  font-bold"
              >Places</nuxt-link
            >
            <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right mt-1">
                                <path d="m9 18 6-6-6-6" />
                            </svg></p>
            <p class="text-base md:text-lg lg:text-xl  font-bold">
               {{ placeData.title }}
            </p>
          </div>
        </div>
      </div>
      <div class="div">
        <div class="px-10 py-5 text-xl" v-html="placeData.desc"></div>
       
      </div>
    </div>
  </main>
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

<script setup>
import { getAllPlacesData, getPlacesData } from "~/utils/placesData.ts";

const route = useRoute();
const slug = route.params.slug;

const placesData = getPlacesData(slug);
const placeData = placesData[0];

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This smoothens the scroll
  });
}

function openWhatsApp() {
  const phoneNumber = "7742484939";
  const message = "Hello!"; // You can customize the initial message here
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
}
</script>

<style scoped>
.background-image {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  /* Rounded corners */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  /* Shadow */
}
</style>
