<template>
  <div>
    <Navbar />
    <div class="bg-white pt-20">
      <div class="w-full text-black">
        <div class="relative">
          <img src="https://placehold.co/1600x400/png" alt="Banner Image" class="w-full h-auto" />
          <div class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32">
            <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">Bus Tours</h1>
            <div class="hidden lg:flex flex-row justify-center items-center gap-4 my-4">
              <nuxt-link to="/" class="text-base hover:text-red-500 md:text-lg lg:text-xl xl:text-2xl">Home</nuxt-link>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right mt-1"><path d="m9 18 6-6-6-6"/></svg>
              <p class="text-base md:text-lg lg:text-xl xl:text-2xl">Bus Tours</p>
            </div>
          </div>
        </div>
        <div class="mt-10 px-4 md:px-10 lg:px-20">
          <h1 class="text-2xl">Bus Tour Services and Places</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet cumque saepe illo mollitia repellat, placeat unde, nam quae molestias enim esse adipisci ipsa recusandae laudantium. Sit, at nesciunt. Esse maxime vel molestiae corporis eligendi possimus ut nesciunt eos nulla consequatur dolorum delectus repellendus suscipit neque labore, optio in amet.</p>
        </div>
        <h1 class="font-bold text-2xl mt-8 flex px-4 md:px-10 lg:px-20">Tour 1(Places of Attractions)</h1>
        <div class=" grid grid-cols-1 md:grid-cols-3 gap-4 md:gap px-4 md:px-10 lg:px-20 py-10">
          <div v-for="(bus, index) in buses" :key="index" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
            <img :src="bus.image" :alt="bus.name" class="w-auto h-auto" />
            <h1 class="text-red-500 mt-1 text-base">{{ bus.name }}</h1>
            <div class="flex items-center">
              <p class="text-red-500">INR</p>
              <p class="text-red-500 text-2xl">{{ bus.price }}RS</p>
            </div>
            <hr class="my-2 w-full h-0.5 bg-red-500" />
            <p class="text-gray-600">Per Person</p>
          </div>
        </div>
      
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 px-4 md:px-10 lg:px-20 py-10">
          <div v-for="(service, index) in services" :key="index" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
            <img :src="service.image" :alt="service.name" class="w-full h-auto" />
            <h1 class="md:text-xl py-2">{{ service.name }}</h1>
            
          </div>
        </div>
        <h1 class="font-bold text-2xl flex px-4 md:px-10 lg:px-20">Tour 2(Places of Attractions)</h1>
        <div class=" grid grid-cols-1 md:grid-cols-3 gap-4 md:gap px-4 md:px-10 lg:px-20 py-10">
          <div v-for="(bus, index) in buses" :key="index" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
            <img :src="bus.image" :alt="bus.name" class="w-auto h-auto" />
            <h1 class="text-red-500 mt-1 text-base">{{ bus.name }}</h1>
            <div class="flex items-center">
              <p class="text-red-500">INR</p>
              <p class="text-red-500 text-2xl">{{ bus.price }}RS</p>
            </div>
            <hr class="my-2 w-full h-0.5 bg-red-500" />
            <p class="text-gray-600">Per Person</p>
          </div>
          </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 px-4 md:px-10 lg:px-20 py-10">
          <div v-for="(service1, index) in services1" :key="index" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
            <img :src="service1.image" :alt="service1.name" class="w-full h-auto" />
            <h1 class="md:text-xl py-2">{{ service1.name }}</h1>
            
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
      buses: [
        { name: 'Non-AC Bus', price: 250, image: 'https://placehold.co/500x350/png' },
        { name: 'AC Bus', price: 300, image: 'https://placehold.co/500x350/png' },
        { name: 'Double Decker Bus', price: 250, image: 'https://placehold.co/500x350/png' }
        // Add more buses as needed
      ],
      services: [
        // { name: 'Rajmandir(Front View)', image: 'https://placehold.co/200x150/png'},
        // { name: 'Statue Circle', image: 'https://placehold.co/200x150/png'},
        // { name: 'Birla Temple (Laxminarayan Temple)', image: 'https://placehold.co/200x150/png'},
        // { name: 'Albert hall/Museum', image: 'https://placehold.co/200x150/png'},
        // { name: 'Ramniwas Bagh', image: 'https://placehold.co/200x150/png'},
        // { name: 'Pink City(On the way)', image: 'https://placehold.co/200x150/png'},
        // { name: 'Hawa Mahal(Front View)', image: 'https://placehold.co/200x150/png'},
        // { name: 'Observatory (Jantar Mantar)', image: 'https://placehold.co/200x150/png'},
        // { name: 'City Palace', image: 'https://placehold.co/200x150/png'},
        // { name: 'Art Gallery', image: 'https://placehold.co/200x150/png'},
        // { name: 'Gaitor', image: 'https://placehold.co/200x150/png'},
        // { name: 'Jal Mahal(Front View)', image: 'https://placehold.co/200x150/png'},
        // { name: 'Amber Fort/Sarla Temple', image: 'https://placehold.co/200x150/png'},
        // { name: 'Maotha Lake', image: 'https://placehold.co/200x150/png'},
       
        
        // Add more services as needed
      ],
      services1: [
        // { name: 'Jaigarh', image: 'https://placehold.co/200x150/png'},
        // { name: 'Nahargarh Fort/Palace', image: 'https://placehold.co/200x150/png'},
        // { name: 'Jaipur Wax Museum', image: 'https://placehold.co/200x150/png'},
        // { name: 'Amber Fort/Sarla Temple', image: 'https://placehold.co/200x150/png'},
        // { name: 'Maotha Lake', image: 'https://placehold.co/200x150/png'},
        // { name: 'Kanak Vrindavan', image: 'https://placehold.co/200x150/png'},
        // { name: 'Rajmandir(Front View)', image: 'https://placehold.co/200x150/png'},
        // { name: 'Statue Circle', image: 'https://placehold.co/200x150/png'},
        // { name: 'Birla Temple (Laxminarayan Temple)', image: 'https://placehold.co/200x150/png'},
        // { name: 'Albert hall/Museum', image: 'https://placehold.co/200x150/png'},
       
        
        // Add more services as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
