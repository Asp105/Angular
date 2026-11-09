import { Component, input } from '@angular/core';
import { Drink } from '../../interfaces/drink';

@Component({
  imports: [],
  selector: 'app-cocktai-item-component',
  styleUrl: './cocktai-item-component.css',
  templateUrl: './cocktai-item-component.html',
})
export class CocktaiItemComponent {
drink() {
throw new Error('Method not implemented.');
}
  cocktail = input<Drink>();
}
