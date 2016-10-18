import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


@Component({
    selector: "my-app",
    template: '' +
        '<div id="appComponent">' +
        '<h1>My First Angular2 App using VS</h1>' +
        '<h2>Hero List</h2><div *ngIf="hero">' +
        '<h3>{{title }}</h3>' +
        '<h4>{{hero.name }} details!</h4>' +
        '<div><label>id: </label>{{hero.id}}</div>' +
        '<div><label>name: </label>' +
        '<input [(ngModel)]="hero.name" placeholder= "name" >' +
        '</div></div>' +
        '<h2>My Heroes</h2>' +
        '<ul class="heroes">' +
        '<li *ngFor="let h of heroes"(click) = "onSelect(h)"[class.selected] = "h === hero"><span class="badge"> {{h.id }}</span> {{h.name}}</li>' +
        '</ul></div>',
    //moduleId: module.id,
    //templateUrl: 'templates/appComponent.html',
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent {
    //title = 'Tour of Heroes';
    title: string;
    // hero = 'windstorm';
    // hero : Hero = {
    //     id: 1,
    //     name: 'windstorm'
    // };
    hero: Hero;
    heroes = HEROES;

    constructor() {
        this.title = "Grand tour of Heroes!";
        //this.hero =  HEROES[0];
    }

    onSelect(selectedHero: Hero): void {
        this.hero = selectedHero;
    }
}


