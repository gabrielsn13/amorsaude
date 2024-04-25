import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { PrivateRoutingModule } from './private-routing.module';



@NgModule({
  declarations: [
    DashbordComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
