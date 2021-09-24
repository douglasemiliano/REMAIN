import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialListComponent } from './material-list/material-list.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialViewComponent } from './material-view/material-view.component';
import { RouterModule } from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { NgxDropzoneModule } from 'ngx-dropzone';




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
    RouterModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    NgxDropzoneModule
    
  ],
  exports:[
    MaterialListComponent
  ]
})
export class MaterialModule { }
