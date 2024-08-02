<template>
    <section class="bg-white py-12">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold">Inspiration, Guides, Stories</h2>
                
            </div>
            <div class="overflow-hidden">
                <div class="flex transition-transform duration-200"
                    :style="{ 'transform': `translateX(-${currentIndex * 25}%)` }">
                    <div class="flex-none" v-for="(story, index) in stories" :key="index" style="width: 25%;">
                        <div class="flex flex-col items-left m-2 bg-gray-100 rounded-lg shadow">
                            <img :src="story.image" alt="" class="mb-4 rounded-t-lg w-full">
                            <div class="text-sm bg-gray-200 rounded px-4 py-2 flex justify-between">
                                <span v-for="category in story.categories" :key="category" class="font-semibold mr-2">{{
                                    category }}</span>
                                <span> {{ story.date }}</span>
                            </div>
                            <div class="flex flex-col py-2 px-2">
                                <h3 class="text-lg font-semibold my-2">{{ story.title }}</h3>
                                <p>{{ story.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center my-4">
                    <nuxt-link to="/"
                        class="border-2 border-emerald-500 font-semibold rounded-full px-4 py-2 text-emerald-500 hover:bg-emerald-500 hover:text-white ">See
                        All Stories</nuxt-link>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            stories: [
                {
                    title: 'Fashion Outfit',
                    categories: ['Business'],
                    date: '6 Sep, 2016',
                    description: 'Lacus ut nisi ultrices faucibus. Pellentesque porta felis id erat...',
                    image: 'https://via.placeholder.com/150'
                },
                {
                    title: 'You big profit',
                    categories: ['Business', 'Sports'],
                    date: '6 Sep, 2016',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam...',
                    image: 'https://via.placeholder.com/150'
                },
                {
                    title: 'A happy family',
                    categories: ['Business', 'Sports'],
                    date: '6 Sep, 2016',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam...',
                    image: 'https://via.placeholder.com/150'
                },
                {
                    title: 'A smile is a sign of friendliness',
                    categories: ['Business'],
                    date: '6 Sep, 2016',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam...',
                    image: 'https://via.placeholder.com/150'
                }
            ]
        };
    },
    methods: {
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.stories.length;
        },
        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.stories.length) % this.stories.length;
        }
    }
};
</script>

<style scoped>
button {
    background: none;
    border: none;
    cursor: pointer;
}
</style>