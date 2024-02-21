import type { Team } from '@/types'

export function playMatch(host: Team, guest: Team, gameId: string, round: number) {
  console.log('play', host, guest)
  let hc = 0.01
  let point = 0

  let h_a = host.att + host.att * hc + Math.floor(Math.random() * 10)
  let h_p = host.mid + host.mid * hc + Math.floor(Math.random() * 10)
  let h_o = host.def + host.def * hc + Math.floor(Math.random() * 10)
  let g_a = guest.att + Math.floor(Math.random() * 10)
  let g_p = guest.mid + Math.floor(Math.random() * 10)
  let g_o = guest.def + Math.floor(Math.random() * 10)
  let shot = (h_a + h_p) / 9.75
  let saves = (g_p + g_o) / 10
  let score_host = Math.floor(shot - saves) + Math.floor(Math.random() * 2)
  let shot2 = (g_a + g_p) / 9.75
  let saves2 = (h_p + h_o) / 10
  let score_guest = Math.floor(shot2 - saves2) + Math.floor(Math.random() * 2)

  if (score_host < 0) {
    score_host = 0 + Math.floor(Math.random() * 2)
  }
  if (score_guest < 0) {
    score_guest = 0 + Math.floor(Math.random() * 2)
  }

  let hostResults = {
    games: 1,
    win: 0,
    draw: 0,
    loses: 0,
    goalPlus: score_host,
    goalMinus: score_guest,
    points: 0
  }
  let guestResults = {
    games: 1,
    win: 0,
    draw: 0,
    loses: 0,
    goalPlus: score_guest,
    goalMinus: score_host,
    points: 0
  }

  if (score_host > score_guest) {
    hostResults.points = 3
    guestResults.points = 0
    hostResults.win = 1
    guestResults.loses = 1
  } else if (score_host < score_guest) {
    guestResults.points = 3
    hostResults.points = 0
    guestResults.win = 1
    hostResults.loses = 1
  } else if (score_host == score_guest) {
    hostResults.points = 1
    guestResults.points = 1
    hostResults.draw = 1
    guestResults.draw = 1
  }

  // console.log("scores: ", score1, score_guest);
  // dispatch(
  //   playGame({
  //     round,
  //     gameId,
  //     hostScore: score1,
  //     guestScore: score_guest,
  //   })
  // );
  // dispatch(
  //   updateTable({
  //     host,
  //     guest,
  //     hostTable,
  //     guestTable,
  //   })
  // );

  return { score_host, score_guest, hostResults, guestResults }
}
