import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-material-approve',
  templateUrl: './material-approve.component.html',
  styleUrls: ['./material-approve.component.scss']
})
export class MaterialApproveComponent implements OnInit {

  public materials: any[];
  public authorUID = localStorage.getItem("uid");

  constructor(private router: Router, private materialService: MaterialService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getMaterials();
  }

  public getMaterials(): void {
    this.materialService.getAllMaterialsApprove(false).subscribe(data => {
      this.materials = data.content;      
    });
  }

  public approveMaterial(id: number): void {
    this.materialService.approveMaterial(id).subscribe(data => {
      this.getMaterials();
    });
  }

}
