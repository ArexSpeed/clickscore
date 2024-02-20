<script setup lang="ts">
import { ref } from 'vue';
import PlayButton from './ui/PlayButton.vue';

const isPlayed = ref(false);

const onPlay = () => {
    isPlayed.value = true;
}
</script>

<template>
    <div class="relative w-full p-2 overflow-x-auto shadow-md sm:rounded-lg">
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
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-1 text-gray-500">
                        1
                    </td>
                    <td class="p-1 text-gray-100">
                        Manchester United
                    </td>
                    <td class="p-1 text-gray-300">
                        15
                    </td>
                    <td class="p-1 text-gray-300">
                        1
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        88
                    </td>
                    <td class="p-1 text-gray-300">
                        96
                    </td>
                    <td class="p-1 font-semibold text-white">
                        38
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-1 text-gray-500">
                        1
                    </td>
                    <td class="p-1 text-gray-100">
                        Manchester United
                    </td>
                    <td class="p-1 text-gray-300">
                        15
                    </td>
                    <td class="p-1 text-gray-300">
                        1
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        88
                    </td>
                    <td class="p-1 text-gray-300">
                        96
                    </td>
                    <td class="p-1 font-semibold text-white">
                        38
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-1 text-gray-500">
                        1
                    </td>
                    <td class="p-1 text-gray-100">
                        Manchester United
                    </td>
                    <td class="p-1 text-gray-300">
                        15
                    </td>
                    <td class="p-1 text-gray-300">
                        1
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        88
                    </td>
                    <td class="p-1 text-gray-300">
                        96
                    </td>
                    <td class="p-1 font-semibold text-white">
                        38
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-1 text-gray-500">
                        1
                    </td>
                    <td class="p-1 text-gray-100">
                        Manchester United
                    </td>
                    <td class="p-1 text-gray-300">
                        15
                    </td>
                    <td class="p-1 text-gray-300">
                        1
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        88
                    </td>
                    <td class="p-1 text-gray-300">
                        96
                    </td>
                    <td class="p-1 font-semibold text-white">
                        38
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-1 text-gray-500">
                        1
                    </td>
                    <td class="p-1 text-gray-100">
                        Manchester United
                    </td>
                    <td class="p-1 text-gray-300">
                        15
                    </td>
                    <td class="p-1 text-gray-300">
                        1
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        88
                    </td>
                    <td class="p-1 text-gray-300">
                        96
                    </td>
                    <td class="p-1 font-semibold text-white">
                        38
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-1 text-gray-500">
                        1
                    </td>
                    <td class="p-1 text-gray-100">
                        Manchester United
                    </td>
                    <td class="p-1 text-gray-300">
                        15
                    </td>
                    <td class="p-1 text-gray-300">
                        1
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        88
                    </td>
                    <td class="p-1 text-gray-300">
                        96
                    </td>
                    <td class="p-1 font-semibold text-white">
                        38
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-1 text-gray-500">
                        1
                    </td>
                    <td class="p-1 text-gray-100">
                        Manchester United
                    </td>
                    <td class="p-1 text-gray-300">
                        15
                    </td>
                    <td class="p-1 text-gray-300">
                        1
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        88
                    </td>
                    <td class="p-1 text-gray-300">
                        96
                    </td>
                    <td class="p-1 font-semibold text-white">
                        38
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-1 text-gray-500">
                        1
                    </td>
                    <td class="p-1 text-gray-100">
                        Manchester United
                    </td>
                    <td class="p-1 text-gray-300">
                        15
                    </td>
                    <td class="p-1 text-gray-300">
                        1
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        88
                    </td>
                    <td class="p-1 text-gray-300">
                        96
                    </td>
                    <td class="p-1 font-semibold text-white">
                        38
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-1 text-gray-500">
                        1
                    </td>
                    <td class="p-1 text-gray-100">
                        Manchester United
                    </td>
                    <td class="p-1 text-gray-300">
                        15
                    </td>
                    <td class="p-1 text-gray-300">
                        1
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        88
                    </td>
                    <td class="p-1 text-gray-300">
                        96
                    </td>
                    <td class="p-1 font-semibold text-white">
                        38
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-1 text-gray-500">
                        10
                    </td>
                    <td class="p-1 text-gray-100">
                        Manchester United
                    </td>
                    <td class="p-1 text-gray-300">
                        15
                    </td>
                    <td class="p-1 text-gray-300">
                        1
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        10
                    </td>
                    <td class="p-1 text-gray-300">
                        88
                    </td>
                    <td class="p-1 text-gray-300">
                        96
                    </td>
                    <td class="p-1 font-semibold text-white">
                        38
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>