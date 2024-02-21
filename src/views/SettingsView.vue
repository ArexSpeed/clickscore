<script setup lang="ts">
import BackButton from '@/components/BackButton.vue';
import TeamSkillsBox from '@/components/ui/TeamSkillsBox.vue';
import { useRouter } from 'vue-router';
import { useSimulatorStore } from '@/stores/simulator';

const router = useRouter();
const simulator = useSimulatorStore();

const onStart = () => {
    router.push(`/game`);
}
console.log(simulator.teams);

const onChangeLeagueName = (e: Event) => {
    console.log("onChangeLeagueName", e.target)
    const inputElement = e.target as HTMLInputElement;
    simulator.onLeagueName(inputElement.value);
}
</script>

<template>
    <section class="flex flex-col gap-2 p-2">
        <BackButton />
        <input type="text" v-model="simulator.leagueName" @change="onChangeLeagueName"
            class="w-full text-2xl font-semibold bg-transparent outline-none focus:text-blue-200" />

        <div class="flex flex-col items-center justify-start w-full gap-2">
            <div v-for="team in simulator.teams" class="w-full">
                <TeamSkillsBox :team="team" />
            </div>
        </div>
        <div class="flex flex-row items-center justify-center">
            <button class="p-4 font-semibold text-black rounded-full bg-gradient-green" @click="onStart">
                <svg class="w-6 h-6" data-slot="icon" fill="black" stroke-width="1.5" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z">
                    </path>
                </svg>
            </button>
        </div>
    </section>
</template>
  