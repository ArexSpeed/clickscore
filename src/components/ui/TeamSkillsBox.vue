<script setup lang="ts">
import SkillCounter from './SkillCounter.vue';
import { useSimulatorStore } from '@/stores/simulator';

const { team } = defineProps(['team']);

const simulator = useSimulatorStore();

const onChangeTeamName = (e: Event) => {
    const inputElement = e.target as HTMLInputElement;
    simulator.onChangeTeamName(team.id, inputElement.value);
}
</script>

<template>
    <div class="flex flex-row justify-between items-center rounded-[4px] shadow-xl w-full h-8 bg-dark-secondary px-2">
        <input type="text" v-model="team.name" @change="onChangeTeamName"
            class="w-full font-semibold bg-transparent outline-none focus:text-blue-200" />
        <div class="flex flex-row items-center justify-center gap-3">
            <SkillCounter :skill="team.att" :teamId="team.id" skillName="att" />
            <SkillCounter :skill="team.mid" :teamId="team.id" skillName="mid" />
            <SkillCounter :skill="team.def" :teamId="team.id" skillName="def" />

        </div>
    </div>
</template>