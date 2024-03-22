import type { SavedGame } from '@/types'
import { ref, onMounted } from 'vue'

export default function useSavedGames() {
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
    const existIndex = gamesRef.value.findIndex((games) => games.gameId === newGame.gameId)
    if (existIndex !== -1) {
      gamesRef.value[existIndex] = newGame
      localStorage.setItem('savedGames', JSON.stringify(gamesRef.value))
      return
    } else {
      gamesRef.value.push(newGame)
      localStorage.setItem('savedGames', JSON.stringify(gamesRef.value))
    }
  }

  function removeGame(gameId: string) {
    const afterRemoveGame = gamesRef.value.filter((games) => games.gameId !== gameId)
    gamesRef.value = afterRemoveGame
    localStorage.setItem('savedGames', JSON.stringify(gamesRef.value))
  }

  function renameGame(gameId: string, newName: string) {
    const gameIndex = gamesRef.value.findIndex((games) => games.gameId === gameId)
    gamesRef.value[gameIndex].gameName = newName
    localStorage.setItem('savedGames', JSON.stringify(gamesRef.value))
  }

  onMounted(() => fetchGames())

  return { gamesRef, saveNewGame, removeGame, renameGame }
}
