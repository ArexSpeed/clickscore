<script setup lang="ts">
import { onMounted, ref, toRef, computed } from 'vue';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
const props = defineProps<{
    isOpenRenameModal: boolean;
    gameName: string;
}>();

// Convert the prop to a reactive reference
const isOpenRenameModal = toRef(props, 'isOpenRenameModal');
const gameName = toRef(props, 'gameName');
const newName = ref("")

const emit = defineEmits(['close-rename-modal', 'rename-game']);

const closeModal = () => {
    emit('close-rename-modal');
}
const renameGame = () => {
    emit('rename-game', newName.value);
    newName.value = ""
}

const inputModel = computed({
    get: () => newName.value,
    set: (newValue) => { newName.value = newValue; }
});

// onMounted(() => {
//     newName.value = props.gameName
// }
// )

</script>

<template>
    <TransitionRoot appear :show="isOpenRenameModal" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex items-center justify-center min-h-full p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md p-6 overflow-hidden text-center align-middle transition-all transform bg-gray-700 shadow-xl rounded-2xl">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-200">
                                Rename {{ gameName }} game
                            </DialogTitle>

                            <input type="text" v-model="inputModel" :placeholder="gameName"
                                class="w-full p-2 mt-2 text-xl font-semibold text-white bg-gray-800 rounded-lg outline-none focus:text-blue-200" />

                            <div class="flex flex-row items-center justify-center gap-2 mt-4">
                                <button type="button"
                                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-200 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                    @click="renameGame">
                                    Save
                                </button>
                                <button type="button"
                                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal">
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>