<template>
    <Navbar />
    <div class="bg-[#f1f1f1]">
      <div class="w-full text-black">
        <div class="relative">
          <img src="https://placehold.co/1600x400/png" alt="" class="w-full h-auto" />
          <div class="absolute inset-0 flex flex-col items-center justify-center pt-20 md:pt-40">
            <h1 class="text-3xl md:text-4xl lg:text-5xl text-center">Contact Us</h1>
            <div class="flex flex-col md:flex-row justify-center gap-4 mt-4">
              <nuxt-link to="/" class="text-base md:text-lg lg:text-xl">Home</nuxt-link>
              <p class="text-base md:text-lg lg:text-xl ">Contact Us</p>
            </div>
          </div>
        </div>
        <div class="text-black mt-5 flex flex-col items-center px-4 md:px-8 lg:px-16 py-8 md:py-10">
          <h1 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">HAVE A QUESTION OR PROBLEM?</h1>
          <p class="text-lg md:text-xl lg:text-2xl font-semibold text-center">WE CAN HELP</p>
  
          <div class="flex flex-col md:flex-row gap-8 md:gap-10 mt-8 md:mt-10">
            <div class="w-full md:w-1/2 lg:w-1/3">
              <div class="flex items-start gap-4 md:gap-5 mb-8 md:mb-10">
                <div class="mt-2 md:mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#dc2985" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h1 class="text-base md:text-lg lg:text-xl font-semibold">Head Office</h1>
                  <p class="mt-1 text-sm md:text-base lg:text-lg">Shop No. B-20, Maharani Market, In House, Hotel Arco Palace, Near Sindhi Camp Bus Stop, Station Road, Jaipur (Raj). INDIA 302006</p>
                </div>
              </div>
              <div class="flex items-start gap-4 md:gap-5 mb-8 md:mb-10">
                <div class="mt-2 md:mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#dc2985" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <div>
                  <h1 class="text-base md:text-lg lg:text-xl font-semibold">Contact Number</h1>
                  <p class="mt-1 text-sm md:text-base lg:text-lg"><nuxt-link to="tel:+91-9929358785">+91-9929358785</nuxt-link></p>
                  <p class="text-sm md:text-base lg:text-lg"><nuxt-link to="tel:+91-9660220533">+91-9660220533</nuxt-link></p>
                  <p class="text-sm md:text-base lg:text-lg"><nuxt-link to="tel:141-40548240">141-40548240</nuxt-link></p>
                </div>
              </div>
              <div class="flex items-start gap-4 md:gap-5 mb-8 md:mb-10">
                <div class="mt-2 md:mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#dc2985" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h1 class="text-base md:text-lg lg:text-xl font-semibold">Email</h1>
                  <p class="mt-1 text-sm md:text-base lg:text-lg"><nuxt-link to="mailto:info@thepinkcityholidays.com">info@thepinkcityholidays.com</nuxt-link></p>
                  <p class="text-sm md:text-base lg:text-lg"><nuxt-link to="mailto:thepinkcityholidays@gmail.com">thepinkcityholidays@gmail.com</nuxt-link></p>
                </div>
              </div>
              <div class="flex items-start gap-4 md:gap-5 mb-8 md:mb-10">
                <div class="mt-2 md:mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#dc2985" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h1 class="text-base md:text-lg lg:text-xl font-semibold">Website</h1>
                  <p class="mt-1 text-sm md:text-base lg:text-lg"><nuxt-link to="http://www.thepinkcityholidays.com">www.thepinkcityholidays.com</nuxt-link></p>
                </div>
              </div>
            </div>
            <div class="px-4 md:px-5 lg:px-8 w-full md:w-2/3 lg:w-1/2 mt-5 border shadow-2xl flex flex-col justify-center items-center bg-white">
              <h1 class="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold">Enquiry Now</h1>
              <input class="bg-white mt-4 px-3  md:mt-5 py-3 w-full rounded-md border border-slate-500" type="text" id="first-name" placeholder="First Name">
              <input class="bg-white mt-4 px-3  md:mt-5 py-3 w-full rounded-md border border-slate-500" type="email" id="email" placeholder="Email">
              <input class="bg-white mt-4  px-3 md:mt-5 py-3 w-full rounded-md border border-slate-500" type="tel" id="contact-number" placeholder="Contact Number">
              <input class="bg-white mt-4  px-3 md:mt-5 py-3 w-full rounded-md border border-slate-500" type="text" id="city" placeholder="City">
              <textarea class="bg-white mt-4  px-3 md:mt-5 w-full py-3 px-2 rounded-md border border-slate-500" id="message" placeholder="Your Message"></textarea>
              <button class="px-4 md:px-5 py-2 mt-6 md:mt-8 rounded-md bg-pink-700 text-white w-full">SEND A MESSAGE</button>
            </div>
          </div>
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
      font-size: 1.5rem;
    }
    .text-3xl {
      font-size: 1.25rem;
    }
    .text-2xl {
      font-size: 1rem;
    }
    .text-xl {
      font-size: 0.875rem;
    }
    .py-10 {
      padding-top: 2.5rem;
     
    }
  }
  </style>