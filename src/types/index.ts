export type Team = {
  id: number
  name: string
  def: number
  mid: number
  att: number
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

export type Standing = {
  name: string
  games: number
  win: number
  draw: number
  loses: number
  goalPlus: number
  goalMinus: number
  points: number
}

export type StandingResult = {
  games: number
  win: number
  draw: number
  loses: number
  goalPlus: number
  goalMinus: number
  points: number
}

export type SavedTeams = {
  id: number
  leagueName: string
  teams: Team[]
}
