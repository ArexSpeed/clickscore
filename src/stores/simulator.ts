import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Team, type Schedule, type Standings, type StandingResult } from '@/types'

export const useSimulatorStore = defineStore(
  'simulator',
  () => {
    const leagueName = ref('')
    const teams = ref<Team[]>([])
    const selectedSport = ref('')
    const selectedOption = ref('')
    const schedule = ref<Schedule[]>([])
    const standing = ref<Standings[]>([])
    function onLeagueName(name: string) {
      leagueName.value = name
    }
    function onSelectSport(name: string) {
      selectedSport.value = name
    }
    function onSelectOption(name: string) {
      selectedOption.value = name
    }
    function onSelectTeams(selectedTeams: Team[]) {
      teams.value = computed(() => selectedTeams).value
    }
    function onChangeTeamName(id: string, name: string) {
      const teamId = teams.value.findIndex((team) => team.id === id)
      teams.value[teamId].name = name
    }
    function onChangeTeamSkill(
      id: string,
      skill: number,
      skillKey: 'skillA' | 'skillB' | 'skillC'
    ) {
      const teamId = computed(() => teams.value.findIndex((team) => team.id === id)).value
      if (teamId !== -1) {
        teams.value[teamId][skillKey] = skill
      }
    }
    function onCreateSchedule(newSchedule: Schedule[]) {
      schedule.value = newSchedule
    }
    function onCreateStanding(newStanding: Standings[]) {
      standing.value = newStanding
    }
    function onUpdateSchedule(
      round: number,
      gameId: string,
      score_host: number,
      score_guest: number
    ) {
      const scheduleId = schedule.value.findIndex((sc) => sc.round === round)
      const gameIdx = schedule.value[scheduleId].games.findIndex((game) => game.id === gameId)
      schedule.value[scheduleId].games[gameIdx].guestScore = score_guest
      schedule.value[scheduleId].games[gameIdx].hostScore = score_host
      schedule.value[scheduleId].games[gameIdx].isPlayed = true
    }
    function onUpdateStandings(
      hostID: string,
      guestID: string,
      hostResults: StandingResult,
      guestResults: StandingResult,
      gameId: string,
      round: number
    ) {
      const hostTeamId = standing.value.findIndex((team) => team.id === hostID)
      standing.value[hostTeamId].games += hostResults.games
      standing.value[hostTeamId].win += hostResults.win
      standing.value[hostTeamId].draw += hostResults.draw
      standing.value[hostTeamId].loses += hostResults.loses
      standing.value[hostTeamId].plus += hostResults.plus
      standing.value[hostTeamId].minus += hostResults.minus
      standing.value[hostTeamId].points += hostResults.points
      const guestTeamId = standing.value.findIndex((team) => team.id === guestID)
      standing.value[guestTeamId].games += guestResults.games
      standing.value[guestTeamId].win += guestResults.win
      standing.value[guestTeamId].draw += guestResults.draw
      standing.value[guestTeamId].loses += guestResults.loses
      standing.value[guestTeamId].plus += guestResults.plus
      standing.value[guestTeamId].minus += guestResults.minus
      standing.value[guestTeamId].points += guestResults.points

      if (selectedSport.value === 'Speedway' && round >= teams.value.length) {
        const firstGameRound = schedule.value.find((game) =>
          game.games.find((team) => team.host.id === guestID && team.guest.id === hostID)
        ) // return games: [] -> all round
        const findGame = firstGameRound?.games.find(
          (game) => game.host.id === guestID && game.guest.id === hostID
        )
        if (findGame) {
          console.log('findGame', findGame)
          const currentHostSum = findGame.guestScore + hostResults.plus
          const currentGuestSum = findGame.hostScore + guestResults.plus
          if (currentHostSum > currentGuestSum) {
            standing.value[hostTeamId].bonus! += 1
            standing.value[hostTeamId].points += 1
          }
          if (currentHostSum < currentGuestSum) {
            standing.value[guestTeamId].bonus! += 1
            standing.value[guestTeamId].points += 1
          }
        }
      }

      standing.value.sort((a, b) => b.points - a.points || b.plus - a.plus || a.minus - b.minus)
    }
    function setStandingsFromSavedGames(savedStanding: Standings[]) {
      standing.value = savedStanding
    }

    return {
      leagueName,
      selectedSport,
      selectedOption,
      teams,
      schedule,
      standing,
      onLeagueName,
      onSelectSport,
      onSelectOption,
      onSelectTeams,
      onChangeTeamName,
      onChangeTeamSkill,
      onCreateSchedule,
      onCreateStanding,
      onUpdateSchedule,
      onUpdateStandings,
      setStandingsFromSavedGames
    }
  },
  {
    persist: true
  }
)
