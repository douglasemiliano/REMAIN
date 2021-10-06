import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {
  public page = 0;


  public materials: any[];

  constructor(private router: Router, private materialService: MaterialService) { }

  public ngOnInit(): void {
    this.materialService.getMaterials().subscribe(data => {
      this.materials = data.content;
      
    })
  }

  public goToCreate(): void {
    this.router.navigate(['cadastrar'])
  }

}
