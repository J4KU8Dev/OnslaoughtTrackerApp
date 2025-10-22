import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./ComponentsUser/user/user";

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('onslaugthTrackerApp');
  users:string[] = ["Nie_Po_Sionym","Guuby_come_b4ck_ag4in","Markson67","betoon3"];
}
