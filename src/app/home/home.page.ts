import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 title: string = 'My first AGM project';
  lat: number = 8.98007;
  lng: number = 38.79893;
  height = 330;

constructor(public platform: Platform) {
    console.log(platform.height());
    this.height = platform.height() - 56;
  }
  
}
