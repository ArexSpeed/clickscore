import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTabsStore = defineStore('tabs', () => {
  const selectedTab = ref('')
  function onSelectTab(name: string) {
    selectedTab.value = name
  }

  return { selectedTab, onSelectTab }
})
