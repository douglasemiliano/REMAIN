import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialListComponent } from './material-list/material-list.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialViewComponent } from './material-view/material-view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MaterialListComponent,
    MaterialEditComponent,
    MaterialViewComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    MaterialListComponent
  ]
})
export class MaterialModule { }
