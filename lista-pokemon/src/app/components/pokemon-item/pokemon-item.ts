import { Component, input, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  imports: [],
  selector: 'app-pokemon-item',
  styleUrl: './pokemon-item.css',     // <-- Cambiado (sin .component)
  templateUrl: './pokemon-item.html', // <-- Cambiado (sin .component)
})
export class PokemonItem {
   pokemon = input<Pokemon>();
}