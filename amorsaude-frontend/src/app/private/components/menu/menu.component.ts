import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public title = 'Amorsaude Web';
  public isAuthenticated: boolean;

  constructor() {
    this.isAuthenticated = false;
  }

  login() {
  }

  logout() {
  }
}
