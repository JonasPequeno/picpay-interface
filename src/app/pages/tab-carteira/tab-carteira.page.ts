import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-carteira',
  templateUrl: './tab-carteira.page.html',
  styleUrls: ['./tab-carteira.page.scss'],
})
export class TabCarteiraPage implements OnInit {

  public toggleActivity: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  cambio() {
    console.log('enfou asndsn')
    this.toggleActivity = !this.toggleActivity;
  }

}
