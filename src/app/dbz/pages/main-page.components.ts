import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page', // selector perzonalizado comienza con app
  templateUrl: './main-page.component.html',
})


// buena practica usar los servicios privados en componentes para mantener la independencia y modularidad del codigo
export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

  get characters(): Character[] {
    return [...this.dbzService.characters]; // crea una copia del arreglo para evitar cambios en el original
  }

  onDeleteCharacter( id: string): void {
    this.dbzService.deleteCharacterById(id);
    // opcion 2: this.characters = this.characters.filter(c => c.id!== id); // este metodo es menos eficiente para grandes arreglos
  }

  onNewCharacter( character: Character ): void {
    this.dbzService.addCharacter( character );
  }
}
