import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  @Input() btn_style: any;
  @Input() btn_link: string = '';
  @Input() btn_name: string = '';

  constructor() {}

  ngOnInit() {}
}
