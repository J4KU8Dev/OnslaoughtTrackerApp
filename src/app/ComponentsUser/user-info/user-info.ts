import { Component, inject, Input } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css'
})
export class UserInfo {
  @Input({required: true}) id!: string;

  user = inject(UserService);

  getPlayerInfo(id: string){
    
  }
}
