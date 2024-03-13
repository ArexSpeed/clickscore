<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useTabsStore } from '@/stores/tabs';
import { onMounted } from 'vue';
import BackButton from '@/components/BackButton.vue';
import ToggleButton from '@/components/ui/ToggleButton.vue';
import Schedule from '@/components/Schedule.vue';
import Standing from '@/components/Standing.vue';

const tabsStore = useTabsStore();

const router = useRouter();
const name = "Premier League"

onMounted(() => {
    tabsStore.onSelectTab("Schedule")
});

</script>

<template>
    <section class="relative flex flex-col gap-2 p-2">
        <BackButton />
        <h2 class="w-full text-2xl font-semibold bg-transparent outline-none focus:text-blue-200">
            {{ name }}
        </h2>
        <div class="sticky top-0 flex items-center justify-center w-full bg-red-400 lg:hidden">

            <ToggleButton tab1="Schedule" tab2="Standing" />
        </div>
        <div class="flex flex-col items-center justify-start w-full gap-2 lg:hidden">
            <Schedule v-if="tabsStore.selectedTab === 'Schedule'" />
            <Standing v-if="tabsStore.selectedTab === 'Standing'" />
        </div>
        <div class="hidden lg:flex lg:flex-row">

            <Schedule />

            <Standing />
        </div>

    </section>
</template>
  