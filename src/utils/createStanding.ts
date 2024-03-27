import type { Team, Standings } from '@/types'

export const createStanding = (teams: Team[], sport: string, option: string): Standings[] => {
  const table: Standings[] = []
  teams.forEach((team) => {
    const standing: Standings = {
      id: team.id,
      name: team.name,
      games: 0,
      win: 0,
      draw: 0,
      loses: 0,
      plus: 0,
      minus: 0,
      points: 0
    }

    if (sport === 'Speedway') {
      standing.bonus = 0
    }

    table.push(standing)
  })

  return table
}
