import type { SavedGame } from '@/types'
import { ref, onMounted } from 'vue'

export default function useSavedGames() {
  /*
    needs:
    {
        ownerId: string,
        gameId: string,
        gameName: string,
        sport: string,
        option: string,
        lastSaveDate: string,
        teams: [],
        schedule: [],
        standings: [],
    }
    */
  const gamesRef = ref<SavedGame[]>([])

  function fetchGames() {
    console.log('Fetching games')
    if (localStorage.getItem('savedGames')) {
      try {
        gamesRef.value = JSON.parse(localStorage.getItem('savedGames')!)
        console.log('alue', gamesRef.value)
      } catch (e) {
        localStorage.removeItem('savedGames')
      }
    }
  }

  function saveNewGame(newGame: SavedGame) {
    gamesRef.value.push(newGame)
    localStorage.setItem('savedGames', JSON.stringify(gamesRef.value))
  }

  onMounted(() => fetchGames())

  return { gamesRef, saveNewGame }
}
