import { Component, inject, OnInit, signal } from '@angular/core';
import { CocktaiItemComponent } from '../cocktai-item-component/cocktai-item-component';
import { CocktailService } from '../../service/cocktail-service';
import { Drink } from '../../interfaces/drink';

@Component({
  imports: [CocktaiItemComponent],
  selector: 'app-cocktail-list-component',
  styleUrl: './cocktail-list-component.css',
  templateUrl: './cocktail-list-component.html',
})
export class CocktailListComponent implements OnInit {

  CocktaiService = inject(CocktailService);

  cocktailList = signal<Drink[]>([]);

  ngOnInit(): void {

    this.CocktaiService.getDrinks().subscribe((response) => {
      this.cocktailList.set(response.drinks);
    });
  }
}
