import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialEditComponent } from './components/material/material-edit/material-edit.component';
import { MaterialListComponent } from './components/material/material-list/material-list.component';
import { MaterialViewComponent } from './components/material/material-view/material-view.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: RegistrationComponent},
  { path: 'materiais',
    loadChildren: () => import ('./components/material/material.module').then(m => m.MaterialModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
