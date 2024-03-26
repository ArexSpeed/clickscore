import type { Team, Standing } from '@/types'

export const createStanding = (teams: Team[]): Standing[] => {
  const table: Standing[] = []
  teams.forEach((team) =>
    table.push({
      id: team.id,
      name: team.name,
      games: 0,
      win: 0,
      draw: 0,
      loses: 0,
      goalPlus: 0,
      goalMinus: 0,
      points: 0
    })
  )
  return table
}
