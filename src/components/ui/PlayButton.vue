<script setup lang="ts">
import PlayIcon from '../icons/PlayIcon.vue';

const { onPlay } = defineProps(['onPlay'])
</script>

<template>
    <button class="font-semibold text-blue-400 bg-transparent rounded-full" @click="onPlay">
        <PlayIcon class="w-4 h-4" />
    </button>
</template>