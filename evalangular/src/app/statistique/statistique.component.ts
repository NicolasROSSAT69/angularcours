import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  @Input()
  public statistique!: Statistique;

  constructor() { }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  //fonction executé lors du click sur le bouton supp
  supp(){
    fetch('https://stats.naminilamy.fr/' + this.statistique.identifiant,
        {method: 'DELETE'}).then(resp => {
        if (resp.status === 200) {
            this.ngOnDestroy();
        }
    });
  }
}
