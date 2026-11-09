import { Component, inject, OnInit, signal } from '@angular/core';
import { BerryService } from '../../services/berry-service';
import { BerryItemComponent } from '../berry-item-component/berry-item-component';
import { PagerComponent } from '../pager-component/pager-component';
import { Berry } from '../../interfaces/berry-list-response';

@Component({
  imports: [BerryItemComponent, PagerComponent],
  selector: 'app-berry-list-component',
  templateUrl: './berry-list-component.html',
})
export class BerryListComponent implements OnInit {
  private service = inject(BerryService);

  readonly limit = 24;
  list = signal<Berry[]>([]);
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
    this.service.getAllBerries(offset, this.limit).subscribe({
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
