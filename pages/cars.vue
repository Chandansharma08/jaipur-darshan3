<template>
  <div>
    <Navbar />
    <div class="bg-white pt-20">
      <div class="w-full text-black">
        <div class="relative">
          <img src="https://placehold.co/1600x400/png" alt="Banner Image" class="w-full h-auto" />
          <div class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32">
            <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center"></h1>
            <div class="hidden lg:flex flex-row justify-center items-center gap-4 my-4">
              <nuxt-link to="/" class="text-base hover: md:text-lg lg:text-xl xl:text-2xl">Home</nuxt-link>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-chevron-right mt-1">
                <path d="m9 18 6-6-6-6" />
              </svg>
              <p class="text-base md:text-lg lg:text-xl xl:text-2xl"></p>
            </div>
          </div>
        </div>
        <div class="mt-10 px-4 md:px-10 lg:px-20">
          <h1 class="text-2xl">Car Rental Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet cumque saepe illo mollitia
            repellat, placeat unde, nam quae molestias enim esse adipisci ipsa recusandae laudantium. Sit, at nesciunt.
            Esse maxime vel molestiae corporis eligendi possimus ut nesciunt eos nulla consequatur dolorum delectus
            repellendus suscipit neque labore, optio in amet.</p>
        </div>
        <div class="mt-10 px-4 md:px-10 lg:px-20">
          <h1 class="text-2xl">Packages For 2 Days</h1>
        </div>
        <div class="flex flex-wrap  gap-4 md:gap-10 px-4 md:px-10 lg:px-20 py-10">
          <div v-for="(car, index) in cars" :key="index"
            class="flex flex-col justify-center border rounded-md hover:shadow-xl items-center p-4 relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <img :src="car.image" :alt="car.name" class="w-full h-auto" />
            <h1 class="text-emerald-500 mt-2">{{ car.name }}</h1>
            <button
              class="p-2 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black rounded-full explore-button">Explore
              More</button>
          </div>
        </div>
        <h1 class=" text-2xl lg:px-20">Packages for 1 Days</h1>
        <h1 class="text-2xl lg:px-20 py-4"> 1.Jaipur To Ajmer&pushkar</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 px-4 md:px-10 lg:px-20 py-10">

          <div v-for="(service, index) in services" :key="index"
            class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
            <img :src="service.image" :alt="service.name" class="w-full h-auto" />
            <h1 class="text-emerald-500 py-2">{{ service.name }}</h1>
            <div class="flex justify-center mb-2">

            </div>
          </div>
        </div>
        <h1 class="text-2xl lg:px-20 py-4"> 2.Jaipur to Agra-fathapur sikri</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 px-4 md:px-10 lg:px-20 py-10">

          <div v-for="(service2 , index) in services2" :key="index"
            class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
            <img :src="service2.image" :alt="service2.name" class="w-full h-auto" />
            <h1 class="text-emerald-500 py-2">{{ service2.name }}</h1>
            <div class="flex justify-center mb-2">

            </div>
          </div>
        </div>
        <h1 class="text-2xl lg:px-20 py-4"> 3.Jaipur To khatu</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 px-4 md:px-10 lg:px-20 py-10">

          <div v-for="(service3 , index) in services3" :key="index"
            class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
            <img :src="service3.image" :alt="service3.name" class="w-full h-auto" />
            <h1 class="text-emerald-500 py-2">{{ service3.name }}</h1>
            <div class="flex justify-center mb-2">

            </div>
          </div>
        </div>
        <h1 class="text-2xl lg:px-20 py-4"> 4.Jaipur To khatu&Salasar</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 px-4 md:px-10 lg:px-20 py-10">

          <div v-for="(service4 , index) in services4" :key="index"
            class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
            <img :src="service4.image" :alt="service4.name" class="w-full h-auto" />
            <h1 class="text-emerald-500 py-2">{{ service4.name }}</h1>
            <div class="flex justify-center mb-2">

            </div>
          </div>
        </div>
        <h1 class="text-2xl lg:px-20 py-4"> 5.Jaipur To Mahandipur</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 px-4 md:px-10 lg:px-20 py-10">

          <div v-for="(service5, index) in services5" :key="index"
            class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
            <img :src="service5.image" :alt="service5.name" class="w-full h-auto" />
            <h1 class="text-emerald-500 py-2">{{ service5.name }}</h1>
            <div class="flex justify-center mb-2">

            </div>
          </div>
        </div>
        <h1 class="text-2xl lg:px-20 py-4"> 6.Jaipur To Abhaneri/bhangarh</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 px-4 md:px-10 lg:px-20 py-10">

          <div v-for="(service6, index) in services6" :key="index"
            class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
            <img :src="service6.image" :alt="service6.name" class="w-full h-auto" />
            <h1 class="text-emerald-500 py-2">{{ service6.name }}</h1>
            <div class="flex justify-center mb-2">

            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [
        { name: 'Package 1', price: 11, image: 'https://placehold.co/700x650/png' },
        { name: 'Package 2', price: 11, image: 'https://placehold.co/700x650/png' },
        // Add more cars as needed
      ],
      services: [
        { name: 'Dargah', image: 'https://placehold.co/200x150/png',  },
        { name: 'Anna Sagar', image: 'https://placehold.co/200x150/png',  },
        { name: 'Ajne view', image: 'https://placehold.co/200x150/png',  },
        { name: 'Brahma Temple', image: 'https://placehold.co/200x150/png',  },
        { name: 'Brahma Sarover', image: 'https://placehold.co/200x150/png',  },
        { name: 'Desert safari', image: 'https://placehold.co/200x150/png',  },


        // Add more services as needed
      ],
      services2: [
        { name: 'Akhbar Museum', image: 'https://placehold.co/200x150/png',  },
        { name: 'Taj Mahal', image: 'https://placehold.co/200x150/png',  },
        { name: 'Agra Fort', image: 'https://placehold.co/200x150/png',  },

        // Add more services as needed
      ],
      services3: [
        { name: '', image: 'https://placehold.co/200x150/png',  },
        { name: '', image: 'https://placehold.co/200x150/png',  },
        { name: '', image: 'https://placehold.co/200x150/png',  },

        // Add more services as needed
      ],
      services4: [
        { name: '', image: 'https://placehold.co/200x150/png',  },
        { name: '', image: 'https://placehold.co/200x150/png',  },
        { name: '', image: 'https://placehold.co/200x150/png',  },

        // Add more services as needed
      ],
      services5: [
        { name: '', image: 'https://placehold.co/200x150/png',  },
        { name: '', image: 'https://placehold.co/200x150/png',  },
        { name: '', image: 'https://placehold.co/200x150/png',  },

        // Add more services as needed
      ],
      services6: [
        { name: '', image: 'https://placehold.co/200x150/png',  },
        { name: '', image: 'https://placehold.co/200x150/png',  },
        { name: '', image: 'https://placehold.co/200x150/png',  },

        // Add more services as needed
      ],
      services5: [
        { name: '', image: 'https://placehold.co/200x150/png',  },
        { name: '', image: 'https://placehold.co/200x150/png',  },
        { name: '', image: 'https://placehold.co/200x150/png',  },

        // Add more services as needed
      ],
      services6: [
        { name: '', image: 'https://placehold.co/200x150/png',  },
        { name: '', image: 'https://placehold.co/200x150/png',  },
        { name: '', image: 'https://placehold.co/200x150/png',  },

        // Add more services as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Hide the button by default on smaller screens */
button {
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Show the button on hover for larger screens */
@media (min-width: 1024px) {

  /* Adjust this breakpoint if needed */
  .flex-col:hover button {
    opacity: 1;
  }
}

.explore-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Fix button position for mobile and tablet views */
@media (max-width: 1024px) {
  .explore-button {
    position: static;
    transform: none;
    opacity: 1;
    /* Ensure the button is visible */
    margin-top: 10px;
    /* Add some spacing */
  }
}
</style>
