import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  isFavorite: boolean = false;
  isSugestion: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event) {
    if (event.detail == 'sugestions') {
      this.isFavorite = !this.isFavorite;
      this.isSugestion = !this.isSugestion;
    }
    else {
      this.isSugestion = !this.isSugestion;
      this.isFavorite = !this.isFavorite;
    }
  }

}
