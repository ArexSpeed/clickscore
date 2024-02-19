<script setup lang="ts">
import BackButton from '@/components/BackButton.vue';
import TeamSkillsBox from '@/components/ui/TeamSkillsBox.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const name = "Premier League"

const teams = [
    {
        name: 'Barcelona',
        att: 88,
        mid: 85,
        def: 85
    }, {
        name: 'Real Madryt',
        att: 85,
        mid: 87,
        def: 85
    }, {
        name: 'Atletico',
        att: 81,
        mid: 83,
        def: 82
    }, {
        name: 'Valencia',
        att: 81,
        mid: 81,
        def: 81
    }, {
        name: 'Real Betis',
        att: 81,
        mid: 81,
        def: 78
    }, {
        name: 'Sevilla',
        att: 79,
        mid: 81,
        def: 80
    }, {
        name: 'Real Sociedad',
        att: 81,
        mid: 80,
        def: 78
    }, {
        name: 'Villarreal',
        att: 80,
        mid: 79,
        def: 78
    }, {
        name: 'Athletic Bilbao',
        att: 79,
        mid: 79,
        def: 80
    }, {
        name: 'Getafe',
        att: 80,
        mid: 77,
        def: 78
    }, {
        name: 'Celta Vigo',
        att: 79,
        mid: 77,
        def: 76
    }, {
        name: 'Eibar',
        att: 78,
        mid: 78,
        def: 75
    }, {
        name: 'Levante',
        att: 77,
        mid: 78,
        def: 76
    }, {
        name: 'Real Valladolid',
        att: 76,
        mid: 76,
        def: 73
    }, {
        name: 'Deportivo Alaves',
        att: 76,
        mid: 75,
        def: 76
    }, {
        name: 'Granada',
        att: 76,
        mid: 74,
        def: 75
    }, {
        name: 'Leganes',
        att: 75,
        mid: 75,
        def: 75
    }, {
        name: 'Osasuna',
        att: 76,
        mid: 74,
        def: 73
    }, {
        name: 'Mallorca',
        att: 76,
        mid: 73,
        def: 72
    }, {
        name: 'Espanyol',
        att: 76,
        mid: 73,
        def: 72
    }
]

const onStart = () => {
    router.push(`/start`);
}
</script>

<template>
    <section class="flex flex-col gap-2 p-2">
        <BackButton />
        <input type="text" :value="name"
            class="w-full text-2xl font-semibold bg-transparent outline-none focus:text-blue-200" />

        <div class="flex flex-col items-center justify-start w-full gap-2">
            <div v-for="team in teams" class="w-full">
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
  