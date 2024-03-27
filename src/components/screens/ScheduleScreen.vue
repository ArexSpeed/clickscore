<script setup lang="ts">
import { useSimulatorStore } from '@/stores/simulator';
import { playMatch } from "@/utils/playMatch";
import type { ScheduleGame, Team } from '@/types';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const simulator = useSimulatorStore();

const onPlay = (host: Team, guest: Team, gameId: string, round: number) => {
    console.log("r", round);
    //isPlayed.value = true;

    const { score_host, score_guest, hostResults, guestResults } = playMatch(simulator.selectedSport, host, guest);
    //console.log(score_host, score_guest);
    //console.log(hostResults, guestResults);
    simulator.onUpdateSchedule(round, gameId, score_host, score_guest);
    simulator.onUpdateStandings(host.id, guest.id, hostResults, guestResults, gameId, round);
}

const onPlayAll = (games: ScheduleGame[], round: number) => {
    const nonPlayedGames = games.filter(game => !game.isPlayed)
    nonPlayedGames.forEach((game) => onPlay(game.host, game.guest, game.id, round))
}
</script>

<template>
    <div class="relative w-full p-2 overflow-x-auto shadow-md sm:rounded-lg">
        <table v-for="round in simulator.schedule" class="w-full p-2 my-2 text-sm text-left text-gray-500 table-auto">

            <Disclosure v-slot="{ open }" defaultOpen>

                <thead class="w-full text-xs text-gray-400 uppercase bg-gray-700">
                    <tr>
                        <th scope="col" class="p-2" colSpan="3">

                            Round {{ round.round }}
                        </th>
                        <th scope="col" class="flex items-center justify-end p-2 cursor-pointer">
                            <button class="pr-4 text-blue-400 cursor-pointer"
                                @click="onPlayAll(round.games, round.round)">PLAY
                                ALL</button>
                            <DisclosureButton class="">
                                <svg class="w-4 h-4" :class="!open ? 'rotate-180 transform' : ''" data-slot="icon"
                                    fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true" stroke-width="2" stroke="currentColor">
                                    <path clip-rule="evenodd" fill-rule="evenodd"
                                        d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z">
                                    </path>
                                </svg>
                            </DisclosureButton>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <!-- <tr v-for="game in round.games" class="bg-gray-800 border-b border-gray-700"> -->
                    <DisclosurePanel as="tr" v-for="game in round.games" class="bg-gray-800 border-b border-gray-700">
                        <td class="p-2 text-center text-white">
                            {{ game.host.name }}
                        </td>
                        <template v-if="!game.isPlayed">
                            <td class="p-2 text-center" colSpan="2">
                                <!-- <PlayButton :onPlay="onPlay(game.host, game.guest, game.id, round.round)" /> -->
                                <button class="font-semibold text-blue-400 bg-transparent rounded-full"
                                    @click="onPlay(game.host, game.guest, game.id, round.round)">
                                    <svg class="w-4 h-4" data-slot="icon" fill="currentColor" stroke-width="1.5"
                                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z">
                                        </path>
                                    </svg>
                                </button>
                            </td>
                        </template>
                        <template v-else>
                            <td class="p-2 font-semibold text-center text-gray-200">
                                {{ game.hostScore }}
                            </td>
                            <td class="p-2 font-semibold text-center text-gray-200">
                                {{ game.guestScore }}
                            </td>
                        </template>
                        <td class="p-2 text-center text-white">
                            {{ game.guest.name }}
                        </td>
                    </DisclosurePanel>
                    <!-- </tr> -->

                </tbody>
            </Disclosure>
        </table>


    </div>
</template>
