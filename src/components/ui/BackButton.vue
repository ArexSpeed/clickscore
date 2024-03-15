<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const goBack = () => {
    router.go(-1);
}
</script>

<template>
    <button class="flex items-center justify-center w-8 h-8 rounded-lg bg-dark-secondary" @click="goBack">
        <svg class="w-5 h-5" data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
        </svg>
    </button>
</template>