<script setup lang="ts">
import { onMounted, KeepAlive, shallowRef, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ToggleButton from '@/components/ui/ToggleButton.vue';
import NewGameScreen from '@/components/screens/NewGameScreen.vue';
import SavedGamesScreen from '@/components/screens/SavedGamesScreen.vue';
import HomeHeader from '@/components/Headers/HomeHeader.vue';
import { useTabsStore } from '@/stores/tabs';

const currentView = shallowRef(NewGameScreen);
const tabsStore = useTabsStore();
const router = useRouter();
const route = useRoute();

function changeCurrentView(view: "New" | "Saved") {
    if (view === "New") {
        currentView.value = NewGameScreen
        tabsStore.onSelectTab("New")
        router.replace(
            {

                query: { tab: 'new' }
            });
    } else {
        currentView.value = SavedGamesScreen
        tabsStore.onSelectTab("Saved")
        router.replace(
            {
                query: { tab: 'saved' }
            });
    }
}

function setRoutesView() {
    console.log(route.query)
    if (!route.query.tab) {
        router.replace(
            {
                query: { tab: 'new' }
            });
        currentView.value = NewGameScreen
        tabsStore.onSelectTab("New")
        return "New"
    } else if (route.query.tab === 'new') {
        currentView.value = NewGameScreen
        tabsStore.onSelectTab("New")
        return "New"
    }
    else if (route.query.tab === 'saved') {
        currentView.value = SavedGamesScreen
        tabsStore.onSelectTab("Saved")
        return "Saved"
    }
    else {
        router.replace(
            {
                query: { tab: 'new' }
            });
        currentView.value = NewGameScreen
        tabsStore.onSelectTab("New")
        return "New"
    }
}

onMounted(() => {
    const tab = setRoutesView()
    tabsStore.onSelectTab(tab)
});

</script>

<template>
    <section class="relative flex flex-col gap-2 p-2">
        <HomeHeader />
        <div class="flex items-center justify-center w-full">
            <ToggleButton :tabs="['New', 'Saved']" @change-view="changeCurrentView" />
        </div>
        <div class="flex flex-col items-center justify-center w-full">
            <KeepAlive>
                <component :is="currentView"></component>
            </KeepAlive>
        </div>
    </section>
</template>
