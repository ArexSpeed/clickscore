<script setup lang="ts">
import { onMounted } from 'vue';
import ToggleButton from '@/components/ui/ToggleButton.vue';
import { useTabsStore } from '@/stores/tabs';
import NewGameScreen from '@/components/screens/NewGameScreen.vue';
import SavedGamesScreen from '@/components/screens/SavedGamesScreen.vue';
import HomeHeader from '@/components/Headers/HomeHeader.vue';

const tabsStore = useTabsStore();

onMounted(() => {
    tabsStore.onSelectTab("New")
});

</script>

<template>
    <section class="relative flex flex-col gap-2 p-2">
        <HomeHeader />
        <div class="flex items-center justify-center w-full">
            <ToggleButton tab1="New" tab2="Saved" />
        </div>
        <div v-if="tabsStore.selectedTab === 'New'">
            <NewGameScreen />
        </div>
        <div v-else class="flex justify-center w-full">
            <SavedGamesScreen />
        </div>
    </section>
</template>
