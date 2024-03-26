<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { useTabsStore } from '@/stores/tabs';
import { onMounted, ref, onBeforeUnmount, shallowRef } from 'vue';
import Header from '@/components/Headers/Header.vue';
import ToggleButton from '@/components/ui/ToggleButton.vue';
import ScheduleScreen from '@/components/screens/ScheduleScreen.vue';
import StandingsScreen from '@/components/screens/StandingsScreen.vue';
import TeamsScreen from '@/components/screens/TeamsScreen.vue';
import useSavedGames from '@/composables/useSavedGames';
import { useSimulatorStore } from '@/stores/simulator';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const stickyToggleButton = ref<HTMLElement | null>(null);

const tabsStore = useTabsStore();
const currentTab = ref('')
const currentView = shallowRef(StandingsScreen);

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
        currentView.value = ScheduleScreen
        tabsStore.onSelectTab("Schedule")
        router.replace(
            {

                query: { ...route.query, tab: 'schedule' }
            });
    }
    else if (view === "Teams") {
        currentView.value = ScheduleScreen
        tabsStore.onSelectTab("Teams")
        router.replace(
            {

                query: { ...route.query, tab: 'teams' }
            });
    }
    else {
        currentView.value = StandingsScreen
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
                query: { ...route.query, tab: 'standings' }
            });
        currentView.value = ScheduleScreen
        tabsStore.onSelectTab("Standings")
        return "Standings"
    } else if (route.query.tab === 'schedule') {
        currentView.value = ScheduleScreen
        tabsStore.onSelectTab("Schedule")
        return "Schedule"
    }
    else if (route.query.tab === 'standings') {
        currentView.value = StandingsScreen
        tabsStore.onSelectTab("Standings")
        return "Standings"
    }
    else {
        router.replace(
            {
                query: { ...route.query, tab: 'standings' }
            });
        currentView.value = StandingsScreen
        tabsStore.onSelectTab("Standings")
        return "Standings"
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
                <ToggleButton :tabs="['Schedule', 'Standings', 'Teams']" @change-view="changeCurrentView" />
            </div>
        </div>

        <div class="flex flex-col items-center justify-start w-full gap-2 lg:hidden">
            <ScheduleScreen v-if="tabsStore.selectedTab === 'Schedule'" />
            <StandingsScreen v-if="tabsStore.selectedTab === 'Standings'" />
            <TeamsScreen v-if="tabsStore.selectedTab === 'Teams'" />
        </div>
        <!-- <div class="flex flex-col items-center justify-start w-full gap-2 lg:hidden">
            <KeepAlive>
                <component :is="currentView"></component>
            </KeepAlive>
        </div> -->
        <div class="hidden lg:flex lg:flex-row">

            <ScheduleScreen />
            <div class="flex flex-col w-full">
                <div class="items-center justify-center hidden w-full lg:flex">
                    <ToggleButton :tabs="['Standings', 'Teams']" @change-view="changeCurrentView" />
                </div>
                <TeamsScreen v-if="tabsStore.selectedTab === 'Teams'" />
                <StandingsScreen v-if="tabsStore.selectedTab === 'Standings'" />
            </div>
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