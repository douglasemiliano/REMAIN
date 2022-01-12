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
  public mostPopulars: any;
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
    this.fetchMaterials();
    this.fetchCategories();
    this.fetchMostPopulars();
  }

  onSwiper(event: any) {
  }
  onSlideChange() {
  }

  public fetchMaterials(): void{
    this.materialService.getMaterialsWithSort("createdAt,desc").subscribe(data => {
      this.materials = data.content;   
    });
  }

  public fetchMostPopulars(): void {
    this.materialService.getMaterialsWithSort("views,desc").subscribe(data => {

      this.mostPopulars = data.content;   
    });
  }

  public fetchCategories(): void {
    this.materialService.getCategories().subscribe(data => {

      this.categories = data.content;     
    });
  }

}
