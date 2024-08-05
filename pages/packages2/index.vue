<template>
    <div>
        <Navbar />
        <div class="bg-white pt-20">
            
            <div class="w-full text-black">
                <div class="relative">
                    <img src="https://placehold.co/1600x400/png" alt="Banner Image" class="w-full h-auto" />
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32">
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
                <div class="mt-10 px-4 md:px-10 lg:px-20">
                    <h1 class="text-2xl">Car Tour Services and Places</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet cumque saepe illo
                        mollitia repellat, placeat unde, nam quae molestias enim esse adipisci ipsa recusandae
                        laudantium. Sit, at nesciunt. Esse maxime vel molestiae corporis eligendi possimus ut nesciunt
                        eos nulla consequatur dolorum delectus repellendus suscipit neque labore, optio in amet.</p>
                </div>
                <h1 class="font-bold text-2xl mt-8 flex px-4 md:px-10 lg:px-20">Jaipur Darshan (  Package For 2 Days )</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap px-4 md:px-10 lg:px-20 py-10">
                    <nuxt-link rel="noopener noreferrer" v-for="(car, index) in cars" :key="index" :to="car.link" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
                        <img :src="car.image" :alt="car.name" class="w-auto h-auto" />
                        <h1 class="text-red-500 mt-1 text-base">{{ car.name }}</h1>
                        <div class="flex items-center">
                            <p class="text-red-500">INR</p>
                            <p class="text-red-500 text-2xl">{{ car.price }}RS</p>
                        </div>
                        <!-- <hr class="my-2 w-full h-0.5 bg-red-500" /> -->
                        <!-- <p class="text-gray-600">Per Person</p> -->
                    </nuxt-link>
                </div>

                <h1 class="font-bold text-2xl flex px-4 md:px-10 lg:px-20">Jaipur to Ranthambhore (  Package For 2 Days )</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap px-4 md:px-10 lg:px-20 py-10">
                    <nuxt-link rel="noopener noreferrer" v-for="(car1, index) in cars1" :key="index" :to="car1.link" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
                        <img :src="car1.image" :alt="car1.name" class="w-auto h-auto" />
                        <h1 class="text-red-500 mt-1 text-base">{{ car1.name }}</h1>
                        <div class="flex items-center">
                            <p class="text-red-500">INR</p>
                            <p class="text-red-500 text-2xl">{{ car1.price }}RS</p>
                        </div>
                        <hr class="my-2 w-full h-0.5 bg-red-500" />
                        <p class="text-gray-600">Per Person</p>
                    </nuxt-link>
                </div>
                <h1 class="font-bold text-2xl flex px-4 md:px-10 lg:px-20">Jaipur to Ajmer & Pushkar (  Package For 1 Day )</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap px-4 md:px-10 lg:px-20 py-10">
                    <nuxt-link rel="noopener noreferrer" v-for="(car2, index) in cars2" :key="index" :to="car2.link" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
                        <img :src="car2.image" :alt="car2.name" class="w-auto h-auto" />
                        <h1 class="text-red-500 mt-1 text-base">{{ car2.name }}</h1>
                        <div class="flex items-center">
                            <p class="text-red-500">INR</p>
                            <p class="text-red-500 text-2xl">{{ car2.price }}RS</p>
                        </div>
                        <hr class="my-2 w-full h-0.5 bg-red-500" />
                        <p class="text-gray-600">Per Person</p>
                    </nuxt-link>
                </div>
                <h1 class="font-bold text-2xl flex px-4 md:px-10 lg:px-20">Jaipur to Agra & Fathapur Sikri (  Package For 1 Day )</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap px-4 md:px-10 lg:px-20 py-10">
                    <nuxt-link rel="noopener noreferrer" v-for="(car3, index) in cars3" :key="index" :to="car3.link" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
                        <img :src="car3.image" :alt="car3.name" class="w-auto h-auto" />
                        <h1 class="text-red-500 mt-1 text-base">{{ car3.name }}</h1>
                        <div class="flex items-center">
                            <p class="text-red-500">INR</p>
                            <p class="text-red-500 text-2xl">{{ car3.price }}RS</p>
                        </div>
                        <hr class="my-2 w-full h-0.5 bg-red-500" />
                        <p class="text-gray-600">Per Person</p>
                    </nuxt-link>
                </div>
                <h1 class="font-bold text-2xl flex px-4 md:px-10 lg:px-20">Jaipur to Khatu Shyam Ji (  Package For 1 Day )</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap px-4 md:px-10 lg:px-20 py-10">
                    <nuxt-link rel="noopener noreferrer" v-for="(car4, index) in cars4" :key="index" :to="car4.link" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
                        <img :src="car4.image" :alt="car4.name" class="w-auto h-auto" />
                        <h1 class="text-red-500 mt-1 text-base">{{ car4.name }}</h1>
                        <div class="flex items-center">
                            <p class="text-red-500">INR</p>
                            <p class="text-red-500 text-2xl">{{ car4.price }}RS</p>
                        </div>
                        <hr class="my-2 w-full h-0.5 bg-red-500" />
                        <p class="text-gray-600">Per Person</p>
                    </nuxt-link>
                </div>
                <h1 class="font-bold text-2xl flex px-4 md:px-10 lg:px-20">Jaipur to Khatu Shyam Ji & Salasar Balaji (  Package For 1 Day )</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap px-4 md:px-10 lg:px-20 py-10">
                    <nuxt-link rel="noopener noreferrer" v-for="(car5, index) in cars5" :key="index" :to="car5.link" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
                        <img :src="car5.image" :alt="car5.name" class="w-auto h-auto" />
                        <h1 class="text-red-500 mt-1 text-base">{{ car5.name }}</h1>
                        <div class="flex items-center">
                            <p class="text-red-500">INR</p>
                            <p class="text-red-500 text-2xl">{{ car5.price }}RS</p>
                        </div>
                        <hr class="my-2 w-full h-0.5 bg-red-500" />
                        <p class="text-gray-600">Per Person</p>
                    </nuxt-link>
                </div>
                <h1 class="font-bold text-2xl flex px-4 md:px-10 lg:px-20">Jaipur to Mehndipur Balaji ( Package For 1 Day )</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap px-4 md:px-10 lg:px-20 py-10">
                    <nuxt-link rel="noopener noreferrer" v-for="(car6, index) in cars6" :key="index" :to="car6.link" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
                        <img :src="car6.image" :alt="car6.name" class="w-auto h-auto" />
                        <h1 class="text-red-500 mt-1 text-base">{{ car6.name }}</h1>
                        <div class="flex items-center">
                            <p class="text-red-500">INR</p>
                            <p class="text-red-500 text-2xl">{{ car6.price }}RS</p>
                        </div>
                        <hr class="my-2 w-full h-0.5 bg-red-500" />
                        <p class="text-gray-600">Per Person</p>
                    </nuxt-link>
                </div>
                <h1 class="font-bold text-2xl flex px-4 md:px-10 lg:px-20">Jaipur to Abhaneri & Bhangarh ( Package For 1 Day )</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap px-4 md:px-10 lg:px-20 py-10">
                    <nuxt-link rel="noopener noreferrer" v-for="(car7, index) in cars7" :key="index" :to="car7.link" class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
                        <img :src="car7.image" :alt="car7.name" class="w-auto h-auto" />
                        <h1 class="text-red-500 mt-1 text-base">{{ car7.name }}</h1>
                        <div class="flex items-center">
                            <p class="text-red-500">INR</p>
                            <p class="text-red-500 text-2xl">{{ car7.price }}RS</p>
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
            cars: [
                { name: 'Swift Dzire', price: 2500, image: 'https://placehold.co/500x350/png', link: '/packages2/car1' },
                { name: 'Ertiga', price: 3000, image: 'https://placehold.co/500x350/png', link: '/packages2/car2' },
                { name: 'Innova Crysta', price: 4500, image: 'https://placehold.co/500x350/png', link: '/packages2/car3' }
                // Add more cars as needed
            ],
            cars1: [
                { name: 'Swift Dzire', price: 2500, image: 'https://placehold.co/500x350/png', link: '/packages2/car4' },
                { name: 'Ertiga', price: 3000, image: 'https://placehold.co/500x350/png', link: '/packages2/car5' },
                { name: 'Innova Crysta', price: 4500, image: 'https://placehold.co/500x350/png', link: '/packages2/car6' }
                // Add more cars as needed
            ],
            cars2: [
                { name: 'Swift Dzire', price: 2500, image: 'https://placehold.co/500x350/png', link: '/packages2/car7' },
                { name: 'Ertiga', price: 3000, image: 'https://placehold.co/500x350/png', link: '/packages2/car8' },
                { name: 'Innova Crysta', price: 4500, image: 'https://placehold.co/500x350/png', link: '/packages2/car9' }
                // Add more cars as needed
            ],
            cars3: [
                { name: 'Swift Dzire', price: 3000, image: 'https://placehold.co/500x350/png', link: '/packages2/car10' },
                
                { name: 'Innova Crysta', price: 4000, image: 'https://placehold.co/500x350/png', link: '/packages2/car11' }
                // Add more cars as needed
            ],
            cars4: [
                { name: 'Swift Dzire', price: 2500, image: 'https://placehold.co/500x350/png', link: '/packages2/car12' },
                { name: 'Ertiga', price: 3000, image: 'https://placehold.co/500x350/png', link: '/packages2/car13' },
                { name: 'Innova Crysta', price: 4500, image: 'https://placehold.co/500x350/png', link: '/packages2/car14' }
                // Add more cars as needed
            ],
            cars5: [
                { name: 'Swift Dzire', price: 4500, image: 'https://placehold.co/500x350/png', link: '/packages2/car15' },
                
                { name: 'Innova Crysta', price: 7000, image: 'https://placehold.co/500x350/png', link: '/packages2/car16' }
                // Add more cars as needed
            ],
            cars6: [
                { name: 'Swift Dzire', price: 3500, image: 'https://placehold.co/500x350/png', link: '/packages2/car17' },
                { name: 'Ertiga', price: 4500, image: 'https://placehold.co/500x350/png', link: '/packages2/car18' },
                
                // Add more cars as needed
            ],
            cars7: [
                { name: 'Swift Dzire', price: 4000, image: 'https://placehold.co/500x350/png', link: '/packages2/car19' },
                
                // Add more cars as needed
            ],
        };
    }
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
