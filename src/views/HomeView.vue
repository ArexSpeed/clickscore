<script setup lang="ts">
import ToggleButton from '@/components/ui/ToggleButton.vue';
import { useTabsStore } from '@/stores/tabs';
import NewGameView from '@/components/NewGameView.vue';
import SavedGamesView from '@/components/SavedGamesView.vue';

const tabsStore = useTabsStore();

</script>

<template>
  <ToggleButton tab1="New" tab2="Saved" />
  <div v-if="tabsStore.selectedTab === 'New'">
    <NewGameView />
  </div>
  <div v-else>
    <SavedGamesView />
  </div>
</template>
