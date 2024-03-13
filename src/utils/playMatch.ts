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

export function playMatchBasketball(host: Team, guest: Team) {
  let host_point = 0
  let guest_point = 0

  let hc = 0.1
  //losowanie punktow
  let pts = Math.floor(Math.random() * (210 - 150)) + 150
  for (let i = 0; i < 300; i++) {
    //change point fo pont
    if (i % 2 == 0) {
      //atak hosta
      let host_shot = host.att / 2 + host.mid / 2 + (Math.floor(Math.random() * 20) - 10)
      let guest_def = guest.def / 2 + guest.mid / 2 + (Math.floor(Math.random() * 20) - 10)
      //console.log("hostShot " + host_shot + " guestDef " + guest_def)
      let diff = host_shot - guest_def
      let rand_shot = Math.floor(Math.random() * 100)
      if (diff > 1) {
        if (rand_shot < 75) {
          let rand_point = Math.floor(Math.random() * 100)
          rand_point > 30 ? (host_point += 2) : (host_point += 3)
        } else {
          host_point += 0
        }
      } else if (diff > -10) {
        if (rand_shot < 70) {
          let rand_point = Math.floor(Math.random() * 100)
          rand_point > 30 ? (host_point += 2) : (host_point += 3)
        } else {
          host_point += 0
        }
      } else if (diff > -20) {
        if (rand_shot < 65) {
          let rand_point = Math.floor(Math.random() * 100)
          rand_point > 30 ? (host_point += 2) : (host_point += 3)
        } else {
          host_point += 0
        }
      } else if (diff > -30) {
        if (rand_shot < 60) {
          let rand_point = Math.floor(Math.random() * 100)
          rand_point > 30 ? (host_point += 2) : (host_point += 3)
        } else {
          host_point += 0
        }
      } else if (diff > -40) {
        if (rand_shot < 55) {
          let rand_point = Math.floor(Math.random() * 100)
          rand_point > 30 ? (host_point += 2) : (host_point += 3)
        } else {
          host_point += 0
        }
      } else if (diff > -50) {
        if (rand_shot < 50) {
          let rand_point = Math.floor(Math.random() * 100)
          rand_point > 30 ? (host_point += 2) : (host_point += 3)
        } else {
          host_point += 0
        }
      } else {
        if (rand_shot < 40) {
          let rand_point = Math.floor(Math.random() * 100)
          rand_point > 30 ? (host_point += 2) : (host_point += 3)
        } else {
          host_point += 0
        }
      }
    } else {
      //atak guesta
      let guest_shot = guest.att / 2 + guest.mid / 2 + (Math.floor(Math.random() * 20) - 10)
      let host_def = host.def / 2 + host.mid / 2 + (Math.floor(Math.random() * 20) - 10)
      //console.log("-----")
      //console.log("guestShot " + guest_shot + " hostDef " + host_def)
      let diff = guest_shot - host_def
      let rand_shot = Math.floor(Math.random() * 100)
      if (diff > 1) {
        if (rand_shot < 75) {
          let rand_point = Math.floor(Math.random() * 100)
          rand_point > 30 ? (guest_point += 2) : (guest_point += 3)
        } else {
          guest_point += 0
        }
      } else if (diff > -10) {
        if (rand_shot < 70) {
          let rand_point = Math.floor(Math.random() * 100)
          rand_point > 30 ? (guest_point += 2) : (guest_point += 3)
        } else {
          guest_point += 0
        }
      } else if (diff > -20) {
        if (rand_shot < 65) {
          let rand_point = Math.floor(Math.random() * 100)
          rand_point > 30 ? (guest_point += 2) : (guest_point += 3)
        } else {
          guest_point += 0
        }
      } else if (diff > -30) {
        if (rand_shot < 60) {
          let rand_point = Math.floor(Math.random() * 100)
          rand_point > 30 ? (guest_point += 2) : (guest_point += 3)
        } else {
          guest_point += 0
        }
      } else if (diff > -40) {
        if (rand_shot < 55) {
          let rand_point = Math.floor(Math.random() * 100)
          rand_point > 30 ? (guest_point += 2) : (guest_point += 3)
        } else {
          guest_point += 0
        }
      } else if (diff > -50) {
        if (rand_shot < 50) {
          let rand_point = Math.floor(Math.random() * 100)
          rand_point > 30 ? (guest_point += 2) : (guest_point += 3)
        } else {
          guest_point += 0
        }
      } else {
        if (rand_shot < 40) {
          let rand_point = Math.floor(Math.random() * 100)
          rand_point > 30 ? (guest_point += 2) : (guest_point += 3)
        } else {
          guest_point += 0
        }
      }
    }
    let sum_pts = host_point + guest_point

    if (sum_pts > pts) {
      break
    }
    //host_pow>guest_pow ? host_point++ : guest_point++;
  }
  if (host_point == guest_point) {
    host_point++
  }

  let hostResults = {
    games: 1,
    win: 0,
    draw: 0,
    loses: 0,
    goalPlus: host_point,
    goalMinus: guest_point,
    points: 0
  }
  let guestResults = {
    games: 1,
    win: 0,
    draw: 0,
    loses: 0,
    goalPlus: guest_point,
    goalMinus: host_point,
    points: 0
  }

  if (host_point > guest_point) {
    hostResults.points = 3
    guestResults.points = 0
    hostResults.win = 1
    guestResults.loses = 1
  } else if (host_point < guest_point) {
    guestResults.points = 3
    hostResults.points = 0
    guestResults.win = 1
    hostResults.loses = 1
  } else if (host_point == guest_point) {
    hostResults.points = 1
    guestResults.points = 1
    hostResults.draw = 1
    guestResults.draw = 1
  }

  let score_host = host_point
  let score_guest = guest_point
  return { score_host, score_guest, hostResults, guestResults }
}
