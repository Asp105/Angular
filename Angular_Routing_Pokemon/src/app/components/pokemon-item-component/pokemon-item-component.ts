import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from '../../interfaces/pokemon-list-response';

@Component({
  imports: [RouterLink],
  selector: 'app-pokemon-item-component',
  templateUrl: './pokemon-item-component.html',
})
export class PokemonItemComponent {
  pokemon = input.required<Pokemon>();
}
