import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {
  page = 1;


  materials: any;

  constructor(private router: Router, private materialService: MaterialService) { }

  ngOnInit(): void {
    this.materials = this.materialService.getMaterials()
  }

  goToCreate(): void {
    this.router.navigate(['new'])
  }

}
