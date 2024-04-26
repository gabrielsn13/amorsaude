import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
//declarations: [MenuComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatToolbarModule
  ],
declarations: [
  MenuComponent
]
})
export class PrivateModule { }
