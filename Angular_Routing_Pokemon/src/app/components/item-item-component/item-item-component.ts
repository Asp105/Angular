import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Item } from '../../interfaces/item-list-response';

@Component({
  imports: [RouterLink],
  selector: 'app-item-item-component',
  templateUrl: './item-item-component.html',
})
export class ItemItemComponent {
  item = input.required<Item>();
}
