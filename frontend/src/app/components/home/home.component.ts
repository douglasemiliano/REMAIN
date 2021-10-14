import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import SwiperCore, { Navigation, Pagination, Swiper, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { MaterialService } from '../material/material.service';



SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  public materials: any;
  public categories: any;
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  @ViewChild("swiper", { static: false }) swiper?: SwiperComponent;
  appendNumber = 4;
  prependNumber = 1;

  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
    this.FetchMaterials();
    this.FetchCategories();
  }

  onSwiper(event: any) {
    console.log(event);
  }
  onSlideChange() {
    console.log('slide change');
  }

  public FetchMaterials(): void{
    this.materialService.getMaterials().subscribe(data => {
      this.materials = data.content;   
    });
  }

  public FetchCategories(): void {
    this.materialService.getCategories().subscribe(data => {
      this.categories = data.content;     
    });
  }

}
