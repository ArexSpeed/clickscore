<script setup lang="ts">
import BottomNav from './Nav/BottomNav.vue';
</script>
<template>
    <main class="w-full h-auto min-h-screen bg-dark-primary text-white">
        <slot></slot>
        <BottomNav />
    </main>
</template>