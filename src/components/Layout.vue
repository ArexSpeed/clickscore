<script setup lang="ts">
import BottomNav from './Nav/BottomNav.vue';
</script>
<template>
    <main class="w-full min-h-screen pb-24 overflow-x-hidden text-white h-fulll bg-dark-primary">
        <slot></slot>
        <BottomNav />
    </main>
</template>