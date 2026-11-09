import { Component, input } from '@angular/core';
import { Character } from '../../interfaces/character-listresponse';

@Component({
  imports: [],
  selector: 'app-character-item-component',
  styleUrl: './character-item-component.css',
  templateUrl: './character-item-component.html',
})
export class CharacterItemComponent {
  character = input<Character>();
}
