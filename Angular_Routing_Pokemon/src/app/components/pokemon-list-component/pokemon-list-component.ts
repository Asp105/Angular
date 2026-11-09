import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { PokemonItemComponent } from '../pokemon-item-component/pokemon-item-component';
import { PagerComponent } from '../pager-component/pager-component';
import { Pokemon } from '../../interfaces/pokemon-list-response';

@Component({
  imports: [PokemonItemComponent, PagerComponent],
  selector: 'app-pokemon-list-component',
  templateUrl: './pokemon-list-component.html',
})
export class PokemonListComponent implements OnInit {
  private service = inject(PokemonService);

  readonly limit = 24;
  list = signal<Pokemon[]>([]);
  offset = signal(0);
  count = signal(0);
  loading = signal(true);
  error = signal(false);

  ngOnInit(): void {
    this.load(0);
  }

  load(offset: number): void {
    this.loading.set(true);
    this.error.set(false);
    this.service.getAllPokemons(offset, this.limit).subscribe({
      next: (resp) => {
        this.list.set(resp.results);
        this.count.set(resp.count);
        this.offset.set(offset);
        this.loading.set(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }
}
