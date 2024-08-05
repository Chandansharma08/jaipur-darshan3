<template>
    <Navbar />
    <!-- <div v-html="data_temp">
    </div> -->
    <main class="pt-20 bg-[#ffffff]  ">
        <div class="py-5">
            <h1 class="font-semibold mb-4 text-2xl md:text-3xl lg:text-5xl mx-8 text-black" v-html="packageData.title">
            </h1>
            <div class="flex flex-col md:flex-row  shadow m-8 p-6">
                <div class="w-1/2 flex flex-col justify-between">
                    <p class=" px-6 py-4 text-xl" v-html="packageData.desc"></p>
                    <nuxt-link to="/contact" class="px-3 py-2 mx-6 bg-emerald-500 w-1/6 text-center font-semibold rounded-full text-white">Book Now</nuxt-link>
                </div>
                <img :src="packageData.mainImage" alt="packages Image"
                    class="w-1/2 object-cover lg:object-cover mt-4 rounded-md">
            </div>
        </div>
    </main>
    <h2 class="text-4xl px-10 bg-[#ffffff]">Places Of Attractions:- </h2>
    <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 px-4 md:px-10 lg:px-20 py-10 bg-[#ffffff]">
        <div v-for="(packageData) in packagesData" :key="index"
            class="flex flex-col border rounded-md hover:shadow-xl items-center p-4">
            <img :src="packageData.image1" :alt="packageData.name" class="w-full h-auto" />
            <h1 class="md:text-xl py-2">{{ packageData.name }}</h1>

        </div>
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


<style scoped></style>
<!-- {{ route.params.slug }} -->