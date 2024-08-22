<template>
  <Navbar />
  <LoadingSpinner v-if="isLoading" />

  <div v-else class="font-serif">
    <div class="px-4 md:px-10 bg-white pt-20">
      <!-- Content Before Team Section -->

      <!-- <img class="shadow-sm w-full pt-0 rounded-xl bg-transparent" src="https://placehold.co/1400x400" alt="background" /> -->
      <div class="relative pt-2">
        <img
          class="background-image"
          src="https://ccdstest.b-cdn.net/Jaipur%20Darshan/about%20us.webp"
          alt="background"
        />
        <div
          class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32"
        >
          <h1
            class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-white font-semibold"
          >
            About Us
          </h1>
          <div class="hidden lg:flex flex-row justify-center gap-4 mt-4">
            <nuxt-link
              to="/"
              class="text-base hover:text-red-500 md:text-lg lg:text-xl text-white font-bold"
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
                class="lucide lucide-chevron-right mt-1 text-white"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
            <p class="text-base md:text-lg lg:text-xl text-white font-bold">
              About Us
            </p>
          </div>
        </div>
      </div>
      <section class="bg-white py-10">
        <div class="flex flex-col text-center items-center justify-center">
          <div class="mb-4 space-y-2">
            <h2
              class="text-2xl text-primary md:text-3xl lg:text-3xl font-semibold text-center"
            >
              Provide the best travel experience for you
            </h2>
            <p class="text-lg text-slate-500 md:text-xl text-center">
              We recognize that each journey is unique, so we provide tailored
              travel packages that match your preferences and budget. Our custom
              solutions ensure a personalized experience suited to your specific
              needs.
            </p>
          </div>
          <div class="flex flex-col md:flex-row justify-center gap-5">
            <div
              class="flex flex-col items-center bg-[#e6f7f4] rounded-xl p-4 lg:p-8 mb-4 md:mb-0 border"
            >
              <div class="mb-4">
                <img
                  src="assets\images\marketing.svg"
                  alt="Our Vision" class="w-28"
                />
              </div>
              <h3 class="font-semibold text-lg lg:text-3xl mb-2">Our Vision</h3>
              <p>
                Our vision is to become a leading travel agency company that
                provides high-quality services and inspiration for our customer.
              </p>
            </div>

            <div
              class="flex flex-col items-center bg-[#e6f7f4] rounded-xl p-4 lg:p-8 border"
            >
              <div class="mb-6">
                <img
                  src="assets\images\start-up.svg"
                  alt="Our Mission" class="w-24"
                />
              </div>
              <h3 class="font-semibold text-lg lg:text-3xl mb-2">
                Our Mission
              </h3>
              <p>
                Our mission is to be a top travel agency, delivering exceptional
                services and inspiring experiences tailored to our customers'
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        class="py-10 bg-primary flex flex-col items-center justify-center my-6 text-center px-6"
      >
        <h1 class="text-3xl lg:text-4xl font-bold text-secondary mb-2">
          Finding Your Dream Destination Is Our Priority
        </h1>
        <p class="text-secondary">
          With a collection of destinations that include stunning natural
          landscapes, vibrant cosmopolitan cities, and enchanting tropical
          islands, we take you to the world's most stunning places.
        </p>

        <!-- Services Grid -->
        <div
          class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5"
        >
          <!-- Service items -->
          <div class="bg-white rounded-lg p-4 shadow-lg">
            <div class="text-orange-500 mb-3 flex items-center justify-center">
              <img src="assets\images\jawahar-circle.svg" alt="" class="w-10" />
            </div>
            <h3 class="font-semibold text-lg">Jaipur Journeys</h3>
            <p>Seamless tours and tickets for Jaipur's top sights.</p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-lg">
            <div
              class="text-orange-500 text-5xl mb-3 flex items-center justify-center"
            >
              <img src="assets\images\man.svg" alt="" class="w-10" />
            </div>
            <h3 class="font-semibold text-lg">City Explorers</h3>
            <p>Guided transport and tickets to explore Jaipur's attractions.</p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-lg">
            <div
              class="text-orange-500 text-5xl mb-3 flex items-center justify-center"
            >
              <img src="assets\images\heritage.svg" alt="" class="w-10" />
            </div>
            <h3 class="font-semibold text-lg">Heritage Rides</h3>
            <p>
              Discover Jaipur's landmarks with convenient bus and car tickets.
            </p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-lg">
            <div
              class="text-orange-500 text-5xl mb-3 flex items-center justify-center"
            >
              <img src="assets\images\sightseeing.svg" alt="" class="w-10" />
            </div>
            <h3 class="font-semibold text-lg">Sightseeing Made</h3>
            <p>Effortless access to Jaipur's must-see locations and tours.</p>
          </div>
          <!-- Additional services -->
        </div>
      </div>

      <div class="bg-gray-100 p-10">
        <div class="mx-auto">
          <div class="text-center mb-10">
            <h2 class="text-3xl lg:text-4xl font-bold text-primary">
              Experienced Professionals With Best Service
            </h2>
            <p class="py-2 text-gray-600">
              Our team consists of experienced professionals highly committed to
              providing the best service to our customers.
            </p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <!-- Team members -->
            <div
              v-for="member in teamMembers"
              :key="member.id"
              class="relative group"
            >
              <img
                :src="member.photo"
                :alt="member.name"
                class="object-cover rounded-lg"
              />
              <!-- Overlay for large screens -->
              <div
                class="absolute rounded-lg max-w-[400px] inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4"
              >
                <p class="text-2xl font-semibold text-secondary">
                  {{ member.name }}
                </p>
                <p class="text-secondary">{{ member.role }}</p>
              </div>
              <!-- Always visible for mobile and tablet -->
              <div
                class="lg:hidden absolute inset-0 flex flex-col justify-center items-center p-4"
              >
                <p class="text-2xl font-semibold text-secondary">
                  {{ member.name }}
                </p>
                <p class="text-secondary">{{ member.role }}</p>
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
      isLoading: true, // Set this to true initially to show the loader

      teamMembers: [
        {
          id: 1,
          name: "John Marvel",
          role: "Travel Expert Team",
          photo:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/photo-gallery-img-02.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          role: "Booking Specialist",
          photo:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/photo-gallery-img-02.jpg",
        },
        {
          id: 3,
          name: "Sam Smith",
          role: "Customer Service Lead",
          photo:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/photo-gallery-img-02.jpg",
        },
        {
          id: 4,
          name: "Alex Johnson",
          role: "Tour Guide",
          photo:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/photo-gallery-img-02.jpg",
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
    content: url("https://ccdstest.b-cdn.net/Jaipur%20Darshan/about%20us%201400%20700.webp");
  }
}

@media (min-width: 1024px) {
  .background-image {
    /* Image size for large, extra-large, and extra-extra-large screens */
    content: url("https://ccdstest.b-cdn.net/Jaipur%20Darshan/about%20us.webp");
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
