import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-pager-component',
  templateUrl: './pager-component.html',
})
export class PagerComponent {
  offset = input.required<number>();
  limit = input.required<number>();
  count = input.required<number>();
  pageChange = output<number>();

  page = computed(() => Math.floor(this.offset() / this.limit()) + 1);
  pages = computed(() => Math.max(1, Math.ceil(this.count() / this.limit())));

  go(page: number) {
    const p = Math.min(Math.max(1, page), this.pages());
    this.pageChange.emit((p - 1) * this.limit());
  }
}
