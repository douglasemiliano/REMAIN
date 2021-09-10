import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { MaterialEditComponent } from './components/material/material-edit/material-edit.component';
import { MaterialListComponent } from './components/material/material-list/material-list.component';
import { MaterialViewComponent } from './components/material/material-view/material-view.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'login', component: LoginComponent },
  { path: 'cadastro', component: RegistrationComponent },
  { path: 'materiais', component: MaterialListComponent},
  { path: 'new', component: MaterialEditComponent},
  { path: 'materiais/:id', component: MaterialViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
