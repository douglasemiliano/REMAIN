import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { MaterialListByCategoryComponent } from "../home/material-list-by-category/material-list-by-category.component";
import { MaterialEditComponent } from "./material-edit/material-edit.component";
import { MaterialListComponent } from "./material-list/material-list.component";
import { MaterialViewComponent } from "./material-view/material-view.component";

const routes: Routes = [
    { path: '', component: MaterialListComponent, canActivate: [AuthGuard]},
    { path: 'categoria/:id', component: MaterialListByCategoryComponent},
    { path: 'cadastrar', component: MaterialEditComponent, canActivate: [AuthGuard]},
    { path: 'editar/:id', component: MaterialEditComponent, canActivate: [AuthGuard]},
    { path: 'materiais/:id', component: MaterialViewComponent}
]


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class MaterialRoutingModule {}