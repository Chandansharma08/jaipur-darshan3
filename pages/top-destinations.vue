<template>
  <Navbar />
  <LoadingSpinner v-if="isLoading" />

  <div v-else class="font-serif">
    <div class="relative pt-20 px-4 md:px-10 bg-[#ffffff]">
      <picture>
        <!-- Image for small and medium screens (sm and md) -->
        <source media="(max-width: 1023px)" :srcset="mainImage1" />
        <!-- Image for large and extra-large screens (lg and xl) -->
        <source media="(min-width: 1024px)" :srcset="mainImage2" />
        <!-- Fallback image (if no media queries match) -->
        <img :src="mainImage2" class="background-image" alt="background" />
      </picture>
      <div
        class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32"
      >
        <h1
          class="text-2xl md:text-3xl lg:text-4xl text-center text-black font-semibold"
        >
          Top Destinations
        </h1>
        <div class="hidden lg:flex flex-row justify-center gap-4 mt-4">
          <nuxt-link
            to="/"
            class="text-base hover:text-red-500 md:text-lg lg:text-xl text-black font-bold"
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
              class="lucide lucide-chevron-right mt-1"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
          <p class="text-base md:text-lg lg:text-xl text-black font-bold">
            Top Destinations
          </p>
        </div>
      </div>
    </div>
    <div class="px-4 md:px-24 space-y-11 bg-[#ffffff] py-10 text-center">
      <!-- Loop through the destinations array and create a card for each destination -->
      <div class="mb-4">
        <h2 class="text-3xl lg:text-5xl font-bold text-primary">
          ***** Explore Jaipur's Top Travel Spots *****
        </h2>
        <p class="text-black my-4">
          Discover Jaipur's most iconic landmarks and hidden gems. From majestic
          forts to stunning palaces, immerse yourself in the city's rich
          history.
        </p>
      </div>
      <div
        v-for="(destination, index) in destinations"
        :key="destination.title"
        class="bg-white shadow-lg rounded-lg mb-6 flex flex-col lg:flex-row items-center"
        :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
      >
        <!-- Destination Image -->
        <div class="lg:w-1/2 w-full p-6">
          <img
            :src="destination.image"
            :alt="destination.title"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- Destination Text -->
        <div class="lg:w-1/2 w-full p-6">
          <div class="flex gap-3 items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ca8a04"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-map-pinned"
            >
              <path
                d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
              />
              <circle cx="12" cy="8" r="2" />
              <path
                d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
              />
            </svg>
            <h2 class="text-2xl font-bold text-yellow-600">
              {{ destination.title }}
            </h2>
          </div>
          <p class="text-gray-700">{{ destination.description }}</p>
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
import LoadingSpinner from '~/components/LoadingSpinner.vue';

export default {
  components: {
    LoadingSpinner
  },
  mounted() {
    // Simulate an asynchronous operation and hide loader after it's done
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // Adjust the time as needed
  },
  data() {
    return {
      isLoading: true,
      destinations: [
        {
          title: "Amber Fort",
          description: `Amber Palace Fort, one of Jaipur's premier tourist attractions, majestically perches on a small hill approximately 11 km from the city center. This impressive fort, known as Amer Fort, is an expansive palace complex constructed with pale yellow and pink sandstone, primaryed by white marble. The fort is divided into four main sections, each with its own courtyard. Visitors to Amer Fort can explore numerous attractions, including the Diwan-e-Aam, various temples, and the famous Sheesh Mahal. The fort also features a network of underground tunnels connecting it to Jaigarh Fort, some of which have been restored and are now open to the public. Amer Fort is a stunning example of Rajasthani architecture and is a must-see destination. The experience is further enhanced by a captivating light and sound show that tells the rich history of the fort, offering an unforgettable spectacle.`,
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/destinations/amer-at-2x-8-66bb31588bc98.webp",
        },
        {
          title: "City Palace",
          description: `Nestled within the heart of the walled city, the City Palace Complex was designed and constructed by Maharaja Sawai Jai Singh II, the founder of Jaipur. This stunning blend of Mughal and Rajput architectural styles remains the residence of the last ruling royal family, who continue to live in a private section of the palace.`,
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/destinations/city-palace-at-2x-8-66bb3159ecf79.webp",
        },
        {
          title: "Hawa Mahal",
          description: `The iconic Hawa Mahal, or Palace of Winds, is often the first image that comes to mind when thinking of Jaipur, the capital of Rajasthan. Known as the 'Pink City,' Jaipur beautifully intertwines history, heritage, and architectural grandeur, with the rose-tinted sandstone Hawa Mahal standing out as one of its most visited and unique monuments. Interestingly, the 300-plus jharokhas (small windows) that create the monument’s unforgettable façade, attracting tens of thousands of tourists each year, are actually part of its backside. Additionally, the front façade does not provide direct access; instead, visitors must enter from the side through the City Palace, to which it is connected.`,
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/destinations/hawa-mahal-at-2x-8-66bb315a08f65.webp",
        },
        {
          title: "Nahargarh Fort",
          description: `Constructed in 1734 AD by Maharaja Sawai Jai Singh II, Nahargarh Fort, along with Amer and Jaigarh forts, formed a crucial defensive ring around Jaipur. Perched on one of the oldest hills of the Aravalli range, the fort offers stunning panoramic views of the Pink City. Within Nahargarh Fort, visitors can explore numerous buildings and structures. One notable site is a temple dedicated to the Rathore prince, Nahar Singh Bhomia. Another key attraction is the Madhavendra Bhawan, built by Sawai Madho Singh, and the Diwan-I-Aam, an open-air enclosure where the king would meet with commoners to hear their grievances and address their concerns.`,
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/destinations/nahargarh-at-2x-8-66bb315cb250f.webp",
        },
        {
          title: "Jaigarh Fort",
          description: `Jaigarh Fort is perched on the Cheel ka Teela, a prominent ridge in the Aravalli range, overlooking Amer Fort and Maota Lake near Amer in Jaipur, Rajasthan, India. Built in 1726 by Sawai Jai Singh, the fort was constructed to safeguard Amer Fort and its palace complex, and it was named in his honor.`,
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/destinations/jai-garh-at-2x-8-66bb315b54a57.webp",
        },
        {
          title: "Jantar Mantar",
          description: `The Jantar Mantar in Jaipur is a collection of 19 astronomical instruments constructed by the Rajput king Sawai Jai Singh II, the founder of Jaipur. Completed in 1734, this monument is home to the world's largest stone sundial and is recognized as a UNESCO World Heritage site. It is located near the City Palace and Hawa Mahal.`,
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/destinations/janatr-mantr-at-2x-8-66bb315c9bcab.webp",
        },
        {
          title: "Albert Hall Museum",
          description: `The Albert Hall Museum in Jaipur is the oldest museum in Rajasthan and serves as the state's official museum. Located in Ram Niwas Garden, just outside the city wall opposite New Gate, the building is a splendid example of Indo-Saracenic architecture. It is also known as the Government Central Museum.`,
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/destinations/albert-at-2x-8-66bb3158a0f1f.webp",
        },
        {
          title: "Ramniwas Bagh",
          description: `Ram Niwas Bagh is a historic garden located in the heart of Jaipur, Rajasthan. It was commissioned by Maharaja Sawai Ram Singh II in 1868 as a public garden to provide a green space for the people of Jaipur. Spanning 76 acres, the garden is home to a variety of attractions, including the Albert Hall Museum, a zoo, a bird park, and an art gallery. The garden's layout reflects a blend of Mughal and British architectural influences, featuring lush lawns, picturesque pathways, and decorative fountains. Ram Niwas Bagh has become a popular recreational spot for both locals and tourists, offering a tranquil escape from the hustle and bustle of the city while showcasing Jaipur's rich cultural heritage.`,
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/destinations/ramnivas-bagh-at-2x-8-66bb315df0a46.webp",
        },
        {
          title: "Jal Mahal",
          description: `Jal Mahal is a palace situated in the middle of Man Sagar Lake in Jaipur, the capital of Rajasthan, India. Originally built in 1699, the palace, along with the surrounding lake, was later renovated and expanded in the 18th century by Maharaja Jai Singh II of Amber.`,
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/destinations/jal-mahal-at-2x-8-66bb315b5d9a7.webp",
        },
        {
          title: "Birla Temple",
          description: `Birla Mandir refers to a series of Hindu temples constructed by the Birla family in various cities across India. These temples are known for their magnificent architecture, often crafted from white marble or sandstone.`,
          image:
            "https://ccdstest.b-cdn.net/Jaipur%20Darshan/destinations/vbirla-at-2x-8-66bb315e06271.webp",
        },
      ],
      mainImage1:
        "https://ccdstest.b-cdn.net/Jaipur%20Darshan/untitled-design-15-66bb0faa4b02f.webp", //1400x700px
      mainImage2:
        "https://ccdstest.b-cdn.net/Jaipur%20Darshan/untitled-design-14-66bb0faa27180.webp", //1400x400px
    };
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
/* Ensure the background image covers the area */
.background-image {
  width: 100%;
  height: auto;
  border-radius: 0.5rem; /* Rounded corners */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Shadow */
}
</style>
