<script setup lang="ts">
import BackButton from '../ui/BackButton.vue';
import SaveButton from '../ui/SaveButton.vue';
const { title, onSave } = defineProps(['title', 'onSave']);

</script>

<template>
    <div class="flex flex-row items-center w-full gap-4">

        <BackButton />

        <h2 class="w-full text-2xl font-semibold bg-transparent outline-none focus:text-blue-200">
            {{ title }}
        </h2>
        <SaveButton @click="onSave" />
    </div>
</template>