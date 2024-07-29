import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter(); // emisor de eventos


  @Input()
  public characterList: Character[] = [{
    // id: '',
    name: 'Trunks',
    power: 10,
  }];


  onDeleteCharacter(id?: string): void {
    console.log({id}); // simulación de eliminación en consola
    if ( !id ) return; // evita que se ejecute el evento si no hay id
    this.onDelete.emit( id ); // emite el evento al padre
  }
}
