<script setup lang="ts">
import { RouterLink } from 'vue-router';

const { name, link } = defineProps(['name', 'link'])
</script>

<template>
    <RouterLink :to="link" class="flex flex-col min-w-40 min-h-40 bg-dark-secondary rounded-lg shadow-xl">
        <span>{{ name }}</span>
    </RouterLink>
</template>