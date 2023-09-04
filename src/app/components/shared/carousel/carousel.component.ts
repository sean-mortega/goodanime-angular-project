import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  btnStyle: any;
  constructor() {}

  ngOnInit() {
    this.btnStyle = {
      background: 'var(--bg-secondary)',
      color: '#000',
      'border-radius': '150px !important',
      'text-transform': 'uppercase',
    };
  }
}
