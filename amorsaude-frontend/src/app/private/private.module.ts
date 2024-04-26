import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
//declarations: [MenuComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ],
declarations: [
  MenuComponent
]
})
export class PrivateModule { }
