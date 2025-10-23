import { Injectable } from '@angular/core';
import { userModel } from '../user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:userModel[] = [{
    id:"p1",
    nickname:"Nie_Po_Sionym",
    status:"retired",
    info:"trash",
    },
    {
    id:"p2",
    nickname:"Guuby_come_b4ck_ag4in",
    status:"active",
    info:"Old grandpa",
    },
    {
    id:"p3",
    nickname:"Markson67",
    status:"active",
    info:"Young talent",
    },
    {
    id:"p4",
    nickname:"betoon3",
    status:"retired",
    info:"Legend",
    },
  ]

  onShowPlayers(){
    return this.users;
  }
}
