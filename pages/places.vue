<template>
    <div class="bg-[#ffffff]">
        <Navbar />
        <div class="px-14 bg-[#ffffff]">
            <div class="py-8">
                <nuxt-link to="/" class="hover:text-green-500 my-2">Home</nuxt-link><span>/</span>
                <nuxt-link to="/" class="hover:text-green-500 my-2">Places</nuxt-link>
                <h1 class="text-2xl font-semibold">Places</h1>
                <p class="text-gray-600">Select country or city to explore</p>
                <div class="mt-4 flex gap-4 items-center">
                    <div class="flex-1">
                        <input type="text" placeholder="Search your places"
                            class="w-full text-black px-4 py-2 border rounded bg-white" />
                    </div>
                    <select class="px-4 py-2 border rounded cursor-pointer bg-white">
                        <option>Ascending</option>
                        <option>Descending</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="bg-white px-4 md:px-14 pb-6">
            <h2 class="text-xl md:text-2xl font-semibold mb-6">
                Top Destination For Your Next Vacation
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <NuxtLink v-for="(destination, index) in destinations" :key="index" :to="destination.url"
                    class="relative overflow-hidden rounded-lg group block">
                    <img :src="destination.image" :alt="destination.name"
                        class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-500">
                        <!-- Old Heading - Initially visible, hides on hover -->
                        <div class="absolute bottom-0 left-0 w-full transition-opacity duration-500">
                            <h3
                                class="text-white text-lg md:text-3xl font-semibold mb-2 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                {{ destination.name }}
                            </h3>
                            <p
                                class="text-white text-sm mb-4 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                {{ destination.description }}
                            </p>
                        </div>
                        <!-- Button - Initially hidden, appears in the center on hover -->
                        <NuxtLink :to="destination.url"
                            class="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 flex items-center justify-center">
                            <button
                                class="px-6 py-2 bg-transparent text-white text-sm rounded-full border border-white hover:bg-white hover:text-black">
                                More About
                            </button>
                        </NuxtLink>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            destinations: [
                {
                    name: "Bali",
                    image:
                        "https://travelwp.physcode.com/main-demo/wp-content/uploads/sites/7/2023/07/Tokyo.png",
                    description: "Discover Bali with our special tours",
                    url: "/places",
                },
                {
                    name: "Bangkok",
                    image: "https://placehold.co/300x400.png",
                    description: "Discover Bangkok with our special tours",
                    url: "/places",
                },
                {
                    name: "Cancun",
                    image: "https://placehold.co/300x400.png",
                    description: "Relax in Cancun with our beach tours",
                    url: "/places",
                },
                {
                    name: "Nha Trang",
                    image: "https://placehold.co/300x400.png",
                    description: "Explore Nha Trang with our city tours",
                    url: "/places",
                },
                {
                    name: "Nha Trang",
                    image: "https://placehold.co/300x400.png",
                    description: "Explore Nha Trang with our city tours",
                    url: "/places",
                },
                {
                    name: "Nha Trang",
                    image: "https://placehold.co/300x400.png",
                    description: "Explore Nha Trang with our city tours",
                    url: "/places",
                },
                {
                    name: "Nha Trang",
                    image: "https://placehold.co/300x400.png",
                    description: "Explore Nha Trang with our city tours",
                    url: "/places",
                },
                {
                    name: "Nha Trang",
                    image: "https://placehold.co/300x400.png",
                    description: "Explore Nha Trang with our city tours",
                    url: "/places",
                },
                {
                    name: "Nha Trang",
                    image: "https://placehold.co/300x400.png",
                    description: "Explore Nha Trang with our city tours",
                    url: "/places",
                },
                {
                    name: "Nha Trang",
                    image: "https://placehold.co/300x400.png",
                    description: "Explore Nha Trang with our city tours",
                    url: "/places",
                },
                {
                    name: "Nha Trang",
                    image: "https://placehold.co/300x400.png",
                    description: "Explore Nha Trang with our city tours",
                    url: "/places",
                },
                {
                    name: "Nha Trang",
                    image: "https://placehold.co/300x400.png",
                    description: "Explore Nha Trang with our city tours",
                    url: "/places",
                },
            ],
        };
    },
    methods: {
        selectDestination(index) {
            console.log(`Destination selected: ${this.destinations[index].name}`);
        },
    },

};
</script>

<style scoped>
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
    /* Scale up image on hover */
}

.group .group-hover\:opacity-100 {
    transition: opacity 0.5s ease-in-out;
}

.group .group-hover\:translate-y-0 {
    transition: transform 0.5s ease-in-out;
}
</style>