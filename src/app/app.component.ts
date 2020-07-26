import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>{{myHero.name}}</h2>
    <ul>
      <li *ngFor="let hero of heroes">
        {{hero.name}}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes</p>
    <p>{{doesThisDetectChanges()}}</p>
    <button (click)="changeTitle()">Click me</button>
    <input [type]="'text'"/>
    <input [attr.type]="'text'"/>
    <input [disabled]="true"/>
    <input [attr.disabled]="'disabled'"/>
  `
})
export class AppComponent {
  title: string = 'Tour of Heroes';
  myHero: Hero = new Hero(1, 'Windstorm');
  heroes: Hero[] = [
    new Hero(1, 'Windstorm'),
    new Hero(1, 'Bombasto'),
    new Hero(1, 'Magneta'),
    new Hero(1, 'Tornado'),
  ];

  doesThisDetectChanges(): string {
    return this.title;
  }

  changeTitle(): void {
    this.title = 'hello';
  }
  
}
