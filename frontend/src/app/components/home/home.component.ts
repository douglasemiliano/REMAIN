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
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: false,
    breakpoints: {
      767: {
        slidesPerView: 3,
      }
    }
  };

  @ViewChild("swiper", { static: false }) swiper!: SwiperComponent;
  appendNumber = 4;
  prependNumber = 1;

  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
    this.fetchMaterials();
    this.fetchCategories();
    this.fetchMostPopulars();
  }

  slideNext() {
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper.swiperRef.slidePrev(100);
  }

  public fetchMaterials(): void {
    this.materialService.getAllMaterialsApproveWithSort("createdAt,desc", true).subscribe(data => {
      this.materials = data.content;    
    });
  }

  public fetchMostPopulars(): void {
    this.materialService.getAllMaterialsApproveWithSort("views,desc", true).subscribe(data => {
      this.mostPopulars = data.content;
    });
  }

  public fetchCategories(): void {
    this.materialService.getCategories().subscribe(data => {
      this.categories = this.shuffleArray(data.content);
    });
  }

  public shuffleArray(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array
}

}
