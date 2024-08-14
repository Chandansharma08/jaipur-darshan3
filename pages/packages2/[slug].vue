<template>
  <Navbar />
  <main class="pt-16 bg-[#ffffff]">
    <div class="py-5">
      <div
        class="flex flex-col-reverse lg:flex-row shadow m-4 p-2 lg:p-6 gap-4"
      >
        <!-- Content Section -->
        <div class="flex flex-col w-full lg:w-1/2 gap-5">
          <div class="bg-gray-100 p-2 lg:mt-4 rounded-lg shadow-md">
            <h2
              class="text-2xl lg:text-3xl xl:text-4xl font-semibold text-primary mb-4 sm:mb-6"
            >
              {{ package2Data.title }}
            </h2>
            <div class="flex flex-col sm:flex-row justify-between gap-4">
              <div class="text-center flex items-center gap-4">
                <div
                  class="text-2xl bg-white rounded-full w-12 h-12 px-2 border flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cd821c"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-circle-dollar-sign"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                </div>
                <div class="flex flex-col text-left">
                  <h4 class="text-lg md:text-xl lg:text-xl font-semibold">
                    Cost
                  </h4>
                  <p class="text-gray-600 lg:text-sm xl:text-base">Get Quote</p>
                </div>
              </div>
              <div class="text-center flex items-center gap-4">
                <div
                  class="text-2xl bg-white rounded-full w-12 h-12 px-2 border flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cd821c"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-history"
                  >
                    <path
                      d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                    />
                    <path d="M3 3v5h5" />
                    <path d="M12 7v5l4 2" />
                  </svg>
                </div>
                <div class="flex flex-col text-left">
                  <h4 class="text-lg md:text-xl lg:text-xl font-semibold">
                    Duration
                  </h4>
                  <p class="text-gray-600 lg:text-sm xl:text-base">
                    {{ package2Data.time }}
                  </p>
                </div>
              </div>
              <div class="text-center flex items-center gap-4">
                <div
                  class="text-2xl bg-white rounded-full w-12 h-12 px-2 border flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cd821c"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-map-pin"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div class="flex flex-col text-left">
                  <h4 class="text-lg md:text-xl lg:text-xl font-semibold">
                    Location
                  </h4>
                  <p class="text-gray-600 lg:text-sm xl:text-base">
                    {{ package2Data.location }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col justify-between gap-10">
            <p
              class="text-base md:text-lg lg:text-xl"
              v-html="package2Data.desc"
            ></p>
            <nuxt-link
              to="/contact"
              class="px-3 py-2 mb-2 flex bg-primary lg:w-3/12 items-center justify-center text-center font-semibold rounded-full text-secondary"
              >Book Now</nuxt-link
            >
          </div>
        </div>
        <!-- Image Section -->
        <img
          :src="package2Data.mainImage"
          alt="package2 Image"
          class="w-full lg:w-1/2 object-cover mt-4 rounded-md"
        />
      </div>
    </div>
  </main>

  <div v-for="day in package2Data?.days" :key="day.title">
    <h2
      class="text-2xl font-semibold lg:text-4xl px-10 bg-[#ffffff] text-primary"
    >
      {{ day.title }}
    </h2>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 px-4 md:px-10 py-10 bg-[#ffffff]"
    >
      <NuxtLink
        v-for="(place, index) in day.places"
        :key="index"
        class="relative overflow-hidden rounded-3xl group block"
      >
        <img
          :src="place.image"
          :alt="place.name"
          class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <h1
          class="text-xl md:text-2xl bg-opacity-60 p-2 absolute bottom-4 rounded-full left-4 text-center text-black bg-white md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 ease-in-out"
        >
          {{ place.name }}
        </h1>
      </NuxtLink>
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

<script setup>
import { useRoute } from "vue-router";
import {
  getAllPackages2Data,
  getPackages2Data,
} from "~/utils/packages2Data.ts";

const route = useRoute();
const slug = route.params.slug;

const packages2Data = getPackages2Data(slug);
const package2Data = packages2Data[0];
// const allPackages2Data = getAllPackages2Data();

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
.md\:group-hover\:translate-y-0:hover {
  transform: translateY(0);
}
.md\:group-hover\:translate-y-full {
  transform: translateY(100%);
}
.group-hover\:scale-110:hover {
  transform: scale(1.1);
}
@media (max-width: 768px) {
  .group-hover\:scale-110:hover {
    transform: none;
  }
  .group h1 {
    opacity: 1 !important;
    position: static !important;
    background-color: rgba(
      255,
      255,
      255,
      0.8
    ); /* Ensure the text background is visible */
    width: 100%; /* Ensure the text background covers the full width */
    text-align: center; /* Center align the text */
  }
}
</style>
