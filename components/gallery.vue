<template>
    <section class=" bg-white">
        <div class="">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <div v-for="(photo, index) in photos" :key="index"
                    class="relative group cursor-pointer overflow-hidden">
                    <img :src="photo.image" alt=""
                        class=" object-cover transition-transform duration-300 group-hover:scale-110">
                    <div
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a :href="photo.instagramLink" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#fffff2" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-instagram">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            photos: [
                { image: 'https://ccdstest.b-cdn.net/Jaipur%20Darshan/434647155_1081293049610448_743026641637841177_n.jpg', instagramLink: 'https://instagram.com/yourlink1' },
                { image: 'https://placehold.co/320x400', instagramLink: 'https://instagram.com/yourlink2' },
                { image: 'https://ccdstest.b-cdn.net/Jaipur%20Darshan/434647155_1081293049610448_743026641637841177_n.jpg', instagramLink: 'https://instagram.com/yourlink3' },
                { image: 'https://placehold.co/320x400', instagramLink: 'https://instagram.com/yourlink4' },
                { image: 'https://ccdstest.b-cdn.net/Jaipur%20Darshan/434647155_1081293049610448_743026641637841177_n.jpg', instagramLink: 'https://instagram.com/yourlink4' },
                { image: 'https://placehold.co/320x400', instagramLink: 'https://instagram.com/yourlink4' },

                // Add more photos and Instagram links as needed
            ]
        };
    }
};
</script>

<style scoped>
/* Optional: Add any additional styles for customization */
</style>