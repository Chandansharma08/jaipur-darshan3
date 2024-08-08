<template>
  <Navbar />
  <div class="bg-[#ffffff] pt-24">
    <div class="w-full text-black">
      <div class="relative">
        <img src="https://placehold.co/1600x400/png" alt="" class="w-full h-auto" />
        <div class="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 xl:pt-32">
          <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">Contact Us </h1>
          <div class="hidden lg:flex flex-row justify-center gap-4 mt-4">
            <nuxt-link to="/" class="text-base hover:text-red-500 md:text-lg lg:text-xl xl:text-2xl">Home</nuxt-link>
            <p class="text-base md:text-lg lg:text-xl xl:text-2xl">Contact Us</p>
          </div>
        </div>
      </div>
      <div class="text-black mt-5 px-4 md:px-8 lg:px-12 xl:px-16 py-8 md:py-10">
        <h1 class="text-xl text-emerald-500 md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center">HAVE A QUESTION OR PROBLEM?</h1>
        <p class="text-base text-emerald-500 md:text-lg lg:text-xl xl:text-2xl font-semibold text-center">WE CAN HELP</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mt-8 md:mt-10">
          <div class="flex flex-col items-center border border-black p-4 md:p-5 rounded-md">
            <img src="https://placehold.co/150x150/png" alt="Location Icon" class="w-16 h-16 md:w-20 md:h-20 mb-4" />
            <div class="text-center">
              <h1 class="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">Head Office</h1>
              <p class="mt-1 text-sm md:text-base lg:text-sm xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, repellendus!</p>
            </div>
          </div>
          <div class="flex flex-col items-center border border-black p-4 md:p-5 rounded-md">
            <img src="https://placehold.co/150x150/png" alt="Phone Icon" class="w-16 h-16 md:w-20 md:h-20 mb-4" />
            <div class="md:mr-5">
              <h1 class="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">Contact Number</h1>
              <p class="mt-1 text-sm md:text-base lg:text-sm xl:text-xl"><nuxt-link to="tel:+91-9929358785">+91-9929358785</nuxt-link></p>
              <p class="text-sm md:text-base lg:text-sm xl:text-xl"><nuxt-link to="tel:+91-9660220533">+91-9660220533</nuxt-link></p>
            </div>
          </div>
          <div class="flex flex-col items-center border border-black p-4 md:p-5 rounded-md">
            <img src="https://placehold.co/150x150/png" alt="Email Icon" class="w-16 h-16 md:w-20 md:h-20 mb-4" />
            <div class="text-center">
              <h1 class="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">Email</h1>
              <p class="mt-1 text-sm md:text-base lg:text-sm xl:text-xl"><nuxt-link to="mailto:info@thepinkcityholidays.com">info@thepinkcityholidays.com</nuxt-link></p>
              <p class="text-sm md:text-base lg:text-sm xl:text-xl"><nuxt-link to="mailto:thepinkcityholidays@gmail.com">thepinkcityholidays@gmail.com</nuxt-link></p>
            </div>
          </div>
          <div class="flex flex-col items-center border border-black p-4 md:p-5 rounded-md">
            <img src="https://placehold.co/150x150/png" alt="Website Icon" class="w-16 h-16 md:w-20 md:h-20 mb-4" />
            <div class="text-center">
              <h1 class="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">Website</h1>
              <p class="mt-1 text-sm md:text-base lg:text-sm xl:text-xl"><nuxt-link to="http://www.thepinkcityholidays.com">www.thepinkcityholidays.com</nuxt-link></p>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-hidden flex justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus" width="92%" height="480" style="border:0;" allowfullscreen="" loading="lazy" class="rounded-lg"></iframe>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
@media (max-width: 768px) {
  .text-5xl {
    font-size: 2rem;
  }
  
  .text-4xl {
    font-size: 1.75rem;
  }
  
  .text-3xl {
    font-size: 1.5rem;
  }
  
  .text-2xl {
    font-size: 1.25rem;
  }
  
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .text-5xl {
    font-size: 2.5rem;
  }
  
  .text-4xl {
    font-size: 2rem;
  }
  
  .text-3xl {
    font-size: 1.75rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
  
  .py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  .gap-4 {
    gap: 1rem;
  }
  
  .gap-6 {
    gap: 1.5rem;
  }
  
  .gap-8 {
    gap: 2rem;
  }
  
  .gap-10 {
    gap: 2.5rem;
  }
}

@media (min-width: 1025px) {
  .text-5xl {
    font-size: 3rem;
  }
  
  .text-4xl {
    font-size: 2.25rem;
  }
  
  .text-3xl {
    font-size: 2rem;
  }
  
  .text-2xl {
    font-size: 1.75rem;
  }
}
</style>
