import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { NamedApiResource, PagedResponse } from '../interfaces/named-api-resource';
import { Pokemon } from '../interfaces/pokemon-list-response';
import { PokemonDetailResponse } from '../interfaces/pokemon-detail-response';
import { idFromUrl, pokemonSprite } from '../utils/pokeapi';

@Service()
export class PokemonService {
  private http = inject(HttpClient);
  private base = 'https://pokeapi.co/api/v2/pokemon';

  getAllPokemons(offset = 0, limit = 24): Observable<PagedResponse<Pokemon>> {
    return this.http
      .get<PagedResponse<NamedApiResource>>(`${this.base}?offset=${offset}&limit=${limit}`)
      .pipe(
        map((resp) => ({
          ...resp,
          results: resp.results.map((r) => {
            const id = idFromUrl(r.url);
            return { id, name: r.name, sprite: pokemonSprite(id) };
          }),
        })),
      );
  }

  getOnePokemon(id: string): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(`${this.base}/${id}/`);
  }
}
