<template>  
  <div class="navbar bg-[#ffffff] md:px-10 fixed z-50 shadow-sm font-serif">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>
            <nuxt-link to="/about_us">About Us</nuxt-link>
          </li>
          <li><nuxt-link to="/places">Places</nuxt-link></li>
        <li><nuxt-link to="/top-destinations">Top Destinations</nuxt-link></li>
          <li><nuxt-link to="/packages2">Car Package</nuxt-link></li>
          <li><nuxt-link to="/packages">Bus Package</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
        </ul>
      </div>
      <nuxt-link to="/" class="btn btn-ghost text-2xl text-primary">Jaipur Darshan</nuxt-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-lg">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li>
          <nuxt-link to="/about_us">About Us</nuxt-link>
        </li>
        <li><nuxt-link to="/places">Places</nuxt-link></li>
        <li><nuxt-link to="/top-destinations">Top Destinations</nuxt-link></li>
        <li><nuxt-link to="/packages2">Car Package</nuxt-link></li>
        <li><nuxt-link to="/packages">Bus Package</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
      </ul>
    </div>
    <div class="navbar-end">
      <nuxt-link to="/contact" class="px-3 py-2 flex items-center justify-center bg-primary hover:bg-primary  text-secondary rounded-full"
        >Book Now</nuxt-link
      >
    </div>
  </div>
</template>
