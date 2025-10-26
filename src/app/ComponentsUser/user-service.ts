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

  pointsHistory: pointsHistory[] = [
  {
    id: "p1",
    points: [
      1500, 1520, 1490, 1510, 1530, 1500, 1550, 1540, 1560, 1520,
      1510, 1530, 1570, 1550, 1580, 1560, 1590, 1610, 1600, 1620,
      1580, 1570, 1590, 1600, 1620, 1640, 1630, 1650, 1680, 1700
    ],
    actualRank: "Gold",
  },
  {
    id: "p2",
    points: [
      1200, 1220, 1210, 1180, 1190, 1170, 1150, 1180, 1190, 1210,
      1230, 1200, 1220, 1210, 1190, 1170, 1180, 1160, 1150, 1170,
      1180, 1200, 1190, 1210, 1230, 1240, 1220, 1250, 1270, 1260
    ],
    actualRank: "Silver",
  },
  {
    id: "p3",
    points: [
      800, 820, 850, 870, 840, 860, 830, 850, 880, 890,
      910, 940, 920, 930, 910, 890, 870, 880, 860, 880,
      900, 930, 950, 940, 960, 970, 950, 980, 1000, 1020
    ],
    actualRank: "Bronze",
  },
  {
    id: "p4",
    points: [
      2000, 1980, 2010, 1990, 2030, 2050, 2070, 2080, 2060, 2090,
      2120, 2100, 2140, 2130, 2110, 2140, 2160, 2150, 2170, 2160,
      2190, 2170, 2200, 2230, 2250, 2220, 2240, 2260, 2280, 2300
    ],
    actualRank: "Champion",
  }
];

  onShowPlayers() {
    return this.users;
  }

  onShowInfoAboutPlayer(id: string):userModel[] {
    return this.users.filter((el) => el.id === id );
  }
  getPlayerPoints(id: string) {
    this.points = this.pointsHistory.find(user => user.id === id)?.points || [];
    console.log(this.points);
    return this.points;
    
  }

}
