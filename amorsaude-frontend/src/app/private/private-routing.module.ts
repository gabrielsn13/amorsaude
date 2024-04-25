import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashbordComponent } from "./components/dashbord/dashbord.component";

export const routes: Routes = [{
    path: 'dashboard',
    component: DashbordComponent
},
{
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports
})
export class PrivateRoutingModule{

}