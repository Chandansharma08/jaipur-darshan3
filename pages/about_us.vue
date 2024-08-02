<template>
  <Navbar />

  <div class="px-4 md:px-10 bg-[#ffffff] pt-20">
    <div class="bg-[#ffffff]">
      <div class="py-8">
        <nuxt-link to="/" class="hover:text-green-500 my-2">Home</nuxt-link
        ><span>/</span>
        <nuxt-link to="#" class="hover:text-green-500 my-2">About Us</nuxt-link>
        <h1 class="text-2xl font-semibold">About Us</h1>
        <p class="text-gray-600">Select country or city to explore</p>
      </div>
    </div>
    <img
      class="shadow-sm w-full rounded-xl bg-transparent"
      src="https://placehold.co/1400x400"
      alt="background"
      srcset=""
    />
    <section class="bg-white py-12">
      <div class="flex flex-col text-center items-center justify-center">
        <div class="max-w-lg mb-4">
          <h2 class="text-5xl font-bold text-gray-900">
            Provide the best travel experience for you
          </h2>
          <p class="text-gray-600 my-4">
            We understand that every journey has unique needs. Therefore, we
            offer customized travel packages designed according to your
            preferences and budget.
          </p>
        </div>
        <div class="flex space-x-8">
          <!-- Feature Item with inline SVG -->
          <div
            class="flex flex-col items-center bg-[#e6f7f4] rounded-xl p-4 lg:p-8 max-w-xl"
          >
            <!-- Inline SVG for Globe -->
            <div class="h-12 mb-10">
              <img
                src="https://ccdstest.b-cdn.net/Jaipur%20Darshan/mission.png"
                alt=""
              />
            </div>
            <h3 class="font-semibold text-lg lg:text-3xl mb-2">Our Vision</h3>
            <p>
              Our vision is to become a leading travel agency company that
              provides high-quality services and inspiration for our customer.
            </p>
          </div>

          <div
            class="flex flex-col items-center bg-[#e6f7f4] rounded-xl p-4 lg:p-8 max-w-xl"
          >
            <!-- Inline SVG for Globe -->
            <div class="h-12 mb-10">
              <img
                src="https://ccdstest.b-cdn.net/Jaipur%20Darshan/vission.png"
                alt=""
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
      class="min-h-screen bg-[#01806c] flex items-center justify-center my-6"
    >
      <!-- Hero Section -->
      <div class="text-center px-6">
        <h1 class="text-5xl font-bold text-white mb-2">
          Finding Your Dream Destination Is Our Priority
        </h1>
        <p class="text-white">
          With a collection of destinations that include stunning natural
          landscapes, vibrant cosmopolitan cities, and enchanting tropical
          islands, we take you to the world's most stunning places.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="mt-10 grid grid-cols-2 gap-8 px-6 max-w-4xl">
        <!-- Service 1 -->
        <div class="bg-white rounded-lg p-6 shadow-lg">
          <div class="text-orange-500 text-5xl mb-3">🗺️</div>
          <h3 class="font-semibold text-lg">Lots of choices</h3>
          <p>
            Thousands of the best destinations are ready to spoil your eyes.
          </p>
        </div>

        <!-- Service 2 -->
        <div class="bg-white rounded-lg p-6 shadow-lg">
          <div class="text-red-500 text-5xl mb-3">🏨</div>
          <h3 class="font-semibold text-lg">Accommodation</h3>
          <p>
            There are many choices of interesting destinations to make stories
            on your trip.
          </p>
        </div>

        <!-- Service 3 -->
        <div class="bg-white rounded-lg p-6 shadow-lg">
          <div class="text-blue-500 text-5xl mb-3">🎟️</div>
          <h3 class="font-semibold text-lg">Easy Booking</h3>
          <p>
            No need to be complicated in ordering tickets, order now with a few
            taps.
          </p>
        </div>

        <!-- Service 4 -->
        <div class="bg-white rounded-lg p-6 shadow-lg">
          <div class="text-purple-500 text-5xl mb-3">👥</div>
          <h3 class="font-semibold text-lg">Best Tour Guide</h3>
          <p>
            Don't worry about traveling anywhere, our tour guide is ready to
            guide you anytime.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 p-10">
    <div class=" mx-auto">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-800">Experienced Professionals With Best Service</h2>
        <p class="text-gray-600">Our team consists of experienced professionals highly committed to providing the best service to our customers.</p>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <!-- Loop through team members -->
        <div v-for="member in teamMembers" :key="member.id" class="relative group">
          <img :src="member.photo" :alt="member.name" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="text-white px-4 py-4">
              <p class="text-xl font-semibold">{{ member.name }}</p>
              <p>{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <Footer />
</template>
<script>
export default {
  data() {
    return {
      teamMembers: [
        { id: 1, name: 'John Marvel', role: 'Travel Expert Team', photo: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Jane Doe', role: 'Booking Specialist', photo: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Sam Smith', role: 'Customer Service Lead', photo: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Sam Smith', role: 'Customer Service Lead', photo: 'https://via.placeholder.com/150' },
        // Add more members as needed
      ]
    };
  }
}
</script>
<style>
/* Ensure the icons align properly if not using Tailwind's built-in icon approach */
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
}
</style>
