<template>
    <section class="bg-white ">
      <div class="">
        <h2 class="text-3xl  lg:text-4xl font-semibold mb-6">Popular Activities</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          <!-- Video Item -->
          <div v-for="video in videos" :key="video.id" class="bg-black rounded-lg overflow-hidden relative shadow-lg">
            <iframe :src="video.url" frameborder="0"
                    class="w-full h-full min-h-[300px]"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-gray-900 to-transparent">
              <h3 class="text-white text-lg">{{ video.title }}</h3>
            </div>
          </div>
        </div>
        <div class="text-center md:text-right mt-12">
          <nuxt-link to="/review" class="text-emerald-500 bg-transparent hover:border-none border-2 border-emerald-500 hover:bg-emerald-600 rounded-full hover:text-white py-2 px-4">
            See More
          </nuxt-link>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videos: [
          {
            id: 1,
            title: '#1 Client Reviews',
            url: 'https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9'
          },
          {
            id: 2,
            title: '#2 Client Reviews',
            url: 'https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9'
          },
          {
            id: 3,
            title: '#3 Client Reviews',
            url: 'https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9'
          },
          {
            id: 3,
            title: '#3 Client Reviews',
            url: 'https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9'
          },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Styling specific to this component */
  </style>
  