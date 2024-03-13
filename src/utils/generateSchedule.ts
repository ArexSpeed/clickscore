import type { Schedule, Team } from '@/types'

export const generateSchedule = (teams: Team[]): Schedule[] => {
  const schedule: Schedule[] = []
  let games = []
  for (let i = 0; i < teams.length - 1; i++) {
    for (var j = 0; j < teams.length / 2; j++) {
      if (i % 2 === 0) {
        games.push({
          round: i + 1,
          id: `r${i + 1}g${j + 1}`,
          host: teams[j],
          hostScore: 0,
          guest: teams[teams.length - 1 - j],
          guestScore: 0,
          isPlayed: false
        })
      } else {
        games.push({
          round: i + 1,
          id: `r${i + 1}g${j + 1}`,
          host: teams[teams.length - 1 - j],
          hostScore: 0,
          guest: teams[j],
          guestScore: 0,
          isPlayed: false
        })
      }
    }
    schedule.push({
      round: i + 1,
      games: games
    })
    teams.splice(1, 0, teams[teams.length - 1])
    teams.pop()
    games = []
  }

  const rematchSchedule = generateRematchSchedule(teams)

  return schedule.concat(rematchSchedule)
}

export const generateRematchSchedule = (teams: Team[]): Schedule[] => {
  const schedule: Schedule[] = []
  let games = []
  for (let i = 0; i < teams.length - 1; i++) {
    for (var j = 0; j < teams.length / 2; j++) {
      if (i % 2 === 0) {
        games.push({
          round: i + teams.length,
          id: `r${i + teams.length}g${j + 1}`,
          host: teams[teams.length - 1 - j],
          hostScore: 0,
          guest: teams[j],
          guestScore: 0,
          isPlayed: false
        })
      } else {
        games.push({
          round: i + teams.length,
          id: `r${i + teams.length}g${j + 1}`,
          host: teams[j],
          hostScore: 0,
          guest: teams[teams.length - 1 - j],
          guestScore: 0,
          isPlayed: false
        })
      }
    }
    schedule.push({
      round: i + teams.length,
      games: games
    })
    teams.splice(1, 0, teams[teams.length - 1])
    teams.pop()
    games = []
  }

  return schedule
}
