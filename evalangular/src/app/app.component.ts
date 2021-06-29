import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evalangular';
  public statistique1: Statistique;
  public statistique2: Statistique;

  constructor(){
    this.statistique1 = new Statistique("a1f5f40-be3b-11eb-91ec-7f5875ecfb46","Démographie en Franc","60M","SUCCESS");
    this.statistique2 = new Statistique("a1f5f40","Démographie","60M","SUCCESS");
  }

}
