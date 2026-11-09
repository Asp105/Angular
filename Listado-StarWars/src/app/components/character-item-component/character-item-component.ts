import { Component, input, output } from '@angular/core';
import { Character } from '../../interfaces/starwars-list-response';

@Component({
  imports: [],
  selector: 'app-character-item-component',
  styleUrl: './character-item-component.css',
  templateUrl: './character-item-component.html',
})
export class CharacterItemComponent {

  character = input<Character>();

  characterClicked = output<string>();
  id: string = '';

  getCharacterId() {
    this.id = this.character()?.url.split("/")[5]!;
    return this.id;
  }

  emitCharacterClicked() {
    const id = this.getCharacterId();
    this.characterClicked.emit(id);
  }
}
