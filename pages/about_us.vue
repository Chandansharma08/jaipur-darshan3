<template>
  <Navbar />

  <div class="px-4 md:px-10 bg-white pt-20">
    <!-- Content Before Team Section -->

    <!-- <img class="shadow-sm w-full pt-0 rounded-xl bg-transparent" src="https://placehold.co/1400x400" alt="background" /> -->
    <div class="relative pt-2">
      <img
        class="background-image"
        src="https://placehold.co/1400x700"
        alt="background"
      />
      <div
        class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32"
      >
        <h1
          class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-black font-semibold"
        >
          About Us
        </h1>
        <div class="hidden lg:flex flex-row justify-center gap-4 mt-4">
          <nuxt-link
            to="/"
            class="text-base hover:text-red-500 md:text-lg lg:text-xl text-black font-bold"
            >Home</nuxt-link
          >
          <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right mt-1">
                                <path d="m9 18 6-6-6-6" />
                            </svg></p>
          <p class="text-base md:text-lg lg:text-xl text-black font-bold">
             About Us
          </p>
        </div>
      </div>
    </div>
    <section class="bg-white py-10">
      <div class="flex flex-col text-center items-center justify-center">
        <div class="mb-4">
          <h2 class="text-3xl lg:text-5xl font-bold text-primary">
            Provide the best travel experience for you
          </h2>
          <p class="text-gray-600 my-4">
            We understand that every journey has unique needs. Therefore, we
            offer customized travel packages designed according to your
            preferences and budget.
          </p>
        </div>
        <div class="flex flex-col md:flex-row justify-center gap-5">
          <div
            class="flex flex-col items-center bg-[#e6f7f4] rounded-xl p-4 lg:p-8 mb-4 md:mb-0 border"
          >
            <div class="h-12 mb-10">
              <img
                src="https://ccdstest.b-cdn.net/Jaipur%20Darshan/mission.png"
                alt="Our Vision"
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
            <div class="h-12 mb-10">
              <img
                src="https://ccdstest.b-cdn.net/Jaipur%20Darshan/vission.png"
                alt="Our Mission"
              />
            </div>
            <h3 class="font-semibold text-lg lg:text-3xl mb-2">Our Mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              veniam magni minus placeat amet distinctio.
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
          <div class="text-orange-500 text-5xl mb-3">🗺️</div>
          <h3 class="font-semibold text-lg">Lots of choices</h3>
          <p>
            Thousands of the best destinations are ready to spoil your eyes.
          </p>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-lg">
          <div class="text-orange-500 text-5xl mb-3">🗺️</div>
          <h3 class="font-semibold text-lg">Lots of choices</h3>
          <p>
            Thousands of the best destinations are ready to spoil your eyes.
          </p>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-lg">
          <div class="text-orange-500 text-5xl mb-3">🗺️</div>
          <h3 class="font-semibold text-lg">Lots of choices</h3>
          <p>
            Thousands of the best destinations are ready to spoil your eyes.
          </p>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-lg">
          <div class="text-orange-500 text-5xl mb-3">🗺️</div>
          <h3 class="font-semibold text-lg">Lots of choices</h3>
          <p>
            Thousands of the best destinations are ready to spoil your eyes.
          </p>
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
              class=" object-cover rounded-lg"
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
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: "John Marvel",
          role: "Travel Expert Team",
          photo: "https://via.placeholder.com/400x400",
        },
        {
          id: 2,
          name: "Jane Doe",
          role: "Booking Specialist",
          photo: "https://via.placeholder.com/400x400",
        },
        {
          id: 3,
          name: "Sam Smith",
          role: "Customer Service Lead",
          photo: "https://via.placeholder.com/400x400",
        },
        {
          id: 4,
          name: "Alex Johnson",
          role: "Tour Guide",
          photo: "https://via.placeholder.com/400x400",
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
