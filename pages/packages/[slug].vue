<template>
    <Navbar />
    <main class="pt-20 bg-[#ffffff]">
        <div class="py-5">
            <h1 class="font-semibold mb-4 text-2xl md:text-3xl lg:text-5xl mx-8 text-black" v-html="packageData.title"></h1>
            <div class="flex flex-col md:flex-row shadow m-8 p-6">
                <div class="w-full md:w-1/2 flex flex-col m-8 p-6">
                    <p class="px-6 py-4 text-xl" v-html="packageData.desc"></p>
                    <nuxt-link to="/contact" class="px-3 py-2 mx-6 bg-emerald-500 md:w-3/12 text-center font-semibold rounded-full text-white">Book Now</nuxt-link>
                </div>
                <img :src="packageData.mainImage" alt="packages Image" class="w-full md:w-1/2 object-cover mt-4 rounded-md">
            </div>
        </div>
    </main>
    <h2 class="text-4xl px-10 bg-[#ffffff]">Places Of Attractions:- </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 px-4 md:px-10 lg:px-20 py-10 bg-[#ffffff]">
        <NuxtLink v-for="(packageData, index) in packagesData" :key="index" class="relative overflow-hidden rounded-3xl group block">
            <img :src="packageData.image1" :alt="packageData.name" class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
            <h1 class="md:text-xl bg-opacity-60 ml-2 py-2 absolute bottom-3 left-0  text-center rounded-full px-3 text-black bg-white md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 ease-in-out transform md:translate-y-full md:group-hover:translate-y-0">{{ packageData.name }}</h1>
        </NuxtLink>
    </div>
    <Footer />
</template>

<script setup>
import { getAllPackagesData, getPackagesData } from "~/utils/packagesData.ts"

const route = useRoute()
const slug = route.params.slug

const packagesData = getPackagesData(slug)
const packageData = packagesData[0]
// const allPackagesData = getAllPackagesData()
</script>

<style scoped>
.md\:group-hover\:opacity-100:hover {
    opacity: 100;
}
.md\:group-hover\:translate-y-0:hover {
    transform: translateY(0);
}
</style>
