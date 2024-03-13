<script setup lang="ts">
import { useSimulatorStore } from '@/stores/simulator';

const simulator = useSimulatorStore();

</script>

<template>
    <div class="relative w-full p-2 overflow-x-auto shadow-md sm:rounded-lg">
        <div class="lg:fixed lg:w-[calc(50%-16px)] lg:h-[calc(100%-200px)] h-full overflow-y-auto no-scrollbar">
            <table class="w-full p-2 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="p-1">
                            #
                        </th>
                        <th scope="col" class="p-1">
                            Team
                        </th>
                        <th scope="col" class="p-1">
                            M
                        </th>
                        <th scope="col" class="p-1">
                            W
                        </th>
                        <th scope="col" class="p-1">
                            D
                        </th>
                        <th scope="col" class="p-1">
                            P
                        </th>
                        <th scope="col" class="p-1">
                            G+
                        </th>
                        <th scope="col" class="p-1">
                            G-
                        </th>
                        <th scope="col" class="p-1">
                            PTS
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="team, index in simulator.standing" :key="team.name"
                        class="bg-gray-800 border-b border-gray-700">
                        <td class="p-1 text-gray-500">
                            {{ index + 1 }}
                        </td>
                        <td class="p-1 text-gray-100">
                            {{ team.name }}
                        </td>
                        <td class="p-1 text-gray-300">
                            {{ team.games }}
                        </td>
                        <td class="p-1 text-gray-300">
                            {{ team.win }}
                        </td>
                        <td class="p-1 text-gray-300">
                            {{ team.draw }}
                        </td>
                        <td class="p-1 text-gray-300">
                            {{ team.loses }}
                        </td>
                        <td class="p-1 text-gray-300">
                            {{ team.goalPlus }}
                        </td>
                        <td class="p-1 text-gray-300">
                            {{ team.goalMinus }}
                        </td>
                        <td class="p-1 font-semibold text-white">
                            {{ team.points }}
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>

    </div>
</template>