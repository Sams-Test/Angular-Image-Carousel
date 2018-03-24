import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StImgCarouselComponent } from './st-img-carousel/st-img-carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StImgCarouselComponent],
  exports: [StImgCarouselComponent]
})
export class ImgCarouselModule { }
