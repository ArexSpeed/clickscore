<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useTabsStore } from '@/stores/tabs';
import { onMounted, ref, onBeforeUnmount } from 'vue';
import Header from '@/components/Headers/Header.vue';
import ToggleButton from '@/components/ui/ToggleButton.vue';
import Schedule from '@/components/Schedule.vue';
import Standing from '@/components/Standing.vue';

const stickyToggleButton = ref<HTMLElement | null>(null);

const tabsStore = useTabsStore();

const router = useRouter();
const name = "Premier League"

const onSave = () => {
    console.log("onSave game");
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

onMounted(() => {
    tabsStore.onSelectTab("Schedule")
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);
});


onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <section class="relative flex flex-col gap-2 p-2">
        <Header :title="name" :onSave="onSave" />
        <div class="sticky-toggle-button lg:hidden" ref="stickyToggleButton">
            <div class="flex items-center justify-center w-full">


                <ToggleButton tab1="Schedule" tab2="Standing" />

            </div>
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