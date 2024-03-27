<script setup lang="ts">
import { useSimulatorStore } from '@/stores/simulator';
import StandingsHeader from '@/components/Tables/StandingsHeader.vue'
import StandingsBody from '@/components/Tables/StandingsBody.vue'

const simulator = useSimulatorStore();

</script>

<template>
    <div class="relative w-full p-2 overflow-x-auto shadow-md sm:rounded-lg">
        <div class="lg:fixed lg:w-[calc(50%-16px)] lg:h-[calc(100%-200px)] h-full overflow-y-auto no-scrollbar">
            <table class="w-full p-2 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <StandingsHeader :sport="simulator.selectedSport" />
                </thead>
                <tbody>
                    <StandingsBody :sport="simulator.selectedSport" :standings="simulator.standing" />
                </tbody>
            </table>
        </div>

    </div>
</template>