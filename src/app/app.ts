import { Component, inject, signal, ViewChild } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./ComponentsUser/user/user";
import { UserInfo } from "./ComponentsUser/user-info/user-info";
import { UserService } from './ComponentsUser/user-service';
import type { userModel } from './user.model';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-root',
  imports: [Header, User, UserInfo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Points",
          data: this.userService.getPlayerPoints(this.selectedPlayer)
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Points",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
        ]
      }
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

  onSelectPlayer(id: string){
    this.selectedPlayer = id;
    console.log(this.selectedPlayer);
  }

  onPlayerCard(id: string){
    return this.userService.users.find((user) => user.id === id)!;
  }
}

  
