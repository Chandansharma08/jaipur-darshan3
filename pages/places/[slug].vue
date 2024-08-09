<template>
    <Navbar />
    <main class="pt-20 bg-[#ffffff]">
        <div class="">
            <div class="relative">
                <img class="background-image" src="https://placehold.co/1400x700" alt="background" />
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32">
                        <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">{{ placeData.title }}</h1>
                        
                    </div>
                </div>
            <div class="div">
                <p class="px-10 py-5 text-xl">{{ placeData.desc }}</p>
            </div>
        </div>
    </main>
    
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
