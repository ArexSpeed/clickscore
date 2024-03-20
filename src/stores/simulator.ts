import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Team, type Schedule, type Standing, type StandingResult } from '@/types'

export const useSimulatorStore = defineStore('simulator', () => {
  const leagueName = ref('')
  const teams = ref<Team[]>([])
  const selectedSport = ref('')
  const schedule = ref<Schedule[]>([])
  const standing = ref<Standing[]>([])
  function onLeagueName(name: string) {
    leagueName.value = name
  }
  function onSelectSport(name: string) {
    selectedSport.value = name
  }
  function onSelectTeams(selectedTeams: Team[]) {
    teams.value = computed(() => selectedTeams).value
  }
  function onChangeTeamName(id: string, name: string) {
    const teamId = teams.value.findIndex((team) => team.id === id)
    teams.value[teamId].name = name
  }
  function onChangeTeamSkill(id: string, skill: number, skillKey: 'skillA' | 'skillB' | 'skillC') {
    const teamId = computed(() => teams.value.findIndex((team) => team.id === id)).value
    if (teamId !== -1) {
      teams.value[teamId][skillKey] = skill
    }
  }
  function onCreateSchedule(newSchedule: Schedule[]) {
    schedule.value = newSchedule
  }
  function onCreateStanding(newStanding: Standing[]) {
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
    hostName: string,
    guestName: string,
    hostResults: StandingResult,
    guestResults: StandingResult
  ) {
    const hostTeamId = standing.value.findIndex((team) => team.name === hostName)
    standing.value[hostTeamId].games += hostResults.games
    standing.value[hostTeamId].win += hostResults.win
    standing.value[hostTeamId].draw += hostResults.draw
    standing.value[hostTeamId].loses += hostResults.loses
    standing.value[hostTeamId].goalPlus += hostResults.goalPlus
    standing.value[hostTeamId].goalMinus += hostResults.goalMinus
    standing.value[hostTeamId].points += hostResults.points

    const guestTeamId = standing.value.findIndex((team) => team.name === guestName)
    standing.value[guestTeamId].games += guestResults.games
    standing.value[guestTeamId].win += guestResults.win
    standing.value[guestTeamId].draw += guestResults.draw
    standing.value[guestTeamId].loses += guestResults.loses
    standing.value[guestTeamId].goalPlus += guestResults.goalPlus
    standing.value[guestTeamId].goalMinus += guestResults.goalMinus
    standing.value[guestTeamId].points += guestResults.points

    standing.value.sort(
      (a, b) => b.points - a.points || b.goalPlus - a.goalPlus || a.goalMinus - b.goalMinus
    )
  }

  return {
    leagueName,
    selectedSport,
    teams,
    schedule,
    standing,
    onLeagueName,
    onSelectSport,
    onSelectTeams,
    onChangeTeamName,
    onChangeTeamSkill,
    onCreateSchedule,
    onCreateStanding,
    onUpdateSchedule,
    onUpdateStandings
  }
})
