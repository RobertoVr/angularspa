import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../Servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe:Heroe;
  casa:string;

  constructor(
        private activatedRoute: ActivatedRoute,
        private _heroesService: HeroesService
  ){ 

    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    } )

  }

  ngOnInit() {
    
    if(this.heroe.casa == 'DC')
      this.casa = "assets/img/DC.png"
    else
      this.casa = "assets/img/Marvel.png"

  }

}
