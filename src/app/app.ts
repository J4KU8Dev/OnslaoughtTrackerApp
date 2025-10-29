import { Component, inject, OnInit } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./ComponentsUser/user/user";
import { UserInfo } from "./ComponentsUser/user-info/user-info";
import { UserService } from './ComponentsUser/user-service';
import type { userModel } from './user.model';
// Angular Chart Component
import { AgCharts } from 'ag-charts-angular';
// Chart Options Type Interface
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-root',
  imports: [Header, User, UserInfo, AgCharts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  public chartOptions!: AgChartOptions;
   ngOnInit() {
    const data = this.userService.onGetPlayerPoints(this.selectedPlayer) ?? [];
    this.chartOptions = {
      data,
      series: [{ type: 'line', xKey: 'day', yKey: 'points', marker: {
                size: 5,
                stroke: 'rgba(89, 131, 252, 1)',
                strokeWidth: 5,
                shape: 'circle',
            },
            interpolation: {
                type: 'smooth',
            }, },
          ],
      background: {
        fill: 'rgba(255, 255, 255, 1)',
      },
      
    };
  }

  userService = inject(UserService);
  selectedPlayer: string = "";

  get AllPlayers(){
    return this.userService.onShowPlayers();
  }

  get Player(){
    return this.userService.users.find((user) => user.id === this.selectedPlayer);
  }

  onSelectPlayer(id: string) {
    this.selectedPlayer = id;
    const data = this.userService.onGetPlayerPoints(id) ?? [];
    this.chartOptions = {
      ...this.chartOptions,
      data
    };
  }

  onPlayerCard(id: string){
    return this.userService.users.find((user) => user.id === id)!;
  }
}