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
        <table class="w-full p-2 my-2 text-sm text-left text-gray-500 table-auto">
            <thead class="text-xs text-gray-400 uppercase bg-gray-700">
                <tr>
                    <th scope="col" class="p-2" colSpan="3">
                        Round 1
                    </th>
                    <th scope="col" class="p-2 text-right">
                        Play all
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Manchester United
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Ossasuna Pampeluna
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Arsenal
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Machester Uni
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Arsenal
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Machester Uni
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="w-full p-2 my-2 text-sm text-left text-gray-500 table-auto">
            <thead class="text-xs text-gray-400 uppercase bg-gray-700">
                <tr>
                    <th scope="col" class="p-2" colSpan="3">
                        Round 1
                    </th>
                    <th scope="col" class="p-2 text-right">
                        Play all
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Manchester United
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Ossasuna Pampeluna
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Arsenal
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Machester Uni
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Arsenal
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Machester Uni
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="w-full p-2 my-2 text-sm text-left text-gray-500 table-auto">
            <thead class="text-xs text-gray-400 uppercase bg-gray-700">
                <tr>
                    <th scope="col" class="p-2" colSpan="3">
                        Round 1
                    </th>
                    <th scope="col" class="p-2 text-right">
                        Play all
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Manchester United
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Ossasuna Pampeluna
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Arsenal
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Machester Uni
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Arsenal
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Machester Uni
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="w-full p-2 text-sm text-left text-gray-500 table-auto">
            <thead class="text-xs text-gray-400 uppercase bg-gray-700">
                <tr>
                    <th scope="col" class="p-2" colSpan="3">
                        Round 1
                    </th>
                    <th scope="col" class="p-2 text-right">
                        Play all
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Manchester United
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Ossasuna Pampeluna
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Arsenal
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Machester Uni
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Arsenal
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Machester Uni
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="w-full p-2 text-sm text-left text-gray-500 table-auto">
            <thead class="text-xs text-gray-400 uppercase bg-gray-700">
                <tr>
                    <th scope="col" class="p-2" colSpan="3">
                        Round 1
                    </th>
                    <th scope="col" class="p-2 text-right">
                        Play all
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Manchester United
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Ossasuna Pampeluna
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Arsenal
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Machester Uni
                    </td>
                </tr>
                <tr class="bg-gray-800 border-b border-gray-700">
                    <td class="p-2 text-center text-white">
                        Arsenal
                    </td>
                    <template v-if="!isPlayed">
                        <td class="p-2 text-center" colSpan="2">
                            <PlayButton :onPlay="onPlay" />
                        </td>
                    </template>
                    <template v-else>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            2
                        </td>
                        <td class="p-2 font-semibold text-center text-gray-200">
                            0
                        </td>
                    </template>
                    <td class="p-2 text-center text-white">
                        Machester Uni
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>