<template>
    <Navbar />
       
        <div class="bg-white pt-20 px-4 md:px-10 space-y-11">
            <div class="w-full text-black">
                <!-- Banner and Navigation Links -->
                <div class="relative">
                    <img class="background-image" src="https://placehold.co/1400x700" alt="background" />
                    <div class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32">
                        <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">Car Tours</h1>
                        <div class="hidden lg:flex flex-row justify-center items-center gap-4 my-4">
                            <nuxt-link to="/" class="text-base hover:text-red-500 md:text-lg lg:text-xl xl:text-2xl">Home</nuxt-link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-chevron-right mt-1">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                            <p class="text-base md:text-lg lg:text-xl xl:text-2xl">Car Tours</p>
                        </div>
                    </div>
                </div>

                <!-- Content Sections -->
                <div class="mt-5 px-4 md:px-10 ">
                    <h1 class="text-2xl text-primary mb-2">Car Tour Services and Places</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet cumque saepe illo mollitia repellat, placeat unde, nam quae molestias enim esse adipisci ipsa recusandae laudantium. Sit, at nesciunt. Esse maxime vel molestiae corporis eligendi possimus ut nesciunt eos nulla consequatur dolorum delectus repellendus suscipit neque labore, optio in amet.</p>
                </div>

                <!-- Car Tour Packages -->
                <div v-for="(pkg, index) in packages" :key="index">
                    <h1 class="font-bold text-2xl mt-8 px-4 md:px-10 text-primary">{{ pkg.title }}</h1>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-10  py-10 ">
                        <nuxt-link 
                            v-for="(car, carIndex) in pkg.cars" 
                            :key="carIndex" 
                            :to="car.link" 
                            class="card flex flex-col justify-center items-center bg-slate-100 rounded-lg p-6 text-secondary shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                            <img :src="car.image" :alt="car.name" class="w-full object-cover rounded-lg mb-4" />
                            <h1 class="text-xl font-semibold">{{ car.name }}</h1>
                            <div class="text-3xl font-bold mt-2">{{ car.price }} INR</div>
                        </nuxt-link>
                    </div>
                </div>

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
            packages: [
                {
                    title: 'Jaipur Darshan ( Package For 2 Days )',
                    cars: [
                        { name: 'Swift Dzire', price: 2500, image: 'https://placehold.co/500x350/png', link: '/packages2/car1' },
                        { name: 'Ertiga', price: 3000, image: 'https://placehold.co/500x350/png', link: '/packages2/car2' },
                        { name: 'Innova Crysta', price: 4500, image: 'https://placehold.co/500x350/png', link: '/packages2/car3' }
                    ]
                },
                {
                    title: 'Jaipur to Ranthambhore ( Package For 2 Days )',
                    cars: [
                        { name: 'Swift Dzire', price: 2500, image: 'https://placehold.co/500x350/png', link: '/packages2/car4' },
                        { name: 'Ertiga', price: 3000, image: 'https://placehold.co/500x350/png', link: '/packages2/car5' },
                        { name: 'Innova Crysta', price: 4500, image: 'https://placehold.co/500x350/png', link: '/packages2/car6' }
                    ]
                },
                {
                    title: 'Jaipur to Ajmer & Pushkar ( Package For 1 Day )',
                    cars: [
                        { name: 'Swift Dzire', price: 2500, image: 'https://placehold.co/500x350/png', link: '/packages2/car7' },
                        { name: 'Ertiga', price: 3000, image: 'https://placehold.co/500x350/png', link: '/packages2/car8' },
                        { name: 'Innova Crysta', price: 4500, image: 'https://placehold.co/500x350/png', link: '/packages2/car9' }
                    ]
                },
                {
                    title: 'Jaipur to Agra & Fathapur Sikri ( Package For 1 Day )',
                    cars: [
                        { name: 'Swift Dzire', price: 3000, image: 'https://placehold.co/500x350/png', link: '/packages2/car10' },
                        { name: 'Innova Crysta', price: 4000, image: 'https://placehold.co/500x350/png', link: '/packages2/car11' }
                    ]
                },
                {
                    title: 'Jaipur to Khatu Shyam Ji ( Package For 1 Day )',
                    cars: [
                        { name: 'Swift Dzire', price: 2500, image: 'https://placehold.co/500x350/png', link: '/packages2/car12' },
                        { name: 'Ertiga', price: 3000, image: 'https://placehold.co/500x350/png', link: '/packages2/car13' },
                        { name: 'Innova Crysta', price: 4500, image: 'https://placehold.co/500x350/png', link: '/packages2/car14' }
                    ]
                },
                {
                    title: 'Jaipur to Khatu Shyam Ji & Salasar Balaji ( Package For 1 Day )',
                    cars: [
                        { name: 'Swift Dzire', price: 4500, image: 'https://placehold.co/500x350/png', link: '/packages2/car15' },
                        { name: 'Innova Crysta', price: 7000, image: 'https://placehold.co/500x350/png', link: '/packages2/car16' }
                    ]
                },
                {
                    title: 'Jaipur to Mehandipur Balaji ( Package For 1 Day )',
                    cars: [
                        { name: 'Swift Dzire', price: 3500, image: 'https://placehold.co/500x350/png', link: '/packages2/car17' },
                        { name: 'Ertiga', price: 4500, image: 'https://placehold.co/500x350/png', link: '/packages2/car18' }
                    ]
                },
                {
                    title: 'Jaipur to Abhaneri & Bhangarh ( Package For 1 Day )',
                    cars: [
                        { name: 'Swift Dzire', price: 4000, image: 'https://placehold.co/500x350/png', link: '/packages2/car19' }
                    ]
                }
            ]
        };
    }
};
</script>

<style scoped>
.card {
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
    background-image: #f1f5f9;
    color: black;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.card img {
    border-radius: 8px;
}

.card:hover {
    transform: scale(1.05);
    background-image: #f1f5f9;
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
</style>