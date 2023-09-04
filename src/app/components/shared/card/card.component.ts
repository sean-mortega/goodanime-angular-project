import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardData: any = [];

  resImg: string = '';
  resTitle: string = '';
  resAuthor: string = '';
  resDetails: string = '';
  resLink: string = '';
  isFlipped: boolean = false;
  watchStyle: any;
  ranking!: string;

  constructor() {}

  ngOnInit() {
    let { _id, title, synopsis, link, ranking, image, genres, status, type } =
      this.cardData;
    this.resImg = image;
    this.resTitle = title;
    this.resDetails = synopsis;
    this.resAuthor = type;
    this.resLink = link;
    this.ranking = ranking;
    this.watchStyle = {
      background: 'var(--bg-secondary)',
      color: '#000',
      'border-radius': '150px !important',
      'text-transform': 'uppercase',
    };
  }

  onMouseEnter() {
    this.isFlipped = true;
  }

  onMouseLeave() {
    this.isFlipped = false;
  }
}
