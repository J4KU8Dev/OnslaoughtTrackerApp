import { Component, ElementRef, inject, Input, Renderer2 } from '@angular/core';
import { UserService } from '../user-service';
import { userModel } from '../../user.model';
import { SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css'
})
export class UserInfo {
  @Input({required: true}) id!: string;
  @Input({required: true}) playerInfo!:userModel;
  user = inject(UserService);
  animate = false;

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
     if (changes['id']) {
      this.animate = false;
      void this.el.nativeElement.offsetWidth;
      this.animate = true;
    }
  }

}
