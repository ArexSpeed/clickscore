<script setup lang="ts">
import { toRef } from 'vue';

const props = defineProps<{ sport: string, standings: any }>();
const sport = toRef(props, 'sport');
</script>

<template>
    <tr v-if="sport === 'Speedway'" v-for="team, index in standings" :key="team.name"
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
            {{ team.plus }}
        </td>
        <td class="p-1 text-gray-300">
            {{ team.minus }}
        </td>
        <td class="p-1 text-gray-300">
            {{ team.bonus }}
        </td>
        <td class="p-1 font-semibold text-white">
            {{ team.points }}
        </td>
    </tr>
    <tr v-else v-for="team, index in standings" :key="team.name" class="bg-gray-800 border-b border-gray-700">
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
            {{ team.plus }}
        </td>
        <td class="p-1 text-gray-300">
            {{ team.minus }}
        </td>
        <td class="p-1 font-semibold text-white">
            {{ team.points }}
        </td>
    </tr>
</template>