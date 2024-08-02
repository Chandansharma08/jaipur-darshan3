<template>
    <div v-html="data_temp">
        
    </div>
    <div>
this is blog
{{ route.params.slug }}
    </div>
</template>

<script setup>
const route = useRoute()
</script>


<style scoped>

</style>