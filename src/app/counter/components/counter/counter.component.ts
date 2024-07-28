// para crear componentes escribir -a component-root

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="decreaseBy(-1)">-1</button>`
})
export class CounterComponent {
  /* constructor() { }

  ngOnInit(): void {
  } */

  public counter: number = 10;

  increaseBy( value: number ): void {
    this.counter += value;
  }

  decreaseBy( value: number ): void {
    console.log('Decrementing by:', value);
    if (this.counter > 0) {
      this.counter -= -value;
    }
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
