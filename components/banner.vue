<template>
    <div class="relative">
      <img
        class="background-image"
        src="https://ccdstest.b-cdn.net/Jaipur%20Darshan/Optimized-1723444765.705/artboard-3-at-2x-66b9ae168a4ac.webp"
        alt="background"
      />
      <div class="absolute inset-0 flex items-center justify-start p-8 lg:p-10 text-black">
        <div class="text-content max-w-md">
          <h2 class="text-2xl lg:text-3xl font-bold mb-4">Your Heading</h2>
          <p class="text-base lg:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style scoped>
  .relative {
    position: relative;
  }
  
  .background-image {
    width: 100%;
    height: auto;
    border-radius: 0.5rem; /* Rounded corners */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Shadow */
  }
  
  @media (max-width: 1023px) {
    .background-image {
      /* Image size for small and medium screens */
      content: url("https://ccdstest.b-cdn.net/Jaipur%20Darshan/Optimized-1723444765.705/artboard-3-at-2x-66b9ae168a4ac.webp");
    }
  }
  
  @media (min-width: 1024px) {
    .background-image {
      /* Image size for large, extra-large, and extra-extra-large screens */
      content: url("https://ccdstest.b-cdn.net/Jaipur%20Darshan/Optimized-1723444765.705/1400-by-400-at-2x-66b9ae167a844.webp");
    }
  }
  
  .text-content {
    max-width: 90%; /* Adjust as needed */
    
    padding: 1rem; /* Padding around text */
    border-radius: 8px; /* Optional: rounded corners for the text background */
  }
  
  /* Responsive text sizes */
  h2 {
    font-size: 2rem; /* Default for small screens */
  }
  
  @media (min-width: 768px) {
    h2 {
      font-size: 2.5rem; /* Medium screens */
    }
  }
  
  @media (min-width: 1024px) {
    h2 {
      font-size: 4rem; /* Large screens */
    }
  }
  
  p {
    font-size: 1rem; /* Default for small screens */
  }
  
  @media (min-width: 768px) {
    p {
      font-size: 1.125rem; /* Medium screens */
    }
  }
  
  @media (min-width: 1024px) {
    p {
      font-size: 1.25rem; /* Large screens */
    }
  }
  </style>
  