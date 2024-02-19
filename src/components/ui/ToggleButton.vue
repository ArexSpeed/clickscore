<script setup lang="ts">
import { useTabsStore } from '@/stores/tabs';

const tabsStore = useTabsStore();

const { tab1, tab2 } = defineProps(['tab1', 'tab2']);

</script>

<template>
    <div className="flex flex-row items-center justify-center w-full max-w-[250px] text-white rounded-lg bg-dark-secondary">
        <button type="button"
            class='flex flex-row items-center justify-center flex-1 w-full gap-1 p-1 m-1 font-medium rounded-md'
            :class="[tab1 === tabsStore.selectedTab ? 'bg-gray-primary' : 'bg-transparent']"
            @click="tabsStore.onSelectTab(tab1)">
            {{ tab1 }}
        </button>
        <button type="button"
            class='flex flex-row items-center justify-center flex-1 w-full gap-1 p-1 m-1 font-medium rounded-md'
            :class="[tab2 === tabsStore.selectedTab ? 'bg-gray-primary' : 'bg-transparent']"
            @click="tabsStore.onSelectTab(tab2)">
            {{ tab2 }}
        </button>
    </div>
</template>