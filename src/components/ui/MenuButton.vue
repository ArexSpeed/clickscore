<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

</script>

<template>
    <div class="text-right">
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton class="flex items-center justify-center w-8 h-8 rounded-lg bg-dark-secondary">
                    <svg class="w-5 h-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <MenuItems
                    class="absolute left-0 w-56 h-auto mt-2 origin-top-right divide-y divide-gray-800 rounded-md shadow-lg bg-dark-secondary ring-1 ring-black/5 focus:outline-none">
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                            active ? 'bg-blue-400 text-white' : 'text-gray-200',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">

                            Edit
                        </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                            active ? 'bg-blue-400 text-white' : 'text-gray-200',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">

                            Duplicate
                        </button>
                        </MenuItem>
                    </div>
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                            active ? 'bg-blue-400 text-white' : 'text-gray-200',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">

                            Archive
                        </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                            active ? 'bg-blue-400 text-white' : 'text-gray-200',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">

                            Move
                        </button>
                        </MenuItem>
                    </div>

                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                            active ? 'bg-blue-400 text-white' : 'text-gray-200',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">

                            Delete
                        </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>
  