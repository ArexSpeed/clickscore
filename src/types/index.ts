export type Team = {
  id: string
  name: string
  skillA: number
  skillB: number
  skillC: number
}

export type League = {
  id: string
  sportId: string
  name: string
}

export type Schedule = {
  round: number
  games: ScheduleGame[]
}

export type ScheduleGame = {
  round: number
  id: string
  host: Team
  hostScore: number
  guest: Team
  guestScore: number
  isPlayed: boolean
}

export type Standings = {
  id: string
  name: string
  games: number
  win: number
  draw: number
  loses: number
  plus: number
  minus: number
  bonus?: number
  points: number
}

export type StandingResult = {
  games: number
  win: number
  draw: number
  loses: number
  plus: number
  minus: number
  points: number
}

export type SavedTeams = {
  id: number
  leagueName: string
  teams: Team[]
}

export type SavedGame = {
  ownerId: string
  gameId: string
  gameName: string
  sport: string
  option: string
  lastSaveDate: Date
  teams: Team[]
  schedule: Schedule[]
  standing: Standings[]
}
