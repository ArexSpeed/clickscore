<script setup lang="ts">
import { toRef } from 'vue';

const props = defineProps<{ sport: string }>();
const sport = toRef(props, 'sport');
</script>

<template>
    <tr v-if="sport === 'Speedway'">
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
            +
        </th>
        <th scope="col" class="p-1">
            -
        </th>
        <th scope="col" class="p-1">
            B
        </th>
        <th scope="col" class="p-1">
            PTS
        </th>
    </tr>
    <tr v-else>
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
            +
        </th>
        <th scope="col" class="p-1">
            -
        </th>
        <th scope="col" class="p-1">
            PTS
        </th>
    </tr>
</template>