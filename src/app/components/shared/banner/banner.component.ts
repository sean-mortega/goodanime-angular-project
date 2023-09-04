import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  
  
  // currentIndex = 0;
  // @ViewChildren('carouselSlide') slides!: QueryList<ElementRef>

  // constructor(
    
  // ) {}

  // ngAfterViewInit(): void {
  //   this.showSlide(this.currentIndex);
  // }

  // showSlide(index: number): void {
  //   this.slides.forEach((slide: ElementRef, idx: number) => {
  //     slide.nativeElement.style.display = idx === index ? 'block' : 'none';
  //   });
  // }

  // prevSlide(): void {
  //   this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  //   this.showSlide(this.currentIndex);
  // }

  // nextSlide(): void {
  //   this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  //   this.showSlide(this.currentIndex);
  // }

  ngOnInit() {
    //console.log(this.slides);
  }
}
