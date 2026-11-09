import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Berry } from '../../interfaces/berry-list-response';

@Component({
  imports: [RouterLink],
  selector: 'app-berry-item-component',
  templateUrl: './berry-item-component.html',
})
export class BerryItemComponent {
  berry = input.required<Berry>();
}
