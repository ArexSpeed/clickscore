<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useTabsStore } from '@/stores/tabs';
import { onMounted, ref, onBeforeUnmount } from 'vue';
import BackButton from '@/components/BackButton.vue';
import ToggleButton from '@/components/ui/ToggleButton.vue';
import Schedule from '@/components/Schedule.vue';
import Standing from '@/components/Standing.vue';
import SaveButton from '@/components/ui/SaveButton.vue';

const stickyToggleButton = ref<HTMLElement | null>(null);

const tabsStore = useTabsStore();

const router = useRouter();
const name = "Premier League"

const onSave = () => {
    console.log("onSave");
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
        <div class="flex flex-row items-center w-full gap-4">

            <BackButton />

            <h2 class="w-full text-2xl font-semibold bg-transparent outline-none focus:text-blue-200">
                {{ name }}
            </h2>
            <SaveButton @click="onSave" />
        </div>
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

.wrap {
    overscroll-behavior: contain;
}

.headers {
    position: sticky;
    top: 0;
    z-index: 1;
}

.scroller {
    overflow: auto;
}

.track {
    scroll-snap-align: start;
}

.heading {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}

/* https://uxdesign.cc/position-stuck-96c9f55d9526 */
</style>