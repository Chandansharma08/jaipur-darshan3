<template>
    <section class="bg-white ">
        <div class=" py-8">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl lg:text-4xl font-bold text-primary">Inspiration, Guides, Stories</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div v-for="(story, index) in stories" :key="index" class="bg-gray-100 rounded-lg shadow overflow-hidden">
                    <img :src="story.image" alt="story.title" class="">
                    <div class="p-4">
                        <div class="text-sm bg-gray-200 rounded px-4 py-2 mb-2 flex justify-between">
                            <div>
                                <span v-for="category in story.categories" :key="category" class="font-semibold mr-2">
                                    {{ category }}
                                </span>
                            </div>
                            <span>{{ story.date }}</span>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">{{ story.title }}</h3>
                        <p>{{ story.description }}</p>
                    </div>
                </div>
            </div>
            <!-- <div class="flex justify-center lg:justify-end py-8">
                <nuxt-link to="/"
                    class="border-2 border-primary font-semibold rounded-full px-4 py-2 text-primary hover:bg-primary hover:text-secondary">See
                    All Stories</nuxt-link>
            </div> -->
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            stories: [
                {
                    title: 'Fashion Outfit',
                    categories: ['Business'],
                    date: '6 Sep, 2016',
                    description: 'Lacus ut nisi ultrices faucibus. Pellentesque porta felis id erat...',
                    image: 'https://placehold.co/450x400'
                },
                {
                    title: 'You big profit',
                    categories: ['Business', 'Sports'],
                    date: '6 Sep, 2016',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam...',
                    image: 'https://placehold.co/450x400'
                },
                {
                    title: 'A happy family',
                    categories: ['Business', 'Sports'],
                    date: '6 Sep, 2016',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam...',
                    image: 'https://placehold.co/450x400'
                },
                {
                    title: 'A smile is a sign of friendliness',
                    categories: ['Business'],
                    date: '6 Sep, 2016',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam...',
                    image: 'https://placehold.co/450x400'
                }
            ]
        };
    }
};
</script>

<style scoped>
/* Styles remain unchanged as they are already suited for the updated layout */
</style>
