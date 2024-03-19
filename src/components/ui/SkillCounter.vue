<script setup lang="ts">
import { useSimulatorStore } from '@/stores/simulator';
import { toRefs, ref } from 'vue';

const props = defineProps<{ teamId: number, skill: number, skillName: 'att' | 'mid' | 'def' }>();
const simulator = useSimulatorStore();
const teamId = ref(props.teamId);
const skill = ref(props.skill);
const skillName = ref(props.skillName);

const onMinus = () => {
    skill.value--;
    simulator.onChangeTeamSkill(teamId.value, skill.value, skillName.value);
};

const onPlus = () => {
    skill.value++;
    simulator.onChangeTeamSkill(teamId.value, skill.value, skillName.value);
};

const onChangeSkill = (e: Event) => {
    const el = e.target as HTMLInputElement;
    skill.value = +el.value;
    simulator.onChangeTeamSkill(teamId.value, skill.value, skillName.value);
};
</script>

<template>
    <div class="flex flex-row items-center justify-center gap-1">
        <button class="flex items-center justify-center w-4 h-4 bg-red-800 rounded-sm" @click="onMinus">-</button>
        <input type="number" v-model="skill" @change="onChangeSkill" class="w-5 p-0 m-0 font-semibold bg-transparent" />
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