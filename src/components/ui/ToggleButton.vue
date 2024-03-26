<script setup lang="ts">
import { useTabsStore } from '@/stores/tabs';

const tabsStore = useTabsStore();

const { tabs } = defineProps(['tabs']);
const emit = defineEmits(['change-view']);

function onChange(value: string) {
    tabsStore.onSelectTab(value)
    emit('change-view', value);
}

</script>

<template>
    <div class="flex flex-row items-center justify-center w-full max-w-[250px] text-white rounded-lg bg-dark-secondary">
        <div class="w-full m-1" v-for="tab in tabs" :key="tab">
            <button type="button" class='flex flex-row items-center justify-center flex-1 w-full p-1 font-medium rounded-md'
                :class="[tab === tabsStore.selectedTab ? 'bg-gray-primary' : 'bg-transparent']" @click="onChange(tab)">
                {{ tab }}
            </button>
        </div>
    </div>
</template>