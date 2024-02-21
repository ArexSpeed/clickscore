import type { Schedule, Team } from '@/types'

export const createSchedule = (team: Team[]): Schedule[] => {
  return [
    {
      round: 1,
      games: [
        {
          round: 1,
          id: 'r1g1',
          host: team[1],
          hostScore: 0,
          guest: team[0],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 1,
          id: 'r1g2',
          host: team[2],
          hostScore: 0,
          guest: team[19],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 1,
          id: 'r1g3',
          host: team[3],
          hostScore: 0,
          guest: team[18],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 1,
          id: 'r1g4',
          host: team[4],
          hostScore: 0,
          guest: team[17],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 1,
          id: 'r1g5',
          host: team[5],
          hostScore: 0,
          guest: team[16],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 1,
          id: 'r1g6',
          host: team[6],
          hostScore: 0,
          guest: team[15],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 1,
          id: 'r1g7',
          host: team[7],
          hostScore: 0,
          guest: team[14],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 1,
          id: 'r1g8',
          host: team[8],
          hostScore: 0,
          guest: team[13],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 1,
          id: 'r1g9',
          host: team[9],
          hostScore: 0,
          guest: team[12],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 1,
          id: 'r1g10',
          host: team[10],
          hostScore: 0,
          guest: team[11],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 2,
      games: [
        {
          round: 2,
          id: 'r2g1',
          host: team[19],
          hostScore: 0,
          guest: team[1],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 2,
          id: 'r2g2',
          host: team[18],
          hostScore: 0,
          guest: team[2],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 2,
          id: 'r2g3',
          host: team[17],
          hostScore: 0,
          guest: team[3],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 2,
          id: 'r2g4',
          host: team[16],
          hostScore: 0,
          guest: team[4],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 2,
          id: 'r2g5',
          host: team[15],
          hostScore: 0,
          guest: team[5],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 2,
          id: 'r2g6',
          host: team[14],
          hostScore: 0,
          guest: team[6],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 2,
          id: 'r2g7',
          host: team[13],
          hostScore: 0,
          guest: team[7],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 2,
          id: 'r2g8',
          host: team[12],
          hostScore: 0,
          guest: team[8],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 2,
          id: 'r2g9',
          host: team[11],
          hostScore: 0,
          guest: team[9],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 2,
          id: 'r2g10',
          host: team[0],
          hostScore: 0,
          guest: team[10],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 3,
      games: [
        {
          round: 3,
          id: 'r3g1',
          host: team[1],
          hostScore: 0,
          guest: team[18],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 3,
          id: 'r3g2',
          host: team[2],
          hostScore: 0,
          guest: team[17],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 3,
          id: 'r3g3',
          host: team[3],
          hostScore: 0,
          guest: team[16],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 3,
          id: 'r3g4',
          host: team[4],
          hostScore: 0,
          guest: team[15],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 3,
          id: 'r3g5',
          host: team[5],
          hostScore: 0,
          guest: team[14],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 3,
          id: 'r3g6',
          host: team[6],
          hostScore: 0,
          guest: team[13],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 3,
          id: 'r3g7',
          host: team[7],
          hostScore: 0,
          guest: team[12],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 3,
          id: 'r3g8',
          host: team[8],
          hostScore: 0,
          guest: team[11],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 3,
          id: 'r3g9',
          host: team[9],
          hostScore: 0,
          guest: team[10],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 3,
          id: 'r3g10',
          host: team[19],
          hostScore: 0,
          guest: team[0],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 4,
      games: [
        {
          round: 4,
          id: 'r4g1',
          host: team[17],
          hostScore: 0,
          guest: team[1],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 4,
          id: 'r4g2',
          host: team[16],
          hostScore: 0,
          guest: team[2],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 4,
          id: 'r4g3',
          host: team[15],
          hostScore: 0,
          guest: team[3],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 4,
          id: 'r4g4',
          host: team[15],
          hostScore: 0,
          guest: team[4],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 4,
          id: 'r4g5',
          host: team[13],
          hostScore: 0,
          guest: team[5],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 4,
          id: 'r4g6',
          host: team[12],
          hostScore: 0,
          guest: team[6],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 4,
          id: 'r4g7',
          host: team[11],
          hostScore: 0,
          guest: team[7],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 4,
          id: 'r4g8',
          host: team[10],
          hostScore: 0,
          guest: team[8],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 4,
          id: 'r4g9',
          host: team[0],
          hostScore: 0,
          guest: team[9],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 4,
          id: 'r4g10',
          host: team[18],
          hostScore: 0,
          guest: team[19],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 5,
      games: [
        {
          round: 5,
          id: 'r5g1',
          host: team[1],
          hostScore: 0,
          guest: team[16],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 5,
          id: 'r5g2',
          host: team[2],
          hostScore: 0,
          guest: team[15],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 5,
          id: 'r5g3',
          host: team[3],
          hostScore: 0,
          guest: team[14],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 5,
          id: 'r5g4',
          host: team[4],
          hostScore: 0,
          guest: team[13],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 5,
          id: 'r5g5',
          host: team[5],
          hostScore: 0,
          guest: team[12],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 5,
          id: 'r5g6',
          host: team[6],
          hostScore: 0,
          guest: team[11],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 5,
          id: 'r5g7',
          host: team[7],
          hostScore: 0,
          guest: team[10],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 5,
          id: 'r5g8',
          host: team[8],
          hostScore: 0,
          guest: team[9],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 5,
          id: 'r5g9',
          host: team[19],
          hostScore: 0,
          guest: team[17],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 5,
          id: 'r5g10',
          host: team[18],
          hostScore: 0,
          guest: team[0],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 6,
      games: [
        {
          round: 6,
          id: 'r6g1',
          host: team[15],
          hostScore: 0,
          guest: team[1],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 6,
          id: 'r6g2',
          host: team[14],
          hostScore: 0,
          guest: team[2],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 6,
          id: 'r6g3',
          host: team[13],
          hostScore: 0,
          guest: team[3],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 6,
          id: 'r6g4',
          host: team[12],
          hostScore: 0,
          guest: team[4],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 6,
          id: 'r6g5',
          host: team[11],
          hostScore: 0,
          guest: team[5],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 6,
          id: 'r6g6',
          host: team[10],
          hostScore: 0,
          guest: team[6],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 6,
          id: 'r6g7',
          host: team[9],
          hostScore: 0,
          guest: team[7],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 6,
          id: 'r6g8',
          host: team[0],
          hostScore: 0,
          guest: team[8],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 6,
          id: 'r6g9',
          host: team[16],
          hostScore: 0,
          guest: team[19],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 6,
          id: 'r6g10',
          host: team[17],
          hostScore: 0,
          guest: team[18],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 7,
      games: [
        {
          round: 7,
          id: 'r7g1',
          host: team[1],
          hostScore: 0,
          guest: team[14],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 7,
          id: 'r7g2',
          host: team[2],
          hostScore: 0,
          guest: team[13],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 7,
          id: 'r7g3',
          host: team[3],
          hostScore: 0,
          guest: team[12],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 7,
          id: 'r7g4',
          host: team[4],
          hostScore: 0,
          guest: team[11],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 7,
          id: 'r7g5',
          host: team[5],
          hostScore: 0,
          guest: team[10],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 7,
          id: 'r7g6',
          host: team[6],
          hostScore: 0,
          guest: team[9],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 7,
          id: 'r7g7',
          host: team[7],
          hostScore: 0,
          guest: team[8],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 7,
          id: 'r7g8',
          host: team[19],
          hostScore: 0,
          guest: team[15],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 7,
          id: 'r7g9',
          host: team[18],
          hostScore: 0,
          guest: team[16],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 7,
          id: 'r7g10',
          host: team[17],
          hostScore: 0,
          guest: team[0],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 8,
      games: [
        {
          round: 8,
          id: 'r8g1',
          host: team[13],
          hostScore: 0,
          guest: team[1],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 8,
          id: 'r8g2',
          host: team[12],
          hostScore: 0,
          guest: team[2],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 8,
          id: 'r8g3',
          host: team[11],
          hostScore: 0,
          guest: team[3],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 8,
          id: 'r8g4',
          host: team[10],
          hostScore: 0,
          guest: team[4],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 8,
          id: 'r8g5',
          host: team[9],
          hostScore: 0,
          guest: team[5],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 8,
          id: 'r8g6',
          host: team[8],
          hostScore: 0,
          guest: team[6],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 8,
          id: 'r8g7',
          host: team[0],
          hostScore: 0,
          guest: team[7],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 8,
          id: 'r8g8',
          host: team[14],
          hostScore: 0,
          guest: team[19],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 8,
          id: 'r8g9',
          host: team[15],
          hostScore: 0,
          guest: team[18],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 8,
          id: 'r8g10',
          host: team[16],
          hostScore: 0,
          guest: team[17],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 9,
      games: [
        {
          round: 9,
          id: 'r9g1',
          host: team[1],
          hostScore: 0,
          guest: team[12],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 9,
          id: 'r9g2',
          host: team[2],
          hostScore: 0,
          guest: team[11],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 9,
          id: 'r9g3',
          host: team[3],
          hostScore: 0,
          guest: team[10],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 9,
          id: 'r9g4',
          host: team[4],
          hostScore: 0,
          guest: team[9],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 9,
          id: 'r9g5',
          host: team[5],
          hostScore: 0,
          guest: team[8],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 9,
          id: 'r9g6',
          host: team[6],
          hostScore: 0,
          guest: team[7],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 9,
          id: 'r9g7',
          host: team[19],
          hostScore: 0,
          guest: team[13],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 9,
          id: 'r9g8',
          host: team[18],
          hostScore: 0,
          guest: team[14],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 9,
          id: 'r9g9',
          host: team[17],
          hostScore: 0,
          guest: team[15],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 9,
          id: 'r9g10',
          host: team[16],
          hostScore: 0,
          guest: team[0],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 10,
      games: [
        {
          round: 10,
          id: 'r10g1',
          host: team[11],
          hostScore: 0,
          guest: team[1],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 10,
          id: 'r10g2',
          host: team[10],
          hostScore: 0,
          guest: team[2],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 10,
          id: 'r10g3',
          host: team[9],
          hostScore: 0,
          guest: team[3],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 10,
          id: 'r10g4',
          host: team[8],
          hostScore: 0,
          guest: team[4],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 10,
          id: 'r10g5',
          host: team[7],
          hostScore: 0,
          guest: team[5],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 10,
          id: 'r10g6',
          host: team[0],
          hostScore: 0,
          guest: team[6],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 10,
          id: 'r10g7',
          host: team[12],
          hostScore: 0,
          guest: team[19],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 10,
          id: 'r10g8',
          host: team[13],
          hostScore: 0,
          guest: team[18],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 10,
          id: 'r10g9',
          host: team[14],
          hostScore: 0,
          guest: team[17],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 10,
          id: 'r10g10',
          host: team[15],
          hostScore: 0,
          guest: team[16],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 11,
      games: [
        {
          round: 11,
          id: 'r11g1',
          host: team[1],
          hostScore: 0,
          guest: team[10],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 11,
          id: 'r11g2',
          host: team[2],
          hostScore: 0,
          guest: team[9],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 11,
          id: 'r11g3',
          host: team[3],
          hostScore: 0,
          guest: team[8],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 11,
          id: 'r11g4',
          host: team[4],
          hostScore: 0,
          guest: team[7],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 11,
          id: 'r11g5',
          host: team[5],
          hostScore: 0,
          guest: team[6],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 11,
          id: 'r11g6',
          host: team[19],
          hostScore: 0,
          guest: team[11],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 11,
          id: 'r11g7',
          host: team[18],
          hostScore: 0,
          guest: team[12],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 11,
          id: 'r11g8',
          host: team[17],
          hostScore: 0,
          guest: team[13],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 11,
          id: 'r11g9',
          host: team[16],
          hostScore: 0,
          guest: team[14],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 11,
          id: 'r11g10',
          host: team[15],
          hostScore: 0,
          guest: team[0],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 12,
      games: [
        {
          round: 12,
          id: 'r12g1',
          host: team[9],
          hostScore: 0,
          guest: team[1],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 12,
          id: 'r12g2',
          host: team[8],
          hostScore: 0,
          guest: team[2],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 12,
          id: 'r12g3',
          host: team[7],
          hostScore: 0,
          guest: team[3],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 12,
          id: 'r12g4',
          host: team[6],
          hostScore: 0,
          guest: team[4],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 12,
          id: 'r12g5',
          host: team[0],
          hostScore: 0,
          guest: team[5],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 12,
          id: 'r12g6',
          host: team[10],
          hostScore: 0,
          guest: team[19],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 12,
          id: 'r12g7',
          host: team[11],
          hostScore: 0,
          guest: team[18],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 12,
          id: 'r12g8',
          host: team[12],
          hostScore: 0,
          guest: team[17],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 12,
          id: 'r12g9',
          host: team[13],
          hostScore: 0,
          guest: team[16],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 12,
          id: 'r12g10',
          host: team[14],
          hostScore: 0,
          guest: team[15],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 13,
      games: [
        {
          round: 13,
          id: 'r13g1',
          host: team[1],
          hostScore: 0,
          guest: team[8],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 13,
          id: 'r13g2',
          host: team[2],
          hostScore: 0,
          guest: team[7],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 13,
          id: 'r13g3',
          host: team[3],
          hostScore: 0,
          guest: team[6],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 13,
          id: 'r13g4',
          host: team[4],
          hostScore: 0,
          guest: team[5],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 13,
          id: 'r13g5',
          host: team[19],
          hostScore: 0,
          guest: team[9],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 13,
          id: 'r13g6',
          host: team[18],
          hostScore: 0,
          guest: team[10],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 13,
          id: 'r13g7',
          host: team[17],
          hostScore: 0,
          guest: team[11],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 13,
          id: 'r13g8',
          host: team[16],
          hostScore: 0,
          guest: team[12],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 13,
          id: 'r13g9',
          host: team[15],
          hostScore: 0,
          guest: team[13],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 13,
          id: 'r13g10',
          host: team[14],
          hostScore: 0,
          guest: team[0],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 14,
      games: [
        {
          round: 14,
          id: 'r14g1',
          host: team[7],
          hostScore: 0,
          guest: team[1],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 14,
          id: 'r14g2',
          host: team[6],
          hostScore: 0,
          guest: team[2],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 14,
          id: 'r14g3',
          host: team[5],
          hostScore: 0,
          guest: team[3],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 14,
          id: 'r14g4',
          host: team[0],
          hostScore: 0,
          guest: team[4],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 14,
          id: 'r14g5',
          host: team[8],
          hostScore: 0,
          guest: team[19],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 14,
          id: 'r14g6',
          host: team[9],
          hostScore: 0,
          guest: team[18],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 14,
          id: 'r14g7',
          host: team[10],
          hostScore: 0,
          guest: team[17],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 14,
          id: 'r14g8',
          host: team[11],
          hostScore: 0,
          guest: team[16],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 14,
          id: 'r14g9',
          host: team[12],
          hostScore: 0,
          guest: team[15],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 14,
          id: 'r14g10',
          host: team[13],
          hostScore: 0,
          guest: team[14],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 15,
      games: [
        {
          round: 15,
          id: 'r15g1',
          host: team[1],
          hostScore: 0,
          guest: team[6],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 15,
          id: 'r15g2',
          host: team[2],
          hostScore: 0,
          guest: team[5],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 15,
          id: 'r15g3',
          host: team[3],
          hostScore: 0,
          guest: team[4],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 15,
          id: 'r15g4',
          host: team[19],
          hostScore: 0,
          guest: team[7],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 15,
          id: 'r15g5',
          host: team[18],
          hostScore: 0,
          guest: team[8],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 15,
          id: 'r15g6',
          host: team[17],
          hostScore: 0,
          guest: team[9],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 15,
          id: 'r15g7',
          host: team[16],
          hostScore: 0,
          guest: team[10],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 15,
          id: 'r15g8',
          host: team[15],
          hostScore: 0,
          guest: team[11],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 15,
          id: 'r15g9',
          host: team[14],
          hostScore: 0,
          guest: team[12],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 15,
          id: 'r15g10',
          host: team[13],
          hostScore: 0,
          guest: team[0],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 16,
      games: [
        {
          round: 16,
          id: 'r16g1',
          host: team[5],
          hostScore: 0,
          guest: team[1],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 16,
          id: 'r16g2',
          host: team[4],
          hostScore: 0,
          guest: team[2],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 16,
          id: 'r16g3',
          host: team[0],
          hostScore: 0,
          guest: team[3],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 16,
          id: 'r16g4',
          host: team[6],
          hostScore: 0,
          guest: team[19],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 16,
          id: 'r16g5',
          host: team[7],
          hostScore: 0,
          guest: team[18],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 16,
          id: 'r16g6',
          host: team[8],
          hostScore: 0,
          guest: team[17],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 16,
          id: 'r16g7',
          host: team[9],
          hostScore: 0,
          guest: team[16],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 16,
          id: 'r16g8',
          host: team[10],
          hostScore: 0,
          guest: team[15],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 16,
          id: 'r16g9',
          host: team[11],
          hostScore: 0,
          guest: team[14],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 16,
          id: 'r16g10',
          host: team[12],
          hostScore: 0,
          guest: team[13],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 17,
      games: [
        {
          round: 17,
          id: 'r17g1',
          host: team[1],
          hostScore: 0,
          guest: team[4],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 17,
          id: 'r17g2',
          host: team[2],
          hostScore: 0,
          guest: team[3],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 17,
          id: 'r17g3',
          host: team[19],
          hostScore: 0,
          guest: team[5],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 17,
          id: 'r17g4',
          host: team[18],
          hostScore: 0,
          guest: team[6],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 17,
          id: 'r17g5',
          host: team[17],
          hostScore: 0,
          guest: team[7],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 17,
          id: 'r17g6',
          host: team[16],
          hostScore: 0,
          guest: team[8],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 17,
          id: 'r17g7',
          host: team[15],
          hostScore: 0,
          guest: team[9],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 17,
          id: 'r17g8',
          host: team[14],
          hostScore: 0,
          guest: team[10],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 17,
          id: 'r17g9',
          host: team[13],
          hostScore: 0,
          guest: team[11],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 17,
          id: 'r17g10',
          host: team[12],
          hostScore: 0,
          guest: team[0],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 18,
      games: [
        {
          round: 18,
          id: 'r18g1',
          host: team[3],
          hostScore: 0,
          guest: team[1],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 18,
          id: 'r18g2',
          host: team[0],
          hostScore: 0,
          guest: team[2],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 18,
          id: 'r18g3',
          host: team[4],
          hostScore: 0,
          guest: team[19],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 18,
          id: 'r18g4',
          host: team[5],
          hostScore: 0,
          guest: team[18],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 18,
          id: 'r18g5',
          host: team[6],
          hostScore: 0,
          guest: team[17],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 18,
          id: 'r18g6',
          host: team[7],
          hostScore: 0,
          guest: team[16],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 18,
          id: 'r18g7',
          host: team[8],
          hostScore: 0,
          guest: team[15],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 18,
          id: 'r18g8',
          host: team[9],
          hostScore: 0,
          guest: team[14],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 18,
          id: 'r18g9',
          host: team[10],
          hostScore: 0,
          guest: team[13],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 18,
          id: 'r18g10',
          host: team[11],
          hostScore: 0,
          guest: team[12],
          guestScore: 0,
          isPlayed: false
        }
      ]
    },
    {
      round: 19,
      games: [
        {
          round: 19,
          id: 'r19g1',
          host: team[1],
          hostScore: 0,
          guest: team[2],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 19,
          id: 'r19g2',
          host: team[19],
          hostScore: 0,
          guest: team[3],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 19,
          id: 'r19g3',
          host: team[18],
          hostScore: 0,
          guest: team[4],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 19,
          id: 'r19g4',
          host: team[17],
          hostScore: 0,
          guest: team[5],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 19,
          id: 'r19g5',
          host: team[16],
          hostScore: 0,
          guest: team[6],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 19,
          id: 'r19g6',
          host: team[15],
          hostScore: 0,
          guest: team[7],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 19,
          id: 'r19g7',
          host: team[14],
          hostScore: 0,
          guest: team[8],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 19,
          id: 'r19g8',
          host: team[13],
          hostScore: 0,
          guest: team[9],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 19,
          id: 'r19g9',
          host: team[12],
          hostScore: 0,
          guest: team[10],
          guestScore: 0,
          isPlayed: false
        },
        {
          round: 19,
          id: 'r19g10',
          host: team[11],
          hostScore: 0,
          guest: team[0],
          guestScore: 0,
          isPlayed: false
        }
      ]
    }
  ]
}