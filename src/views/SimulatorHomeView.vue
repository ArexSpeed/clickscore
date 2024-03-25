<script setup lang="ts">
import { onMounted, KeepAlive, shallowRef } from 'vue';
import ToggleButton from '@/components/ui/ToggleButton.vue';
import { useTabsStore } from '@/stores/tabs';
import NewGameScreen from '@/components/screens/NewGameScreen.vue';
import SavedGamesScreen from '@/components/screens/SavedGamesScreen.vue';
import HomeHeader from '@/components/Headers/HomeHeader.vue';

const tabsStore = useTabsStore();
const currentView = shallowRef(NewGameScreen)

function changeCurrentView(view: "New" | "Saved") {
    if (view === "New") {
        currentView.value = NewGameScreen
    } else {
        currentView.value = SavedGamesScreen
    }
}

onMounted(() => {
    tabsStore.onSelectTab("New")
});

</script>

<template>
    <section class="relative flex flex-col gap-2 p-2">
        <HomeHeader />
        <div class="flex items-center justify-center w-full">
            <ToggleButton tab1="New" tab2="Saved" @change-view="changeCurrentView" />
        </div>
        <div class="flex items-center justify-center w-full">
            <KeepAlive>
                <component :is="currentView"></component>
            </KeepAlive>
        </div>
    </section>
</template>
