import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="heroInput">
      <h2>{{heroInput.name}} details!</h2>
      <div><label>id: </label>{{heroInput.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="heroInput.name" placeholder="name"/>
      </div>
      <div><label>price: $</label>
        <input [(ngModel)]="heroInput.price"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input()
  heroInput: Hero;
}
