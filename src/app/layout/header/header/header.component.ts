import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
userName: any;

  constructor() {
    this.userName = null; // Initialize in constructor as well for safety
  }

  ngOnInit() {
    this.userName=JSON.parse(localStorage?.getItem('currentUser') || '{}')
  }
}
