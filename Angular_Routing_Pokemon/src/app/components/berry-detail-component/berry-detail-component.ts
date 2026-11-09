import { Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { BerryService } from '../../services/berry-service';
import { LoadState, toLoadState } from '../../utils/load-state';
import { BerryDetailResponse } from '../../interfaces/berry-detail-response';
import { itemSprite, prettify } from '../../utils/pokeapi';

@Component({
  imports: [RouterLink],
  selector: 'app-berry-detail-component',
  templateUrl: './berry-detail-component.html',
})
export class BerryDetailComponent {
  private service = inject(BerryService);

  /** Se rellena desde la ruta /berry-detail/:id. */
  id = input.required<string>();

  state = toSignal(
    toObservable(this.id).pipe(switchMap((id) => toLoadState(this.service.getOneBerry(id)))),
    { initialValue: { status: 'loading' } as LoadState<BerryDetailResponse> },
  );

  prettify = prettify;
  sprite = (b: BerryDetailResponse) => itemSprite(b.item.name);
  flavorPct = (potency: number) => Math.min(100, potency * 4);
}
