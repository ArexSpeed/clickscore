<script setup lang="ts">
import { ref } from 'vue';
import FootballIcon from './icons/FootballIcon.vue';
import BasketballIcon from './icons/BasketballIcon.vue';
import SpeedwayIcon from './icons/SpeedwayIcon.vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import type { SavedGame } from '@/types';
import { useRouter } from 'vue-router';
import { useSimulatorStore } from '@/stores/simulator';
import PlayIcon from './icons/PlayIcon.vue';
import EditIcon from './icons/EditIcon.vue';
import DeleteIcon from './icons/DeleteIcon.vue';

const props = defineProps<{ gameData: SavedGame }>();
const emit = defineEmits(['open-delete-modal', 'open-rename-modal']);

const gameData = ref(props.gameData)
const router = useRouter()
const simulator = useSimulatorStore()

const goToGame = (game: SavedGame) => {
    simulator.onLeagueName(game.gameName);
    simulator.onSelectSport(game.sport)
    simulator.onCreateSchedule(game.schedule)
    simulator.onSelectTeams(game.teams)
    simulator.setStandingsFromSavedGames(game.standing)
    router.push(`/simulator/game?gameId=${game.gameId}`)
}

const openDeleteModal = () => {
    emit('open-delete-modal', gameData.value.gameId, gameData.value.gameName);
}

const openRenameModal = () => {
    emit('open-rename-modal', gameData.value.gameId, gameData.value.gameName);
}

</script>

<template>
    <div class="flex flex-row items-center justify-between w-full gap-2 p-2 rounded-lg bg-dark-secondary">
        <div @click="goToGame(gameData)" class="flex flex-row items-center gap-2 cursor-pointer">
            <FootballIcon v-if="gameData.sport === 'Football'" class="w-8 h-8" />
            <BasketballIcon v-if="gameData.sport === 'Basketball'" class="w-8 h-8" />
            <SpeedwayIcon v-if="gameData.sport === 'Speedway'" class="w-8 h-8" />
            <div class="flex flex-col">

                <span class="font-semibold">{{ gameData.gameName }}</span>
                <div class="flex flex-row items-center gap-2">
                    <span class="p-1 text-xs bg-blue-400 rounded-md text-gray-71">{{ gameData.option }}</span>
                    <span class="text-xs text-gray-400">Last opened: {{ gameData.lastSaveDate }}</span>
                </div>
            </div>
        </div>
        <div class="text-right">
            <Menu as="div" class="relative inline-block text-right">
                <div>
                    <MenuButton class="z-20 flex items-center justify-center bg-transparent">
                        <svg data-slot="icon" class="w-6 h-6 text-gray-200" fill="currentColor" stroke-width="1.5"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z">
                            </path>
                        </svg>
                    </MenuButton>
                </div>

                <transition enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0">
                    <MenuItems
                        class="absolute right-0 z-30 w-auto h-auto mt-2 origin-top-right bg-gray-700 divide-y divide-gray-800 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">

                            <button :class="[
                                active ? 'bg-blue-400 text-white' : 'text-gray-200',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]" @click="goToGame(gameData)">
                                <PlayIcon class="w-3 h-3 mr-2 text-white" />
                                Open
                            </button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <button :class="[
                                active ? 'bg-blue-400 text-white' : 'text-gray-200',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]" @click="openRenameModal">
                                <EditIcon class="w-3 h-3 mr-2 text-white" />
                                Rename
                            </button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <button :class="[
                                active ? 'bg-blue-400 text-white' : 'text-gray-200',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]" @click="openDeleteModal">
                                <DeleteIcon class="w-3 h-3 mr-2 text-white" />

                                Delete
                            </button>
                            </MenuItem>
                        </div>

                    </MenuItems>
                </transition>
            </Menu>
        </div>
    </div>
</template>