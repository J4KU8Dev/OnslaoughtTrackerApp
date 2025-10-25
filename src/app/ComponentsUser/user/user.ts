import { Component, Input, input } from '@angular/core';
import { userModel } from '../../user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) user!:userModel;
  @Input({required: true}) selected: boolean = false;
}
