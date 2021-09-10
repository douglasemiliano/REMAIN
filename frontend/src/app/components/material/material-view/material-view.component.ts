import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.scss']
})
export class MaterialViewComponent implements OnInit {

  public material: any;

  constructor(private materialService: MaterialService, private route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.material = this.materialService.getMaterialById(this.route.snapshot.params.id);
    console.log(this.material);
    
    
  }

}
