<script setup lang="ts">
import { onMounted } from 'vue';
import ToggleButton from '@/components/ui/ToggleButton.vue';
import { useTabsStore } from '@/stores/tabs';
import NewGameView from '@/components/NewGameView.vue';
import SavedGamesView from '@/components/SavedGamesView.vue';

const tabsStore = useTabsStore();

onMounted(() => {
  tabsStore.onSelectTab("New")
});

</script>

<template>
  <div class="flex items-center justify-center w-full">
    <ToggleButton tab1="New" tab2="Saved" />
  </div>
  <div v-if="tabsStore.selectedTab === 'New'">
    <NewGameView />
  </div>
  <div v-else>
    <SavedGamesView />
  </div>
</template>
