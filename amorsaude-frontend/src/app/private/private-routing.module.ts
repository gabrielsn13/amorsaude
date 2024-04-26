import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaUsuariosComponent } from "./components/lista-usuarios/lista-usuarios.component";

export const routes: Routes = [{
    path: 'lista-usuarios',
    component: ListaUsuariosComponent
},
{
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class PrivateRoutingModule{

}