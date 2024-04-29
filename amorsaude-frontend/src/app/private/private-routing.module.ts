import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from "./components/menu/menu.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { EmpresaComponent } from "./components/empresa/empresa.component";

export const routes: Routes = [
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'usuarios',
        component: UsuariosComponent
    },
    {
        path: 'empresas',
        component: EmpresaComponent
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule {

}