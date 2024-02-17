<script setup lang="ts">
import { ref } from 'vue';
import SquareBox from "@/components/ui/SquareBox.vue";
import sports from "@/data/sports.json"
import leagues from "@/data/leagues.json"
import { useRouter } from 'vue-router';

type Leagues = {
  id: string;
  sportId: string;
  name: string;
}

const router = useRouter();
const selectedSport = ref<string>("");
const selectedLeagues = ref<Leagues[]>([])

const onSelectSport = (id: string) => {
  console.log("onSelectSport");
  selectedSport.value = id
  filterLeague();
}

const filterLeague = () => {
  const filter = leagues.filter((league) => league.sportId === selectedSport.value);
  if (filter) {
    selectedLeagues.value = filter;
  }
}

const goToLeague = () => {
  //router.push(`/${selectedSport}/${league}`);
  router.push(`/settings`);
}

</script>

<template>
  <section class="flex flex-col gap-2 p-2">
    <div class="text-2xl">Choose your sport</div>

    <div class="flex flex-row flex-wrap items-center justify-start gap-4">
      <div v-for="sport in sports">
        <SquareBox :key="sport.id" :name="sport.name" @click="onSelectSport(sport.id)" />
      </div>
    </div>
  </section>
  <section v-if="selectedSport" class="flex flex-col gap-2 p-2">
    <div class="flex flex-row items-center w-full gap-2">
      <span class="whitespace-nowrap">Select option</span>
      <select id="competitionKind" class="bg-dark-secondary shadow-lg text-sm rounded-lg max-w-[300px] block w-full p-2">
        <option selected value="league">League</option>
        <option value="cup">Cup</option>
        <option value="one">One match</option>
      </select>
    </div>
    <div class="text-2xl">Choose your league</div>

    <div class="flex flex-row flex-wrap items-center justify-start gap-4">
      <div v-for="league in selectedLeagues">
        <SquareBox :key="league.id" :name="league.name" @click="goToLeague" />
      </div>
    </div>
  </section>
</template>
