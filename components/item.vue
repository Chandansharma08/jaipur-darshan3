<template>
    <div class="w-full    ">
        <div class="absolute">
        <img :src=props.imgurl alt="" srcset="" class="w-full">
    </div>
        <div class="relative ml-4 mt-72 " >
            <h2>{{ props.placeName }}</h2>
            <p class="mb-2">{{ props.placeDes }}</p>
            <a class=" p-1  text-primary rounded-sm  hover:text-secondary hover:bg-slate-600" :href=props.url>click here</a>
        </div>
    </div>
</template> 
<script setup>
const props = defineProps(['placeName', 'placeDes', 'url', 'imgurl'])
</script>