<template>
    <Navbar />
    <main class="pt-16 bg-[#ffffff]">
        <div class="py-5">
            
            <h1 class="font-semibold mb-4 text-2xl md:text-3xl lg:text-5xl mx-8 text-primary" v-html="packageData.title"></h1>
            <div class="flex flex-col-reverse md:flex-row shadow m-4 p-2 lg:p-6">
                <div class="w-full md:w-1/2 flex flex-col justify-evenly">
                    <p class="px-1 py-4 text-xl" v-html="packageData.desc"></p>
                    <nuxt-link to="/contact" class="px-3 py-2 mx-6 mb-2 flex bg-primary lg:w-3/12 items-center justify-center text-center font-semibold rounded-full text-secondary">Book Now</nuxt-link>
                </div>
                <img :src="packageData.mainImage" alt="packages Image" class="w-full md:w-1/2 object-cover mt-4 rounded-md">
            </div>
        </div>
    </main>
    <h2 class="text-2xl font-semibold lg:text-4xl px-10 bg-[#ffffff] text-primary">Places Of Attractions:- </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 px-4 md:px-10 py-10 bg-[#ffffff]">
        <NuxtLink v-for="(packageData, index) in packagesData" :key="index" class="relative overflow-hidden rounded-3xl group block">
            <img :src="packageData.image1" :alt="packageData.name" class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
            <h1 class="text-xl md:text-2xl bg-opacity-60 p-2 absolute bottom-4 rounded-full left-4 text-center  text-black bg-white md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 ease-in-out">{{ packageData.name }}</h1>
        </NuxtLink>
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

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getAllPackagesData, getPackagesData } from '~/utils/packagesData.ts';

const route = useRoute();
const slug = route.params.slug;

const packagesData = getPackagesData(slug);
const packageData = packagesData[0];
// const allPackagesData = getAllPackagesData();

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // This smoothens the scroll
  });
}

function openWhatsApp() {
  const phoneNumber = '7742484939';
  const message = 'Hello!'; // You can customize the initial message here
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Optionally, you can use onMounted to trigger these functions when the component is mounted
onMounted(() => {
  // backToTop(); // Uncomment if you want to scroll to top on mount
  // openWhatsApp(); // Uncomment if you want to open WhatsApp on mount
});
</script>


<style scoped>
.md\:group-hover\:translate-y-0:hover {
    transform: translateY(0);
}
.md\:group-hover\:translate-y-full {
    transform: translateY(100%);
}
.group-hover\:scale-110:hover {
    transform: scale(1.10);
}
@media (max-width: 768px) {
    .group-hover\:scale-110:hover {
        transform: none;
    }
    .group h1 {
        opacity: 1 !important;
        position: static !important;
        background-color: rgba(255, 255, 255, 0.8); /* Ensure the text background is visible */
        width: 100%; /* Ensure the text background covers the full width */
        text-align: center; /* Center align the text */
    }
}
</style>
