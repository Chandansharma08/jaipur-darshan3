<template>
  <section class="dots-container flex items-center justify-center h-full w-full">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </section>
</template>

<script setup>
// No additional script needed for this simple component
</script>

<style scoped>
.dots-container {
  @apply flex items-center justify-center h-screen w-full;
}

.dot {
  @apply h-5 w-5 mr-2.5 rounded-full bg-orange-200; /* Changed to orange color */
  animation: pulse 1.5s infinite ease-in-out;
}

.dot:last-child {
  @apply mr-0;
}

.dot:nth-child(1) {
  animation-delay: -0.3s;
}

.dot:nth-child(2) {
  animation-delay: -0.1s;
}

.dot:nth-child(3) {
  animation-delay: 0.1s;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    background-color: #ffb74d; /* Changed to orange color */
    box-shadow: 0 0 0 0 rgba(255, 183, 77, 0.7); /* Adjusted shadow color to match orange */
  }
  50% {
    transform: scale(1.2);
    background-color: #ff9800; /* Changed to darker orange */
    box-shadow: 0 0 0 10px rgba(255, 183, 77, 0); /* Adjusted shadow color to match orange */
  }
  100% {
    transform: scale(0.8);
    background-color: #ffb74d; /* Changed to orange color */
    box-shadow: 0 0 0 0 rgba(255, 183, 77, 0.7); /* Adjusted shadow color to match orange */
  }
}
</style>
