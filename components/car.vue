<template>
    <div class="  ">
        <div class="absolute ">
            <img :src=props.imgurl alt="" srcset="" class="full">
        </div>
        <div class=" relative  mt-72 left-6     ">
            <h2 class="font-extrabold">{{ props.placeName }}</h2>
            <p class="mb-5" >{{ props.placeDes }}</p>
            <a class=" p-1 text-lime-400 bg-transparent rounded-sm hover:bg-green-700 hover:text-white  ":href=props.url>See All Activities </a>
        </div>
    </div>

</template>

<script setup>
const props = defineProps(['placeName', 'placeDes', 'url', 'imgurl'])
</script>
