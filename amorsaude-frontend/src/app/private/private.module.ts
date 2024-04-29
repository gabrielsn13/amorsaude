import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { EmpresaComponent } from './components/empresa/empresa.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider'
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
@NgModule({
//declarations: [MenuComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    FormsModule
  ],
declarations: [
  MenuComponent,
  EmpresaComponent,
  UsuariosComponent
]
})
export class PrivateModule { }
