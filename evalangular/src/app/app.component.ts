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
  public listStatistiques: Statistique[];
  

  constructor(){
    this.statistique1 = new Statistique("a1f5f40-be3b-11eb-91ec-7f5875ecfb46","Démographie en Franc","60M","SUCCESS");
    this.statistique2 = new Statistique("a1f5f40","Démographie","60M","SUCCESS");
    this.listStatistiques = [this.statistique1, this.statistique2];

    setTimeout(() => {
      this.listStatistiques.push(new Statistique('Test4', 'Test 4', '67', 'SUCCESS'));
    }, 2000);
    this.listStatistiques=[];
    fetch('https://stats.naminilamy.fr/')
              .then((response) => {
                  return response.json();
              })
              .then((data) => {
                data.forEach((stats: { id: string; title: string; value: number; appreciation: string; })=>{
                  this.listStatistiques.push(new Statistique('' + stats.id,'' +stats.title,''+stats.value,''+stats.appreciation));
                })
              })
              .catch((err) => {
                  console.error(err);
              });
  }

}
