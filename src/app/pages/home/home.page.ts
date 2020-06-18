import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public navController: NavController
  ) {

  }

  ngOnInit() {
  }

  openTabs() {
    this.navController.navigateRoot('/tabs/tab-home');
  }

}