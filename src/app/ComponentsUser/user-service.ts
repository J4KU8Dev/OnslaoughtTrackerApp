import { Injectable } from '@angular/core';
import { userModel } from '../user.model';
import { pointsHistory } from '../pointsHistory.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  points: number[] = [];
  users: userModel[] = [
    {
      id: 'p1',
      nickname: 'Nie_Po_Sionym',
      status: 'retired',
      info: 'trash',
    },
    {
      id: 'p2',
      nickname: 'Guuby_come_b4ck_ag4in',
      status: 'active',
      info: 'Old grandpa',
    },
    {
      id: 'p3',
      nickname: 'Markson67',
      status: 'active',
      info: 'Young talent',
    },
    {
      id: 'p4',
      nickname: 'betoon3',
      status: 'retired',
      info: 'Legend',
    },
  ];

  pointsHistory:pointsHistory[] = [
  {
    id: "p1",
    days: [
      { day: 1, points: 1500 },
      { day: 2, points: 1520 },
      { day: 3, points: 1490 },
      { day: 4, points: 1510 },
      { day: 5, points: 1530 },
      { day: 6, points: 1500 },
      { day: 7, points: 1550 },
      { day: 8, points: 1540 },
      { day: 9, points: 1560 },
      { day: 10, points: 1520 },
      { day: 11, points: 1510 },
      { day: 12, points: 1530 },
      { day: 13, points: 1570 },
      { day: 14, points: 1550 },
      { day: 15, points: 1580 },
      { day: 16, points: 1560 },
      { day: 17, points: 1590 },
      { day: 18, points: 1610 },
      { day: 19, points: 1600 },
      { day: 20, points: 1620 },
      { day: 21, points: 1580 },
      { day: 22, points: 1570 },
      { day: 23, points: 1590 },
      { day: 24, points: 1600 },
      { day: 25, points: 1620 },
      { day: 26, points: 1640 },
      { day: 27, points: 1630 },
      { day: 28, points: 1650 },
      { day: 29, points: 1680 },
      { day: 30, points: 1700 },
    ],
    actualRank: "Gold",
  },
  {
    id: "p2",
    days: [
      { day: 1, points: 1200 },
      { day: 2, points: 1220 },
      { day: 3, points: 1210 },
      { day: 4, points: 1180 },
      { day: 5, points: 1190 },
      { day: 6, points: 1170 },
      { day: 7, points: 1150 },
      { day: 8, points: 1180 },
      { day: 9, points: 1190 },
      { day: 10, points: 1210 },
      { day: 11, points: 1230 },
      { day: 12, points: 1200 },
      { day: 13, points: 1220 },
      { day: 14, points: 1210 },
      { day: 15, points: 1190 },
      { day: 16, points: 1170 },
      { day: 17, points: 1180 },
      { day: 18, points: 1160 },
      { day: 19, points: 1150 },
      { day: 20, points: 1170 },
      { day: 21, points: 1180 },
      { day: 22, points: 1200 },
      { day: 23, points: 1190 },
      { day: 24, points: 1210 },
      { day: 25, points: 1230 },
      { day: 26, points: 1240 },
      { day: 27, points: 1220 },
      { day: 28, points: 1250 },
      { day: 29, points: 1270 },
      { day: 30, points: 1260 },
    ],
    actualRank: "Silver",
  },
  {
    id: "p3",
    days: [
      { day: 1, points: 800 },
      { day: 2, points: 820 },
      { day: 3, points: 850 },
      { day: 4, points: 870 },
      { day: 5, points: 840 },
      { day: 6, points: 860 },
      { day: 7, points: 830 },
      { day: 8, points: 850 },
      { day: 9, points: 880 },
      { day: 10, points: 890 },
      { day: 11, points: 910 },
      { day: 12, points: 940 },
      { day: 13, points: 920 },
      { day: 14, points: 930 },
      { day: 15, points: 910 },
      { day: 16, points: 890 },
      { day: 17, points: 870 },
      { day: 18, points: 880 },
      { day: 19, points: 860 },
      { day: 20, points: 880 },
      { day: 21, points: 900 },
      { day: 22, points: 930 },
      { day: 23, points: 950 },
      { day: 24, points: 940 },
      { day: 25, points: 960 },
      { day: 26, points: 970 },
      { day: 27, points: 950 },
      { day: 28, points: 980 },
      { day: 29, points: 1000 },
      { day: 30, points: 1020 },
    ],
    actualRank: "Bronze",
  },
  {
    id: "p4",
    days: [
      { day: 1, points: 2000 },
      { day: 2, points: 1980 },
      { day: 3, points: 2010 },
      { day: 4, points: 1990 },
      { day: 5, points: 2030 },
      { day: 6, points: 2050 },
      { day: 7, points: 2070 },
      { day: 8, points: 2080 },
      { day: 9, points: 2060 },
      { day: 10, points: 2090 },
      { day: 11, points: 2120 },
      { day: 12, points: 2100 },
      { day: 13, points: 2140 },
      { day: 14, points: 2130 },
      { day: 15, points: 2110 },
      { day: 16, points: 2140 },
      { day: 17, points: 2160 },
      { day: 18, points: 2150 },
      { day: 19, points: 2170 },
      { day: 20, points: 2160 },
      { day: 21, points: 2190 },
      { day: 22, points: 2170 },
      { day: 23, points: 2200 },
      { day: 24, points: 2230 },
      { day: 25, points: 2250 },
      { day: 26, points: 2220 },
      { day: 27, points: 2240 },
      { day: 28, points: 2260 },
      { day: 29, points: 2280 },
      { day: 30, points: 2300 },
    ],
    actualRank: "Champion",
  },
];


  onShowPlayers() {
    return this.users;
  }

  onShowInfoAboutPlayer(id: string): userModel[] {
    return this.users.filter((el) => el.id === id);
  }
  onGetPlayerPoints(id: string) {
    console.log(this.pointsHistory.find(p => p.id === id)?.days ?? [])
    return this.pointsHistory.find((object) => object.id === id)?.days;
  }
}
