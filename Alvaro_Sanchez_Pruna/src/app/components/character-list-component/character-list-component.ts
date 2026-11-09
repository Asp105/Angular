import { Component, inject, OnInit, signal } from '@angular/core';
import { CharacterItemComponent } from '../character-item-component/character-item-component';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../interfaces/character-listresponse';

@Component({
  imports: [CharacterItemComponent],
  selector: 'app-character-list-component',
  styleUrl: './character-list-component.css',
  templateUrl: './character-list-component.html',
})

export class CharacterListComponent implements OnInit {

  characterService = inject(CharacterService);

  characterList = signal<Character[]>([]);

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((response) => {
      this.characterList.set(response.results);
    });
  }
}
