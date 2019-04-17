import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[];
  selectedHero: Hero;
  
  constructor(
    private heroService: HeroService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.getHeroes();
    this.login();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  login(): void {
    this.userService.login("demo", "demo")
        .subscribe( (data: any) => {
                console.log(data);
            }, error => {
              console.log('Error');
              console.log(error);
          });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
