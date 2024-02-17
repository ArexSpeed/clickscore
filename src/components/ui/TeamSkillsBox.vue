<script setup lang="ts">
import SkillCounter from './SkillCounter.vue';

const { team } = defineProps(['team'])
</script>

<template>
    <div class="flex flex-row justify-between items-center rounded-[4px] shadow-xl w-full h-8 bg-dark-secondary px-2">
        <input type="text" :value="team.name"
            class="w-full font-semibold bg-transparent outline-none focus:text-blue-200" />
        <div class="flex flex-row items-center justify-center gap-3">
            <SkillCounter :skill="team.att" />
            <SkillCounter :skill="team.mid" />
            <SkillCounter :skill="team.def" />

        </div>
    </div>
</template>