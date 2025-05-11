import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  click: boolean;
  dropclick: boolean;
  constructor() {
    this.click = false; // Initialize in constructor as well for safety
    this.dropclick = false; // Initialize in constructor as well for safety
  }
  handleClick = () => {
    console.log(this.click)
   this.click=!this.click
  };
  handleDrop = () => {
    console.log(this.dropclick)
    this.dropclick=!this.dropclick;
  }
}
