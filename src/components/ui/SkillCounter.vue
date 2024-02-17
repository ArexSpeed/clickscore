<script setup lang="ts">
import { ref, watch } from 'vue';

const { skill } = defineProps(['skill']);
let skil = ref<number>(skill)

const onMinus = () => {
    skil.value--;
}
const onPlus = () => {
    skil.value++;
    console.log("onPlus", skill);
}
const onChangeSkill = (e: any) => {
    skill.value = e.target.value
}

</script>

<template>
    <div class="flex flex-row items-center justify-center gap-1">
        <button class="flex items-center justify-center w-4 h-4 bg-red-800 rounded-sm" @click="onMinus">-</button>
        <input type="number" :value="skil" @change="" class="w-5 p-0 m-0 font-semibold bg-transparent" />
        <button class="flex items-center justify-center w-4 h-4 bg-green-800 rounded-sm" @click="onPlus">+</button>
    </div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>