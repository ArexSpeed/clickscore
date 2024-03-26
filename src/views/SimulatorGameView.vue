<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { useTabsStore } from '@/stores/tabs';
import { onMounted, ref, onBeforeUnmount, shallowRef } from 'vue';
import Header from '@/components/Headers/Header.vue';
import ToggleButton from '@/components/ui/ToggleButton.vue';
import Schedule from '@/components/Schedule.vue';
import Standing from '@/components/Standing.vue';
import useSavedGames from '@/composables/useSavedGames';
import { useSimulatorStore } from '@/stores/simulator';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const stickyToggleButton = ref<HTMLElement | null>(null);

const tabsStore = useTabsStore();
const currentTab = ref('')
const currentView = shallowRef(Schedule);

const simulator = useSimulatorStore();
const { gamesRef, saveNewGame } = useSavedGames()

const router = useRouter();
const route = useRoute();

const onSave = () => {
    const newGame = {
        ownerId: Math.floor(Math.random() * 100000).toString(),
        gameId: route.query.gameId ? route.query.gameId.toString() : "123",
        gameName: simulator.leagueName,
        sport: simulator.selectedSport,
        option: "league",
        lastSaveDate: new Date(),
        teams: simulator.teams,
        schedule: simulator.schedule,
        standing: simulator.standing
    }
    saveNewGame(newGame)
    toast("Your game is saved!", {
        "type": "success",
        "dangerouslyHTMLString": true
    })
}

const handleScroll = () => {
    if (stickyToggleButton.value) {
        if (window.pageYOffset > stickyToggleButton.value.offsetTop || 0) {
            stickyToggleButton.value.classList.add('sticky');
        } else {
            stickyToggleButton.value.classList.remove('sticky');
        }
    }
}

function changeCurrentView(view: string) {
    if (view === "Schedule") {
        currentView.value = Schedule
        tabsStore.onSelectTab("Schedule")
        router.replace(
            {

                query: { ...route.query, tab: 'schedule' }
            });
    } else {
        currentView.value = Standing
        tabsStore.onSelectTab("Standings")
        router.replace(
            {
                query: { ...route.query, tab: 'standings' }
            });
    }
}

function setRoutesView() {
    console.log(route.query)
    if (!route.query.tab) {
        router.replace(
            {
                query: { ...route.query, tab: 'schedule' }
            });
        currentView.value = Schedule
        tabsStore.onSelectTab("Schedule")
        return "Schedule"
    } else if (route.query.tab === 'schedule') {
        currentView.value = Schedule
        tabsStore.onSelectTab("Schedule")
        return "Schedule"
    }
    else if (route.query.tab === 'standings') {
        currentView.value = Standing
        tabsStore.onSelectTab("Standings")
        return "Standings"
    }
    else {
        router.replace(
            {
                query: { ...route.query, tab: 'schedule' }
            });
        currentView.value = Schedule
        tabsStore.onSelectTab("Schedule")
        return "Schedule"
    }
}


onMounted(() => {
    const tab = setRoutesView()
    tabsStore.onSelectTab(tab)
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);
});


onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <section class="relative flex flex-col gap-2 p-2">
        <Header :title="simulator.leagueName" :onSave="onSave" />
        <div class="sticky-toggle-button lg:hidden" ref="stickyToggleButton">
            <div class="flex items-center justify-center w-full">
                <ToggleButton :tabs="['Schedule', 'Standings']" @change-view="changeCurrentView" />
            </div>
        </div>

        <div class="flex flex-col items-center justify-start w-full gap-2 lg:hidden">
            <Schedule v-if="tabsStore.selectedTab === 'Schedule'" />
            <Standing v-if="tabsStore.selectedTab === 'Standings'" />
        </div>
        <!-- <div class="flex flex-col items-center justify-start w-full gap-2 lg:hidden">
            <KeepAlive>
                <component :is="currentView"></component>
            </KeepAlive>
        </div> -->
        <div class="hidden lg:flex lg:flex-row">

            <Schedule />

            <Standing />
        </div>

    </section>
</template>
  
<style scoped>
.sticky-toggle-button.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    padding-top: .5rem;
    padding-bottom: .5rem;
    backdrop-filter: blur(10px);
    z-index: 50;
}
</style>