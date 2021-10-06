import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { MaterialEditComponent } from "./material-edit/material-edit.component";
import { MaterialListComponent } from "./material-list/material-list.component";
import { MaterialViewComponent } from "./material-view/material-view.component";

const routes: Routes = [
    { path: '', component: MaterialListComponent, canActivate: [AuthGuard]},
    { path: 'cadastrar', component: MaterialEditComponent, canActivate: [AuthGuard]},
    { path: 'materiais/:id', component: MaterialViewComponent, canActivate: [AuthGuard]}
]


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class MaterialRoutingModule {}