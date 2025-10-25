import { Component, inject, signal } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./ComponentsUser/user/user";
import { UserInfo } from "./ComponentsUser/user-info/user-info";
import { UserService } from './ComponentsUser/user-service';

@Component({
  selector: 'app-root',
  imports: [Header, User, UserInfo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userService = inject(UserService);
  selectedPlayer: string = "";
  get AllPlayers(){
    return this.userService.onShowPlayers();
  }

  onSelectPlayer(id: string){
    this.selectedPlayer = id;
    console.log(this.selectedPlayer);
  }

  onPlayerCard(id: string){
    return this.userService.users.find((user) => user.id === id)!;
  }
}

  
