<template>
  <Navbar />
  <LoadingSpinner v-if="isLoading" />

  <div v-else class="font-serif">
    <div class="bg-[#ffffff] pt-[66px] lg:pt-[80px] space-y-11 px-4 md:px-10">
      <div class="w-full text-black">
        <div class="relative">
          <img class="background-image" src="https://placehold.co/1400x700" alt="background" />
          <div class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32">
            <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold">
              Contact Us
            </h1>
            <div class="hidden lg:flex flex-row justify-center items-center gap-4 mt-4 font-bold">
              <nuxt-link to="/" class="text-base hover:text-red-500 md:text-lg lg:text-xl">Home</nuxt-link>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-chevron-right mt-1">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
              <p class="text-base md:text-lg lg:text-xl">Contact Us</p>
            </div>
          </div>
        </div>
        <div class="text-black mt-5 px-4 md:px-8 lg:px-12 xl:px-16 py-8 md:py-10">
          <h1 class="text-2xl text-primary md:text-3xl lg:text-3xl font-semibold text-center">
            HAVE A QUESTION OR PROBLEM? WE CAN HELP
          </h1>
          <p class="text-lg text-slate-500 md:text-xl text-center">
            Contact us for any questions, support, or feedback. Our team is here to assist you promptly and ensure your experience is seamless. Reach out to us anytime—we’re happy to help!
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mt-8 md:mt-10">
            <div class="flex flex-col items-center border border-black p-4 md:p-5 rounded-md">
              <img src="assets\images\office.svg" alt="Location Icon" class="mb-4 w-48" />
              <div class="text-center">
                <h1 class="text-xl md:text-2xl lg:text-3xl text-primary font-semibold">
                  Head Office
                </h1>
                <p class="mt-1 text-base md:text-lg lg:text-xl hover:text-primary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div class="flex flex-col items-center border border-black p-4 md:p-5 rounded-md">
              <img src="assets\images\email (1).svg" alt="Email Icon" class="mb-4 w-48" />
              <div class="text-center">
                <h1 class="text-xl md:text-2xl lg:text-3xl text-primary font-semibold">
                  Email
                </h1>
                <p class="mt-1 text-base md:text-lg lg:text-xl hover:text-primary">
                  <nuxt-link to="mailto:example@gmail.com">example@gmail.com</nuxt-link>
                </p>
                <p class="text-base md:text-lg lg:text-xl hover:text-primary">
                  <nuxt-link to="mailto:example@gmail.com">example@gmail.com</nuxt-link>
                </p>
              </div>
            </div>
            
            <div class="flex flex-col items-center border border-black p-4 md:p-5 rounded-md">
              <img src="assets\images\service.svg" alt="Phone Icon" class="mb-4 w-48" />
              <div class="md:mr-5">
                <h1 class="text-xl md:text-2xl lg:text-3xl text-primary font-semibold">
                  Contact Number
                </h1>
                <p class="mt-1 text-base md:text-lg lg:text-xl hover:text-primary">
                  <nuxt-link to="tel:+91-9929358785">+91-9929358785</nuxt-link>
                </p>
                <p class="text-base md:text-lg lg:text-xl hover:text-primary">
                  <nuxt-link to="tel:+91-9660220533">+91-9660220533</nuxt-link>
                </p>
              </div>
            </div>           

            <div class="flex flex-col items-center border border-black p-4 md:p-5 rounded-md">
              <img src="assets\images\www.svg" alt="Website Icon" class="mb-4 w-48" />
              <div class="text-center">
                <h1 class="text-xl md:text-2xl lg:text-3xl text-primary font-semibold">
                  Website
                </h1>
                <p class="mt-1 text-base md:text-lg lg:text-xl hover:text-primary">
                  <nuxt-link to="http://www.jaipur-darshan.com">www.jaipur-darshan.com</nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="overflow-hidden flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            width="100%" height="480" style="border: 0" allowfullscreen="" loading="lazy"></iframe>
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
