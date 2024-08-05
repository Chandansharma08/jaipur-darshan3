<template>
    <div>
        <Navbar />
        <div class="bg-white pt-20">
            
            <div class="w-full text-black">
                <div class="relative">
                    <img src="https://placehold.co/1600x400/png" alt="Banner Image" class="w-full h-auto" />
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32">
                        <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">Bus Tours</h1>
                        <div class="hidden lg:flex flex-row justify-center items-center gap-4 my-4">
                            <nuxt-link to="/" class="text-base hover:text-red-500 md:text-lg lg:text-xl xl:text-2xl">Home</nuxt-link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-chevron-right mt-1">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                            <p class="text-base md:text-lg lg:text-xl xl:text-2xl">Bus Tours</p>
                        </div>
                    </div>
                </div>
                <div class="mt-10 px-4 md:px-10 lg:px-20">
                    <h1 class="text-2xl">Bus Tour Services and Places</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet cumque saepe illo
                        mollitia repellat, placeat unde, nam quae molestias enim esse adipisci ipsa recusandae
                        laudantium. Sit, at nesciunt. Esse maxime vel molestiae corporis eligendi possimus ut nesciunt
                        eos nulla consequatur dolorum delectus repellendus suscipit neque labore, optio in amet.</p>
                </div>
                <h1 class="font-bold text-2xl mt-8 flex px-4 md:px-10 lg:px-20">Tour 1 (Places of Attractions)</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap px-4 md:px-10 lg:px-20 py-10">
                    <nuxt-link rel="noopener noreferrer" v-for="(bus, index) in buses" :key="index" :to="bus.link" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
                        <img :src="bus.image" :alt="bus.name" class="w-auto h-auto" />
                        <h1 class="text-red-500 mt-1 text-base">{{ bus.name }}</h1>
                        <div class="flex items-center">
                            <p class="text-red-500">INR</p>
                            <p class="text-red-500 text-2xl">{{ bus.price }}RS</p>
                        </div>
                        <hr class="my-2 w-full h-0.5 bg-red-500" />
                        <p class="text-gray-600">Per Person</p>
                    </nuxt-link>
                </div>

                <h1 class="font-bold text-2xl flex px-4 md:px-10 lg:px-20">Tour 2 (Places of Attractions)</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap px-4 md:px-10 lg:px-20 py-10">
                    <nuxt-link rel="noopener noreferrer" v-for="(bus1, index) in buses1" :key="index" :to="bus1.link" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
                        <img :src="bus1.image" :alt="bus1.name" class="w-auto h-auto" />
                        <h1 class="text-red-500 mt-1 text-base">{{ bus1.name }}</h1>
                        <div class="flex items-center">
                            <p class="text-red-500">INR</p>
                            <p class="text-red-500 text-2xl">{{ bus1.price }}RS</p>
                        </div>
                        <hr class="my-2 w-full h-0.5 bg-red-500" />
                        <p class="text-gray-600">Per Person</p>
                    </nuxt-link>
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
                { name: 'Non-AC Bus', price: 250, image: 'https://placehold.co/500x350/png', link: '/packages/non-ac-bus' },
                { name: 'AC Bus', price: 300, image: 'https://placehold.co/500x350/png', link: '/packages/ac-bus' },
                { name: 'Double Decker Bus', price: 250, image: 'https://placehold.co/500x350/png', link: '/packages/double-decker-bus' }
                // Add more buses as needed
            ],
            buses1: [
                { name: 'Non-AC Bus', price: 250, image: 'https://placehold.co/500x350/png', link: '/packages/non-ac-bus1' },
                { name: 'AC Bus', price: 300, image: 'https://placehold.co/500x350/png', link: '/packages/ac-bus1' },
                { name: 'Double Decker Bus', price: 250, image: 'https://placehold.co/500x350/png', link: '/packages/double-decker-bus1' }
                // Add more buses as needed
            ]
        };
    }
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
