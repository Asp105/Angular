import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../interfaces/drink';

@Service()
export class CocktailService {
  private http = inject(HttpClient);

  getDrinks(): Observable<Drink> {
    return this.http.get<Drink>('https://www.thecocktaildb.com/api/json/v1/1/latest.php');
  }
}
