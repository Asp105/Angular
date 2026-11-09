import { Component, inject, OnInit, signal } from '@angular/core';
import { ItemService } from '../../services/item-service';
import { ItemItemComponent } from '../item-item-component/item-item-component';
import { PagerComponent } from '../pager-component/pager-component';
import { Item } from '../../interfaces/item-list-response';

@Component({
  imports: [ItemItemComponent, PagerComponent],
  selector: 'app-item-list-component',
  templateUrl: './item-list-component.html',
})
export class ItemListComponent implements OnInit {
  private service = inject(ItemService);

  readonly limit = 24;
  list = signal<Item[]>([]);
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
    this.service.getAllItems(offset, this.limit).subscribe({
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
