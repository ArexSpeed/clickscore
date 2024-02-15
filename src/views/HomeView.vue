<script setup lang="ts">
import SquareBox from "@/components/ui/SquareBox.vue"
const sports = [
  {
    id: "1",
    name: "Football",
    link: "/",
  },
  {
    id: "2",
    name: "Basketball",
    link: "/",

  },
  {
    id: "3",
    name: "Speedway",
    link: "/about",

  },
  {
    id: "4",
    name: "Volleyball",
    link: "/volley",

  },
  {
    id: "5",
    name: "Formula 1",
    link: "/",

  }
]
</script>

<template>
  <div class="text-2xl">Choose your sport</div>

  <div class="grid grid-cols-2 gap-4 p-2 justify-center items-center">
    <div v-for="sport in sports">
      <SquareBox :key="sport.id" :link="sport.link" :name="sport.name" />
    </div>

  </div>
</template>
