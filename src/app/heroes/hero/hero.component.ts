import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 48;

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `This is ${this.capitalizedName}, an iconic hero with ${this.age} years of service.`
  }

  changeHero():void {
    this.name = 'Befh';
  }

  changeAge():void {
    // this.age++;
    this.age = 39;
  }

  resetForm():void {
    // this.name = 'ironman';
    this.age = 48;

  }
}
