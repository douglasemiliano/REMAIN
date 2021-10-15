import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialListByCategoryComponent } from './material-list-by-category/material-list-by-category.component';



@NgModule({
  declarations: [
    HomeComponent,
    MaterialListByCategoryComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [HomeComponent, MaterialListByCategoryComponent]
})
export class HomeModule { }
