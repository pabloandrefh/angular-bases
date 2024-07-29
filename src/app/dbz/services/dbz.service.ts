// a-s => crea el servicio
// Injectable: es un servicio que puede ser inyectado en cualquier componente

import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 9001
  },
  {
    id:uuid(),
    name: 'Vegeta',
    power: 9000
  },
  {
    id: uuid(),
    name: 'Gohan',
    power: 8000
  }
  ];


  // con los ...characters vacio todos los valores de characters
  // onNewCharacter( { name, power }: Character ):void {
    addCharacter( character: Character ):void {
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter); // agrega el nuevo personaje al arreglo en la ultima posicion

  }


 /*  onDeleteCharacter( index: number ):void {
    console.log("evento1....")
    this.characters.splice(index, 1); // elimina el personaje del arreglo
  } */


    deleteCharacterById( id: string ): void {
      this.characters = this.characters.filter( character => character.id !== id); // elimina el personaje encontrado por id
    }

}
