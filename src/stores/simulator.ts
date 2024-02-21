import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Team } from '@/types'

export const useSimulatorStore = defineStore('simulator', () => {
  const leagueName = ref('')
  const teams = ref<Team[]>([])
  function onLeagueName(name: string) {
    leagueName.value = name
  }
  function onSelectTeams(selectedTeams: Team[]) {
    console.log('onSelect', selectedTeams)
    teams.value = selectedTeams
  }
  function onChangeTeamName(id: number, name: string) {
    const teamId = teams.value.findIndex((team) => team.id === id)
    teams.value[teamId].name = name
  }
  function onChangeTeamSkill(id: number, skill: number, skillKey: 'att' | 'mid' | 'def') {
    console.log('onChange', id, skill, skillKey)
    const teamId = teams.value.findIndex((team) => team.id === id)
    teams.value[teamId][skillKey] = skill
  }

  return { leagueName, teams, onLeagueName, onSelectTeams, onChangeTeamName, onChangeTeamSkill }
})
