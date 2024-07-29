import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>(); // emisor de eventos

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);

    if ( this.character.power === 0 ) return; // return vacio

    console.log("evento...")
    this.onNewCharacter.emit(this.character); // emite el evento con el nuevo personaje

/*       this.character.name = '';
      this.character.power = 0; */

    this.character = { name: '', power: 0 }; // reinicia el formulario

  }

}
