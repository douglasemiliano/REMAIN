import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialListComponent } from './material-list/material-list.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MaterialListComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule
  ],
  exports:[
    MaterialListComponent
  ]
})
export class MaterialModule { }
