import type { SavedTeams, Team } from '@/types'
import { ref, onMounted } from 'vue'

export default function useSavedTeams() {
  const teamsRef = ref<SavedTeams[]>([])

  function fetchTeams() {
    if (localStorage.getItem('savedTeams')) {
      try {
        teamsRef.value = JSON.parse(localStorage.getItem('savedTeams')!)
      } catch (e) {
        localStorage.removeItem('savedTeams')
      }
    }
  }

  function saveNewTeams(newTeams: SavedTeams) {
    teamsRef.value.push(newTeams)
    localStorage.setItem('savedTeams', JSON.stringify(teamsRef.value))
  }

  onMounted(() => fetchTeams())

  return { teamsRef, saveNewTeams }
}
