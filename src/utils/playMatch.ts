import type { Team } from '@/types'

interface Result {
  score_host: number
  score_guest: number
  hostResults: {
    games: number
    win: number
    draw: number
    loses: number
    plus: number
    minus: number
    points: number
  }
  guestResults: {
    games: number
    win: number
    draw: number
    loses: number
    plus: number
    minus: number
    points: number
  }
}

export function playMatch(sport: string, host: Team, guest: Team): Result {
  switch (sport) {
    case 'Football':
      return playMatchFootball(host, guest)
    case 'Basketball':
      return playMatchBasketball(host, guest)
    case 'Speedway':
      return playMatchSpeedway(host, guest)
    case 'Volleyball':
      return playMatchVolleyball(host, guest)
    default:
      return playMatchFootball(host, guest)
  }
}

export function playMatchFootball(host: Team, guest: Team) {
  console.log('play', host, guest)
  let hc = 0.01
  let point = 0
  // skillA - attack skillB - mid skillC - def

  let h_a = host.skillA + host.skillA * hc + Math.floor(Math.random() * 10)
  let h_p = host.skillB + host.skillB * hc + Math.floor(Math.random() * 10)
  let h_o = host.skillC + host.skillC * hc + Math.floor(Math.random() * 10)
  let g_a = guest.skillA + Math.floor(Math.random() * 10)
  let g_p = guest.skillB + Math.floor(Math.random() * 10)
  let g_o = guest.skillC + Math.floor(Math.random() * 10)
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
    plus: score_host,
    minus: score_guest,
    points: 0
  }
  let guestResults = {
    games: 1,
    win: 0,
    draw: 0,
    loses: 0,
    plus: score_guest,
    minus: score_host,
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

  return { score_host, score_guest, hostResults, guestResults }
}

export function playMatchBasketball(host: Team, guest: Team) {
  let host_point = 0
  let guest_point = 0
  // skillA - attack skillB - mid skillC - def
  let hc = 0.1
  //losowanie punktow
  let pts = Math.floor(Math.random() * (210 - 150)) + 150
  for (let i = 0; i < 300; i++) {
    //change point fo pont
    if (i % 2 == 0) {
      //atak hosta
      let host_shot = host.skillA / 2 + host.skillB / 2 + (Math.floor(Math.random() * 20) - 10)
      let guest_skillC = guest.skillC / 2 + guest.skillB / 2 + (Math.floor(Math.random() * 20) - 10)
      //console.log("hostShot " + host_shot + " guestskillC " + guest_skillC)
      let diff = host_shot - guest_skillC
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
      let guest_shot = guest.skillA / 2 + guest.skillB / 2 + (Math.floor(Math.random() * 20) - 10)
      let host_skillC = host.skillC / 2 + host.skillB / 2 + (Math.floor(Math.random() * 20) - 10)
      //console.log("-----")
      //console.log("guestShot " + guest_shot + " hostskillC " + host_skillC)
      let diff = guest_shot - host_skillC
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
    plus: host_point,
    minus: guest_point,
    points: 0
  }
  let guestResults = {
    games: 1,
    win: 0,
    draw: 0,
    loses: 0,
    plus: guest_point,
    minus: host_point,
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

export function playMatchSpeedway(host: Team, guest: Team) {
  let host_point = 0
  let guest_point = 0
  let hc = 0.1
  let host_skil = 0,
    guest_skil = 0

  //40% t, 30% tw, 30% m;
  let host_all = host.skillA + host.skillB + host.skillC
  let guest_all = guest.skillA + guest.skillB + guest.skillC
  for (let i = 0; i < 15; i++) {
    if (i < 2) {
      host_skil = host.skillC + host.skillC * hc + Math.floor(Math.random() * 10)
      guest_skil = guest.skillC + Math.floor(Math.random() * 10)
    } else if (i < 4) {
      host_skil = host.skillB + host.skillB * hc + Math.floor(Math.random() * 10)
      guest_skil = guest.skillB + Math.floor(Math.random() * 10)
    } else if (i < 6) {
      host_skil = host.skillA + host.skillA * hc + Math.floor(Math.random() * 10)
      guest_skil = guest.skillA + Math.floor(Math.random() * 10)
    } else if (i < 9) {
      host_skil =
        (host.skillB + host.skillB * hc + Math.floor(Math.random() * 10)) * 0.5 +
        (host.skillC + host.skillC * hc + Math.floor(Math.random() * 10)) * 0.5
      guest_skil =
        (guest.skillB + Math.floor(Math.random() * 10)) * 0.5 +
        (guest.skillC + Math.floor(Math.random() * 10)) * 0.5
    } else if (i < 12) {
      host_skil =
        (host.skillB + host.skillB * hc + Math.floor(Math.random() * 10)) * 0.5 +
        (host.skillA + host.skillA * hc + Math.floor(Math.random() * 10)) * 0.5
      guest_skil =
        (guest.skillB + Math.floor(Math.random() * 10)) * 0.5 +
        (guest.skillA + Math.floor(Math.random() * 10)) * 0.5
    } else if (i < 15) {
      host_skil =
        (host.skillA + host.skillA * hc + Math.floor(Math.random() * 10)) * 0.5 +
        (host.skillC + host.skillC * hc + Math.floor(Math.random() * 10)) * 0.5
      guest_skil =
        (guest.skillA + Math.floor(Math.random() * 10)) * 0.5 +
        (guest.skillC + Math.floor(Math.random() * 10)) * 0.5
    }

    host_point > guest_point ? (host_skil -= 5) : (host_skil += 10)
    guest_point > host_point ? (guest_skil -= 5) : (guest_skil += 10)

    let host_pow = Math.floor(Math.random() * (host_skil - host_all / 2) + host_all / 2)
    let guest_pow = Math.floor(Math.random() * (guest_skil - guest_all / 2) + guest_all / 2)

    if (host_pow > guest_pow + 10) {
      host_point += 5
      guest_point += 1
    } else if (host_pow > guest_pow + 5) {
      host_point += 4
      guest_point += 2
    } else if (host_pow + 10 < guest_pow) {
      host_point += 1
      guest_point += 5
    } else if (host_pow + 5 < guest_pow) {
      host_point += 2
      guest_point += 4
    } else {
      host_point += 3
      guest_point += 3
    }

    //console.log(host_point + ':' + guest_point);
  }

  let hostResults = {
    games: 1,
    win: 0,
    draw: 0,
    loses: 0,
    plus: host_point,
    minus: guest_point,
    points: 0
  }
  let guestResults = {
    games: 1,
    win: 0,
    draw: 0,
    loses: 0,
    plus: guest_point,
    minus: host_point,
    points: 0
  }

  if (host_point > guest_point) {
    hostResults.points = 2
    guestResults.points = 0
    hostResults.win = 1
    guestResults.loses = 1
  } else if (host_point < guest_point) {
    guestResults.points = 2
    hostResults.points = 0
    guestResults.win = 1
    hostResults.loses = 1
  } else if (host_point === guest_point) {
    hostResults.points = 1
    guestResults.points = 1
    hostResults.draw = 1
    guestResults.draw = 1
  }

  let score_host = host_point
  let score_guest = guest_point

  return { score_host, score_guest, hostResults, guestResults }
}

export function playMatchVolleyball(host: Team, guest: Team) {
  let hc = 0.05
  let host_point = 0
  let guest_point = 0
  // skillA - attack skillB - setter skillC - defence

  let host_skil =
    Math.floor(host.skillA + host.skillA * hc) * 0.4 +
    Math.floor(host.skillB + host.skillB * hc) * 0.3 +
    Math.floor(host.skillC + host.skillC * hc) * 0.3
  let guest_skil =
    Math.floor(guest.skillA) * 0.4 + Math.floor(guest.skillB) * 0.3 + Math.floor(guest.skillC) * 0.3
  //console.log(host_skil + ' vs ' + guest_skil)

  for (let i = 0; i < 5; i++) {
    host_point > guest_point ? (host_skil -= 5) : (host_skil += 10)
    guest_point > host_point ? (guest_skil -= 5) : (guest_skil += 10)

    let rand_h = Math.floor(Math.random() * 20)
    let rand_g = Math.floor(Math.random() * 20)
    let host_pow = Math.floor(Math.random() * (host_skil - rand_h) + rand_h)
    let guest_pow = Math.floor(Math.random() * (guest_skil - rand_g) + rand_g)
    //console.log("powe: " + host_pow + ' vs ' + guest_pow);
    if (host_pow >= guest_pow) {
      host_point++
    } else if (host_pow < guest_pow) {
      guest_point++
    }

    if (host_point == 3 || guest_point == 3) {
      break
    }
  }

  let hostResults = {
    games: 1,
    win: 0,
    draw: 0,
    loses: 0,
    plus: host_point,
    minus: guest_point,
    points: 0
  }
  let guestResults = {
    games: 1,
    win: 0,
    draw: 0,
    loses: 0,
    plus: guest_point,
    minus: host_point,
    points: 0
  }

  //Adding points
  if ((host_point == 3 && guest_point == 1) || guest_point == 0) {
    hostResults.points = 3
    guestResults.points = 0
    hostResults.win = 1
    guestResults.loses = 1
  } else if (host_point == 3 && guest_point == 2) {
    hostResults.points = 2
    guestResults.points = 1
    hostResults.win = 1
    guestResults.loses = 1
  } else if (host_point == 2 && guest_point == 3) {
    hostResults.points = 1
    guestResults.points = 2
    hostResults.loses = 1
    guestResults.win = 1
  } else if ((guest_point == 3 && host_point == 1) || host_point == 0) {
    guestResults.points = 3
    hostResults.points = 0
    guestResults.win = 1
    hostResults.loses = 1
  }

  let score_host = host_point
  let score_guest = guest_point

  return { score_host, score_guest, hostResults, guestResults }
}
