<script setup lang="ts">
import BottomNav from './Nav/BottomNav.vue';
</script>
<template>
    <main class="w-full h-screen min-h-screen text-white bg-dark-primary">
        <slot></slot>
        <BottomNav />
    </main>
</template>