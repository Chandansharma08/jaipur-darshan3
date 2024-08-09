<template>
    <div>
        <Navbar />
        <div class="bg-white pt-20">
            
            <div class="w-full text-black">
                <!-- Banner and Navigation Links -->
                <div class="relative">
                    <img src="https://placehold.co/1600x400/png" alt="Banner Image" class="w-full h-auto" />
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
                <div class="mt-10 px-4 md:px-10 lg:px-20">
                    <h1 class="text-2xl">Car Tour Services and Places</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet cumque saepe illo mollitia repellat, placeat unde, nam quae molestias enim esse adipisci ipsa recusandae laudantium. Sit, at nesciunt. Esse maxime vel molestiae corporis eligendi possimus ut nesciunt eos nulla consequatur dolorum delectus repellendus suscipit neque labore, optio in amet.</p>
                </div>
                
                <!-- Car Tour Packages -->
                <div v-for="(pkg, index) in packages" :key="index">
                    <h1 class="font-bold text-2xl mt-8 px-4 md:px-10 lg:px-20">{{ pkg.title }}</h1>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-10 lg:px-20 py-10">
                        <nuxt-link 
                            v-for="(car, carIndex) in pkg.cars" 
                            :key="carIndex" 
                            :to="car.link" 
                            class="card flex flex-col border rounded-md hover:shadow-xl items-center p-4 transition-transform transform hover:scale-105 hover:bg-gray-100">
                            <img :src="car.image" :alt="car.name" class="w-auto h-auto" />
                            <h1 class="text-red-500 mt-1 text-base">{{ car.name }}</h1>
                            <div class="flex items-center">
                                <p class="text-red-500">INR</p>
                                <p class="text-red-500 text-2xl">{{ car.price }} RS</p>
                            </div>
                           
                        </nuxt-link>
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
}

.card:hover {
    transform: scale(1.05);
    background-color: #f7f7f7;
}
</style>
