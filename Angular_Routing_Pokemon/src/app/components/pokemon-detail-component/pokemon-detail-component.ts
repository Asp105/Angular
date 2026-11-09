import { Component, computed, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { PokemonService } from '../../services/pokemon-service';
import { LoadState, toLoadState } from '../../utils/load-state';
import { PokemonDetailResponse } from '../../interfaces/pokemon-detail-response';
import { pokemonSprite, prettify } from '../../utils/pokeapi';

@Component({
  imports: [RouterLink],
  selector: 'app-pokemon-detail-component',
  templateUrl: './pokemon-detail-component.html',
})
export class PokemonDetailComponent {
  private service = inject(PokemonService);

  /** Se rellena desde la ruta /pokemon-detail/:id (withComponentInputBinding). */
  id = input.required<string>();

  state = toSignal(
    toObservable(this.id).pipe(switchMap((id) => toLoadState(this.service.getOnePokemon(id)))),
    { initialValue: { status: 'loading' } as LoadState<PokemonDetailResponse> },
  );

  prettify = prettify;

  image(p: PokemonDetailResponse): string {
    return p.sprites.other['official-artwork'].front_default ?? pokemonSprite(p.id);
  }

  prevId = computed(() => Math.max(1, Number(this.id()) - 1));
  nextId = computed(() => Number(this.id()) + 1);

  /** Barra de stats: máximo teórico ~255. */
  pct(value: number): number {
    return Math.min(100, Math.round((value / 160) * 100));
  }

  statClass(value: number): string {
    return value >= 100 ? 'bg-success' : value >= 60 ? 'bg-warning' : 'bg-danger';
  }
}
