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
  public id: number;

  constructor(private materialService: MaterialService, private route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.getIdRoute();
    this.getMaterial();
  }

  public getIdRoute(): void {
    this.route.params.subscribe(data => {
      this.id = data.id;
    });
  }

  public getMaterial(): void{
    this.materialService.getMaterialById(this.id).subscribe(result => {
      this.material = result;
      
    })
  }

  public goToExternalLinks(): void{
    window.open(this.material.externalLinks, "_blank");
  }

  public goToAttatchments(): void{
   window.open(this.material.attatchments)
  }

}
