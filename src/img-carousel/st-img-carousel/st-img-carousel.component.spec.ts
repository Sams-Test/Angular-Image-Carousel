import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StImgCarouselComponent } from './st-img-carousel.component';

describe('StImgCarouselComponent', () => {
  let component: StImgCarouselComponent;
  let fixture: ComponentFixture<StImgCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StImgCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StImgCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
