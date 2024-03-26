<script setup lang="ts">
import { useSimulatorStore } from '@/stores/simulator';
import TeamSkillsBox from '../ui/TeamSkillsBox.vue';
import sportSkills from '@/data/sportSkills.json';
import { onMounted, ref } from 'vue';


const simulator = useSimulatorStore();
const skillTitle = ref({
    skillA: '',
    skillB: '',
    skillC: ''
})

const setSkillTitle = () => {
    const findSkill = sportSkills.find((skill) => skill.sportName === simulator.selectedSport)
    if (findSkill) {
        skillTitle.value = {
            skillA: findSkill.skillA,
            skillB: findSkill.skillB,
            skillC: findSkill.skillC
        }
    }
}

onMounted(() => {
    setSkillTitle();
})
</script>

<template>
    <div class="flex flex-row items-center justify-between text-xs text-gray-400">
        <div>
            <span class="px-2">#</span>
            <span class="px-2">Team name</span>
        </div>
        <div class="flex flex-row items-center justify-center gap-4">
            <span class="px-5">{{ skillTitle.skillA }}</span>
            <span class="px-5">{{ skillTitle.skillB }}</span>
            <span class="px-5">{{ skillTitle.skillC }}</span>
        </div>
    </div>
    <div class="flex flex-col items-center justify-start w-full gap-2 py-2">
        <div v-for="team, index in simulator.teams" :key="team.id" class="flex flex-row items-center w-full">
            <span class="w-5 text-sm text-center text-gray-500">{{ index + 1 }}</span>
            <TeamSkillsBox :team="team" />
        </div>
    </div>
</template>