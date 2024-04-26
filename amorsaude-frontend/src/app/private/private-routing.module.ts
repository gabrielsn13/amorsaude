import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaUsuariosComponent } from "./components/lista-usuarios/lista-usuarios.component";
import { MenuComponent } from "./components/menu/menu.component";

export const routes: Routes = [
    {
        path: 'menu',
        component: MenuComponent
    },
    {
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
export class PrivateRoutingModule {

}