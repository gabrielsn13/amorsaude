import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    ListaUsuariosComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
