import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImgCarouselModule } from '../img-carousel/img-carousel.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImgCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
