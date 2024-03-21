<script setup lang="ts">
import { ref } from "vue";
import SavedGamesBox from '../SavedGamesBox.vue';
import SearchBox from '../ui/SearchBox.vue';
import FootballIcon from '../icons/FootballIcon.vue';
import BasketballIcon from '../icons/BasketballIcon.vue';
import SpeedwayIcon from '../icons/SpeedwayIcon.vue';
import VolleyballIcon from '../icons/VolleyballIcon.vue';
import FormulaIcon from '../icons/FormulaIcon.vue';

const activeSportFilter = ref("All")

const savedGames = [
    {
        id: "12312424",
        sport: "Football",
        name: "Premier League",
        option: "league",
        opened: "12.02.2024"
    },
    {
        id: "12312424232",
        sport: "Basketball",
        name: "NBA",
        option: "cup",
        opened: "14.02.2024"
    },
    {
        id: "123121312",
        sport: "Speedway",
        name: "Ekstraliga sezon 2023",
        option: "league",
        opened: "10.02.2024"
    }
]

const changeSportFilter = (value: string) => {
    activeSportFilter.value = value;
}

</script>


<template>
    <section class="flex flex-col items-center justify-center w-full max-w-lg gap-2 p-2">
        <div class="text-2xl">Saved games</div>
        <SearchBox />
        <div class="flex flex-row flex-wrap justify-center gap-2">
            <button type="button" @click="changeSportFilter('All')"
                class="p-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-700"
                :class="activeSportFilter === 'All' ? 'bg-blue-800' : 'bg-dark-secondary'">All
            </button>
            <button type="button" @click="changeSportFilter('Football')"
                class="p-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-700"
                :class="activeSportFilter === 'Football' ? 'bg-blue-800' : 'bg-dark-secondary'">
                <FootballIcon class="w-4 h-4" />
            </button>
            <button type="button" @click="changeSportFilter('Basketball')"
                class="p-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-700"
                :class="activeSportFilter === 'Basketball' ? 'bg-blue-800' : 'bg-dark-secondary'">
                <BasketballIcon class="w-4 h-4" />
            </button>
            <button type="button" @click="changeSportFilter('Speedway')"
                class="p-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-700"
                :class="activeSportFilter === 'Speedway' ? 'bg-blue-800' : 'bg-dark-secondary'">
                <SpeedwayIcon class="w-4 h-4" />
            </button>
            <button type="button" @click="changeSportFilter('Volleyball')"
                class="p-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-700"
                :class="activeSportFilter === 'Volleyball' ? 'bg-blue-800' : 'bg-dark-secondary'">
                <VolleyballIcon class="w-4 h-4" />
            </button>
            <button type="button" @click="changeSportFilter('Formula')"
                class="p-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-700"
                :class="activeSportFilter === 'Formula' ? 'bg-blue-800' : 'bg-dark-secondary'">
                <FormulaIcon class="w-4 h-4" />
            </button>


        </div>
        <div class="flex flex-col w-full gap-2" v-for="game in savedGames" :key="game.id">
            <SavedGamesBox :gameData="game" />
        </div>
    </section>
</template>