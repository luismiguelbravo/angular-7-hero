import { Component, OnInit, Input  } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  /*
   * recive un modelo hero mediante un atributo html
   * <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  */
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
