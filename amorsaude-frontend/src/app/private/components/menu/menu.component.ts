import { Component } from '@angular/core';
import {CdkMenu, CdkMenuItem} from '@angular/cdk/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  imports: [CdkMenu, CdkMenuItem],
})
export class MenuComponent {

}
