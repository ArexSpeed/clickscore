<script setup lang="ts">
import PlayButton from './ui/PlayButton.vue';
import { useSimulatorStore } from '@/stores/simulator';
import { playMatch } from "@/utils/playMatch";
import type { Team } from '@/types';

const simulator = useSimulatorStore();

const onPlay = (host: Team, guest: Team, gameId: string, round: number) => {
    console.log("r", round);
    //isPlayed.value = true;
    const { score_host, score_guest, hostResults, guestResults } = playMatch(host, guest, gameId, round);
    console.log(score_host, score_guest);
    simulator.onUpdateSchedule(round, gameId, score_host, score_guest);
    simulator.onUpdateStandings(host.name, guest.name, hostResults, guestResults);
}
</script>

<template>
    <div class="relative w-full p-2 overflow-x-auto shadow-md sm:rounded-lg">
        <table v-for="round in simulator.schedule" class="w-full p-2 my-2 text-sm text-left text-gray-500 table-auto">
            <thead class="text-xs text-gray-400 uppercase bg-gray-700">
                <tr>
                    <th scope="col" class="p-2" colSpan="3">
                        Round {{ round.round }}
                    </th>
                    <th scope="col" class="p-2 text-right">
                        Play all
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="game in round.games" class="bg-gray-800 border-b border-gray-700">
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
                </tr>

            </tbody>
        </table>


    </div>
</template>