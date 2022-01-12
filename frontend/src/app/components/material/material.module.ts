import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialListComponent } from './material-list/material-list.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialViewComponent } from './material-view/material-view.component';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MaterialRoutingModule } from './material.routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TextFieldModule} from '@angular/cdk/text-field';



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
    NgxDropzoneModule,
    MaterialRoutingModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSelectModule,
    AngularEditorModule,
    NgbModule,
    TextFieldModule
    
    

  ],
  exports: [
    MaterialListComponent
  ]
})
export class MaterialModule { }
