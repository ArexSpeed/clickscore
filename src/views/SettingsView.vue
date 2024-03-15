<script setup lang="ts">
import TeamSkillsBox from '@/components/ui/TeamSkillsBox.vue';
import Header from '@/components/Headers/Header.vue';
import { useRouter, useRoute } from 'vue-router';
import { useSimulatorStore } from '@/stores/simulator';
import { generateSchedule } from '@/utils/generateSchedule';
import { createStanding } from '@/utils/createStanding';
import type { Schedule } from '@/types';
import useSavedTeams from '@/composables/useSavedTeams';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const router = useRouter();
const route = useRoute();
const simulator = useSimulatorStore();
const teamsQty = [4, 6, 8, 10, 12, 14, 16, 18, 20]
const { teamsRef: savedTeams, saveNewTeams } = useSavedTeams()

const onStart = () => {
    const newSchedule: Schedule[] = generateSchedule(simulator.teams);
    simulator.onCreateSchedule(newSchedule);
    const newStanding = createStanding(simulator.teams);
    simulator.onCreateStanding(newStanding);
    router.push(`/game`);
}

const onChangeLeagueName = (e: Event) => {
    const inputElement = e.target as HTMLInputElement;
    simulator.onLeagueName(inputElement.value);
}

function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const onChangeTeamsQuantity = (e: Event) => {
    const quantity = e.target as HTMLSelectElement;
    const newTeams = []
    for (let i = 1; i <= +quantity.value; i++) {
        newTeams.push(
            {
                id: Math.floor(Math.random() * 10000000),
                name: `Team ${i}`,
                att: getRandomInt(70, 90),
                mid: getRandomInt(70, 90),
                def: getRandomInt(70, 90),
            }
        )
    }
    simulator.onSelectTeams(newTeams);
}

const onChangeTeamsData = (e: Event) => {
    const leagueId = e.target as HTMLSelectElement;
    const selectedLeague = savedTeams.value.filter(league => league.id === +leagueId.value);
    const newTeams = selectedLeague[0].teams
    simulator.onSelectTeams(newTeams);
}

const onSave = () => {
    console.log("save on settings");
}

const saveTeamsToStorage = () => {
    if (route.query.newLeague) {
        saveNewTeams({
            id: +route.query.newLeague,
            leagueName: simulator.leagueName,
            teams: simulator.teams
        });
    } else {
        saveNewTeams({
            id: Math.floor(Math.random() * 1000000),
            leagueName: simulator.leagueName,
            teams: simulator.teams
        });
    }


    toast("Your teams are saved!", {
        "type": "success",
        "dangerouslyHTMLString": true
    })
}
</script>

<template>
    <section class="flex flex-col gap-2 p-2">
        <Header :title="simulator.selectedSport" :onSave="onSave" />
        <div v-if="route.query.newLeague">

            <div class="flex flex-row items-center w-full gap-2">
                <span class="whitespace-nowrap">Teams quantity </span>
                <select id="teamsQuantity" @change="onChangeTeamsQuantity"
                    class="bg-dark-secondary shadow-lg text-sm rounded-lg max-w-[300px] block w-full p-2">
                    <option v-for="qty in teamsQty" :key="qty" :value="qty" class="bg-gray-700">{{ qty }}</option>
                </select>
            </div>
            <div class="flex flex-row items-center w-full gap-2 pt-2">
                <span class="whitespace-nowrap">My teams sets </span>
                <select id="savedTeams" @change="onChangeTeamsData"
                    class="bg-dark-secondary shadow-lg text-sm rounded-lg max-w-[300px] block w-full p-2">
                    <option v-for="league in savedTeams" :key="league.id" :value="league.id" class="bg-gray-700">{{
                        league.leagueName }} ({{ league.teams.length }})</option>
                </select>
            </div>
        </div>
        <label>League name:</label>
        <input type="text" v-model="simulator.leagueName" @change="onChangeLeagueName"
            class="w-full p-2 text-xl font-semibold bg-gray-800 rounded-lg outline-none focus:text-blue-200" />

        <div class="flex flex-row items-center justify-between text-xs text-gray-400">
            <span class="px-2">Team name</span>
            <div class="flex flex-row items-center justify-center gap-4">
                <span class="px-5">Att</span>
                <span class="px-5">Mid</span>
                <span class="px-5">Def</span>
            </div>
        </div>
        <div class="flex flex-col items-center justify-start w-full gap-2">
            <div v-for="team in simulator.teams" class="w-full">
                <TeamSkillsBox :team="team" />
            </div>
        </div>
        <div class="flex flex-row items-center justify-center">
            <button class="p-4 font-semibold text-black rounded-full bg-gradient-green" @click="onStart">
                <svg class="w-6 h-6" data-slot="icon" fill="currentColor" stroke-width="1.5" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z">
                    </path>
                </svg>
            </button>
        </div>
        <div>
            <button @click="saveTeamsToStorage"
                class="flex flex-row items-center gap-2 p-2 bg-blue-700 rounded-md hover:bg-blue-500">
                <svg class="w-5 h-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9">
                    </path>
                </svg>
                Save these teams as team set</button>
        </div>
    </section>
</template>