import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//servicios
import { HeroesService, Heroe } from '../../Servicios/heroes.service';

@Component({
  selector: 'app-heroe-info',
  templateUrl: './heroe-info.component.html',
  styleUrls: ['./heroe-info.component.css']
})
export class HeroeInfoComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;
  constructor(
    private activedRoute:ActivatedRoute,
    private _heroesService:HeroesService
  ) {
    
  }

  ngOnInit() {
    this.activedRoute.params.subscribe(params => {
      //console.log(params['termino'])
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    });
  }

}
