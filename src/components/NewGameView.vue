<script setup lang="ts">
import { ref } from 'vue';
import SquareBox from "@/components/ui/SquareBox.vue";
import sports from "@/data/sports.json"
import leagues from "@/data/leagues.json"
import teams from "@/data/teams.json"
import { useRouter } from 'vue-router';
import { useSimulatorStore } from '@/stores/simulator';
import type { League } from "@/types"

const router = useRouter();
const selectedSport = ref<string>("");
const selectedLeagues = ref<League[]>([])
const simulator = useSimulatorStore();

const onSelectSport = (id: string) => {
    selectedSport.value = id
    filterLeague();
}

const filterLeague = () => {
    const filter = leagues.filter((league) => league.sportId === selectedSport.value);
    if (filter) {
        selectedLeagues.value = filter;
    }
}

const saveTeams = (leagueId: string) => {
    const findTeams = teams.find((team) => team.leagueId === leagueId);
    if (findTeams) {
        simulator.onSelectTeams(findTeams.teams);
    }
}

const goToLeague = (league: League) => {
    //router.push(`/${selectedSport}/${league}`);
    simulator.onLeagueName(league.name);
    saveTeams(league.id);
    router.push(`/settings`);
}


</script>

<template>
    <section class="flex flex-col gap-2 p-2">
        <div class="text-2xl">Choose your sport</div>

        <div class="flex flex-row flex-wrap items-center justify-start gap-4">
            <div v-for="sport in sports">
                <SquareBox :key="sport.id" :name="sport.name" @click="onSelectSport(sport.id)" />
            </div>
        </div>
    </section>
    <section v-if="selectedSport" class="flex flex-col gap-2 p-2">
        <div class="flex flex-row items-center w-full gap-2">
            <span class="whitespace-nowrap">Select option</span>
            <select id="competitionKind"
                class="bg-dark-secondary shadow-lg text-sm rounded-lg max-w-[300px] block w-full p-2">
                <option selected value="league" class="bg-gray-700">League</option>
                <option value="cup" class="bg-gray-700">Cup</option>
                <option value="one" class="bg-gray-700">One match</option>
            </select>
        </div>
        <div class="text-2xl">Choose your league</div>

        <div class="flex flex-row flex-wrap items-center justify-start gap-4">
            <div v-for="league in selectedLeagues">
                <SquareBox :key="league.id" :name="league.name" @click="goToLeague(league)" />
            </div>
        </div>
    </section>
</template>