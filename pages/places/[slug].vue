<template>
    <Navbar />
    <main class="pt-20 bg-[#ffffff]">
        <div class="">
            <div class="relative">
                    <img src="https://placehold.co/1600x400/png" alt="Banner Image" class="w-full h-auto" />
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32">
                        <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">Places</h1>
                        
                    </div>
                </div>
            <h1 class="font-semibold mb-4 text-2xl md:text-3xl lg:text-5xl mx-8 text-black" v-html="placeData.title">
            </h1>
            <div class="flex flex-col-reverse md:flex-row shadow m-8 md:p-2 lg:p-6">
                <div class="w-full md:w-1/2 flex flex-col justify-evenly">
                    <p class="px-6 py-4 text-xl" v-html="placeData.desc"></p>
                    <nuxt-link to="/contact"
                        class="px-3 py-2 mx-6 flex mb-2 bg-emerald-500 lg:w-3/12 items-center justify-center text-center font-semibold rounded-full text-white">Book Now</nuxt-link>
                </div>
                <img :src="placeData.mainImage" alt="places Image"
                    class="w-full md:w-1/2 object-cover mt-4 rounded-md">
            </div>
        </div>
    </main>
    <div v-for="day in placeData?.days" :key="day.title">
        <h2 class="text-4xl px-10 bg-[#ffffff]">{{ day.title }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 px-4 md:px-10 lg:px-20 py-10 bg-[#ffffff]">
            <NuxtLink v-for="(destination, index) in day.destinations" :key="index"
                class="relative overflow-hidden rounded-3xl group block">
                <img :src="destination.image" :alt="destination.name" class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                <h1 class="md:text-xl bg-opacity-60 p-2 absolute bottom-4 rounded-full left-4 text-center  text-black bg-white md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 ease-in-out">{{ destination.name }}</h1>
            </NuxtLink>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { getAllPlacesData, getPlacesData } from "~/utils/placesData.ts"

const route = useRoute()
const slug = route.params.slug

const placesData = getPlacesData(slug)
const placeData = placesData[0]
// const allplacesData = getAllplacesData()
</script>

<style scoped>
.md\:group-hover\:translate-y-0:hover {
    transform: translateY(0);
}
.md\:group-hover\:translate-y-full {
    transform: translateY(100%);
}
.group-hover\:scale-110:hover {
    transform: scale(1.10);
}
@media (max-width: 768px) {
    .group-hover\:scale-110:hover {
        transform: none;
    }
    .group h1 {
        opacity: 1 !important;
        position: static !important;
        background-color: rgba(255, 255, 255, 0.8); /* Ensure the text background is visible */
        width: 100%; /* Ensure the text background covers the full width */
        text-align: center; /* Center align the text */
    }
}
</style>
