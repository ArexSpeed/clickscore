<script setup lang="ts">
import { useSimulatorStore } from '@/stores/simulator';

let { skill, teamId, skillName } = defineProps(['skill', 'teamId', 'skillName']);

const simulator = useSimulatorStore();


const onMinus = () => {
    simulator.onChangeTeamSkill(teamId, skill--, skillName)
}
const onPlus = () => {
    simulator.onChangeTeamSkill(teamId, skill++, skillName)
}
const onChangeSkill = (e: Event) => {
    const el = e.target as HTMLInputElement;
    simulator.onChangeTeamSkill(teamId, +el.value, skillName)
}

</script>

<template>
    <div class="flex flex-row items-center justify-center gap-1">
        <button class="flex items-center justify-center w-4 h-4 bg-red-800 rounded-sm" @click="onMinus">-</button>
        <input type="number" :value="skill" @change="onChangeSkill" class="w-5 p-0 m-0 font-semibold bg-transparent" />
        <button class="flex items-center justify-center w-4 h-4 bg-green-800 rounded-sm" @click="onPlus">+</button>
    </div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>