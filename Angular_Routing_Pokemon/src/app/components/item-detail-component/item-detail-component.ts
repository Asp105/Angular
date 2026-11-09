import { Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { ItemService } from '../../services/item-service';
import { LoadState, toLoadState } from '../../utils/load-state';
import { ItemDetailResponse } from '../../interfaces/item-detail-response';
import { itemSprite, prettify } from '../../utils/pokeapi';

@Component({
  imports: [RouterLink],
  selector: 'app-item-detail-component',
  templateUrl: './item-detail-component.html',
})
export class ItemDetailComponent {
  private service = inject(ItemService);

  /** Se rellena desde la ruta /item-detail/:id. */
  id = input.required<string>();

  state = toSignal(
    toObservable(this.id).pipe(switchMap((id) => toLoadState(this.service.getOneItem(id)))),
    { initialValue: { status: 'loading' } as LoadState<ItemDetailResponse> },
  );

  prettify = prettify;
  sprite = (i: ItemDetailResponse) => i.sprites.default ?? itemSprite(i.name);

  effect(i: ItemDetailResponse): string {
    return (
      i.effect_entries.find((e) => e.language.name === 'en')?.short_effect ??
      i.flavor_text_entries.find((e) => e.language.name === 'en')?.text ??
      'Sin descripción disponible.'
    );
  }
}
