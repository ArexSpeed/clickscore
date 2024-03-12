<script setup lang="ts">
const { name } = defineProps(['name'])
</script>

<template>
    <div class="flex flex-col rounded-lg shadow-xl cursor-pointer min-w-24 min-h-24 bg-dark-secondary">
        <span>{{ name }}</span>
    </div>
</template>