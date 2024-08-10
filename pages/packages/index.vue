<template>
    
        <Navbar />
        <div class="bg-white pt-20 px-4 md:px-10 space-y-11">
            <div class="w-full text-black">
                <div class="relative">
                    <img class="background-image" src="https://placehold.co/1400x700" alt="background" />
                    <div class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32">
                        <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">Bus Tours</h1>
                        <div class="hidden lg:flex flex-row justify-center items-center gap-4 my-4">
                            <nuxt-link to="/" class="text-base hover:text-red-500 md:text-lg lg:text-xl xl:text-2xl">Home</nuxt-link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right mt-1">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                            <p class="text-base md:text-lg lg:text-xl xl:text-2xl">Bus Tours</p>
                        </div>
                    </div>
                </div>
                <div class="mt-5 px-4 md:px-10 ">
                    <h1 class="text-2xl ">Bus Tour Services and Places</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet cumque saepe illo mollitia repellat, placeat unde, nam quae molestias enim esse adipisci ipsa recusandae laudantium. Sit, at nesciunt. Esse maxime vel molestiae corporis eligendi possimus ut nesciunt eos nulla consequatur dolorum delectus repellendus suscipit neque labore, optio in amet.</p>
                </div>
                <h1 class="font-bold text-2xl mt-8 flex px-4 md:px-10 lg:px-20">Tour 1 (Places of Attractions)</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap px-4 md:px-10 lg:px-20 py-10">
                    <nuxt-link v-for="(bus, index) in buses" :key="index" :to="bus.link" class="flex flex-col items-center bg-slate-100  rounded-lg p-6 text-black shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        <img :src="bus.image" :alt="bus.name" class="w-full  object-cover rounded-lg mb-4" />
                        <h1 class="text-xl font-semibold">{{ bus.name }}</h1>
                        <div class="text-3xl font-bold mt-2">{{ bus.price }} INR</div>
                        <p class="text-sm opacity-80 mt-1">Per Person</p>
                    </nuxt-link>
                </div>

                <h1 class="font-bold text-2xl flex px-4 md:px-10 lg:px-20">Tour 2 (Places of Attractions)</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap px-4 md:px-10 lg:px-20 py-10">
                    <nuxt-link v-for="(bus1, index) in buses1" :key="index" :to="bus1.link" class="flex flex-col items-center bg-slate-100 rounded-lg p-6 text-black shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        <img :src="bus1.image" :alt="bus1.name" class="w-full object-cover rounded-lg mb-4" />
                        <h1 class="text-xl font-semibold">{{ bus1.name }}</h1>
                        <div class="text-3xl font-bold mt-2">{{ bus1.price }} INR</div>
                        <p class="text-sm opacity-80 mt-1">Per Person</p>
                    </nuxt-link>
                </div>
            </div>
        </div>
   <Footer />
    <!-- back to top button -->
  <div class="fixed bottom-5 right-5 p-4 z-50">
    <button
      class="rounded-full w-10 h-10 flex items-center justify-center"
      @click="openWhatsApp"
    >
      <img
        src="https://ccdstest.b-cdn.net/Jaipur%20Darshan/whatsapp.svg"
        alt=""
      />
    </button>
  </div>
  <div class="fixed bottom-5 left-5 p-4">
    <button
      class="bg-accent text-base-100 rounded-full w-10 h-10 flex items-center justify-center"
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
            buses: [
                { name: 'Non-AC Bus', price: 250, image: 'https://placehold.co/500x350/png', link: '/packages/non-ac-bus' },
                { name: 'AC Bus', price: 300, image: 'https://placehold.co/500x350/png', link: '/packages/ac-bus' },
                { name: 'Double Decker Bus', price: 250, image: 'https://placehold.co/500x350/png', link: '/packages/double-decker-bus' }
            ],
            buses1: [
                { name: 'Non-AC Bus', price: 250, image: 'https://placehold.co/500x350/png', link: '/packages/non-ac-bus1' },
                { name: 'AC Bus', price: 300, image: 'https://placehold.co/500x350/png', link: '/packages/ac-bus1' },
                { name: 'Double Decker Bus', price: 250, image: 'https://placehold.co/500x350/png', link: '/packages/double-decker-bus1' }
            ]
        };
    }
};
</script>

<style scoped>
/* Additional custom styles can go here */
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