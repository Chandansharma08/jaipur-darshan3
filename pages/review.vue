<template>
  <Navbar />
  <div
    class="bg-[#ffffff] text-black min-h-screen flex flex-col items-center p-5"
  >
    <header class="container mx-auto mb-10">
      <h1 class="text-3xl font-bold text-center">Our Customer Stories</h1>
    </header>
    <main class="container bg- p-8 rounded-lg shadow-lg mx-auto">
      <section>
        <div class="flex flex-col md:flex-row items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="General Manager"
            class="rounded-full w-32 h-32 mb-4 md:mb-0 md:mr-4"
          />
          <div>
            <h2 class="text-2xl font-semibold">Lorem ipsum dolor sit.</h2>
            <p class="text-sm">Lorem, ipsum.</p>
          </div>
        </div>
        <div class="mt-4">
          <p>
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, neque iure! Eius exercitationem iusto beatae
            repudiandae officiis reiciendis aperiam fugit. "
          </p>
          <p class="mt-2">
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            ipsa eius fuga dicta amet illum, repellendus modi, blanditiis neque
            obcaecati ex aperiam recusandae porro! Blanditiis facilis ipsa
            nostrum aut atque? "
          </p>
        </div>
      </section>
      <section class="mt-6">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </main>
  </div>
  <section class="bg-white py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold  flex items-end gap-2 mb-8"> <span> Popular Reviews </span><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b973c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-corner-right-down"><polyline points="10 15 15 20 20 15"/><path d="M4 4h7a4 4 0 0 1 4 4v12"/></svg></span> </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        <!-- Video Item -->
        <div
          v-for="video in videos"
          :key="video.id"
          class="bg-black rounded-lg overflow-hidden relative shadow-lg"
        >
          <iframe
            :src="video.url"
            frameborder="0"
            class="w-full h-full min-h-[300px]"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div
            class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-gray-900 to-transparent"
          >
            <h3 class="text-white text-lg">{{ video.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
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
            id: 4,
            title: '#1 Client Reviews',
            url: 'https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9'
          },
          {
            id: 5,
            title: '#2 Client Reviews',
            url: 'https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9'
          },
          {
            id: 5,
            title: '#3 Client Reviews',
            url: 'https://www.youtube.com/embed/l3j3qFIZzao?si=2bToPmr3SZlDt_s9'
          },
        ]
      };
    }
  };
</script>

<style>
/* You might want to add some global styles or specific modifications that Tailwind doesn't cover */
</style>
