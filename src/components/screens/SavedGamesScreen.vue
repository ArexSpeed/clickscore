<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue";
import SavedGamesBox from '../SavedGamesBox.vue';
import SearchBox from '@/components/ui/SearchBox.vue';
import FootballIcon from '../icons/FootballIcon.vue';
import BasketballIcon from '../icons/BasketballIcon.vue';
import SpeedwayIcon from '../icons/SpeedwayIcon.vue';
import VolleyballIcon from '../icons/VolleyballIcon.vue';
import FormulaIcon from '../icons/FormulaIcon.vue';
import useSavedGames from "@/composables/useSavedGames";
import DeleteSavedBoxModal from '@/components/modals/DeleteSavedBoxModal.vue';
import RenameSavedBoxModal from "../modals/RenameSavedBoxModal.vue";
import type { SavedGame } from "@/types";

const activeSportFilter = ref("All");
const { gamesRef, removeGame, renameGame } = useSavedGames();
const savedGames = ref<SavedGame[]>([])
const searchGameValue = ref('');
const isOpenDeleteModal = ref(false)
const isOpenRenameModal = ref(false)
const gameToRemove = ref({
    id: '',
    name: '',
})
const gameToRename = ref({
    id: '',
    name: '',
})

const changeSportFilter = (value: string) => {
    activeSportFilter.value = value;
}

const searchGame = (searchValue: string) => {
    searchGameValue.value = searchValue
}

const filterGames = () => {
    savedGames.value = gamesRef.value;
    if (activeSportFilter.value === "All") {
        return savedGames.value = savedGames.value
            .filter((user) => user.gameName?.toLowerCase().includes(searchGameValue.value.toLowerCase()))
    } else {
        return savedGames.value = savedGames.value
            .filter((game) => game.sport === activeSportFilter.value)
            .filter((user) => user.gameName?.toLowerCase().includes(searchGameValue.value.toLowerCase()))
    }

}

function closeModal() {
    isOpenDeleteModal.value = false
}
function openModal() {
    isOpenDeleteModal.value = true
}
function closeRenameModal() {
    isOpenRenameModal.value = false
}
function openRenameModal() {
    isOpenRenameModal.value = true
}

const onDeleteOpenModal = (gameId: string, gameName: string) => {
    openModal()
    gameToRemove.value.id = gameId
    gameToRemove.value.name = gameName
}

const onDeleteGame = () => {
    removeGame(gameToRemove.value.id)
    gameToRemove.value = {
        id: '',
        name: ''
    }
    closeModal();
}

const onRenameOpenModal = (gameId: string, gameName: string) => {
    openRenameModal()
    gameToRename.value.id = gameId
    gameToRename.value.name = gameName
}

const onRenameGame = (newName: string) => {
    console.log("Rename", newName)
    renameGame(gameToRename.value.id, newName)
    gameToRename.value = {
        id: '',
        name: ''
    }
    closeRenameModal();
}

onMounted(() => {
    savedGames.value = gamesRef.value
})

watch(searchGameValue, () =>
    filterGames()
)
watch(activeSportFilter, () =>
    filterGames()
)

</script>


<template>
    <section class="flex flex-col items-center justify-center w-full max-w-lg gap-2 p-2">
        <div class="text-2xl">Saved games</div>
        <SearchBox @on-search="searchGame" />
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
        <div class="flex flex-col w-full gap-2" v-if="savedGames" v-for="game in savedGames" :key="game.gameId">
            <SavedGamesBox :gameData="game" @open-delete-modal="onDeleteOpenModal" @open-rename-modal="onRenameOpenModal" />
        </div>
        <div v-else>
            <p>You don't have saved games yet!</p>
        </div>
        <DeleteSavedBoxModal :isOpenDeleteModal="isOpenDeleteModal" :gameName="gameToRemove.name" @close-modal="closeModal"
            @delete-game="onDeleteGame" />
        <RenameSavedBoxModal :isOpenRenameModal="isOpenRenameModal" :gameName="gameToRename.name"
            @close-rename-modal="closeRenameModal" @rename-game="onRenameGame" />

    </section>
</template>