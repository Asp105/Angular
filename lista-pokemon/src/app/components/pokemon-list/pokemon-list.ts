import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonItem } from '../pokemon-item/pokemon-item';

@Component({
  imports: [PokemonItem],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {
  pokemonList: Pokemon[] = [
    { id: 1, name: 'Bulbasaur', type: 'Planta / Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
    { id: 4, name: 'Charmander', type: 'Fuego', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png' },
    { id: 7, name: 'Squirtle', type: 'Agua', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png' },
    { id: 25, name: 'Pikachu', type: 'Eléctrico', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' }
  ];
}
