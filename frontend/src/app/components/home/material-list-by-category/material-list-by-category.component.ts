import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from '../../material/material.service';

@Component({
  selector: 'app-material-list-by-category',
  templateUrl: './material-list-by-category.component.html',
  styleUrls: ['./material-list-by-category.component.scss']
})
export class MaterialListByCategoryComponent implements OnInit {

  public materials: any;
  public id: string;
  public category: any;
  public categories: any;

  constructor(private route: ActivatedRoute, private materialService: MaterialService, private router: Router) { }

  ngOnInit(): void {
    this.getIdRoute();
    this.getAllCategories();
  }

  public getIdRoute(): void {
    this.route.params.subscribe(data => {    
      this.id = data.id;
      this.fetchMaterialsByCategory(this.id);
      this.getCategory(this.id);
    });
  }

  public fetchMaterialsByCategory(categoryId: string): void{
    this.materialService.getMaterialsByCategory(categoryId).subscribe(data => {
      this.materials = data.content;  
    });
  }

  public getCategory(categoryId: string): void{
    this.materialService.getCategoryById(categoryId).subscribe(data => {
      this.category = data;
    });
  }

  public goToMaterial(materialID: any): void{
    this.router.navigate(['materiais', materialID]);
  }

  public getAllCategories(): void{
    this.materialService.getCategories().subscribe(data => {      
      this.categories = data.content;
    });
  }
}
