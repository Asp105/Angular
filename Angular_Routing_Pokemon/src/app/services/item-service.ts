import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { NamedApiResource, PagedResponse } from '../interfaces/named-api-resource';
import { Item } from '../interfaces/item-list-response';
import { ItemDetailResponse } from '../interfaces/item-detail-response';
import { idFromUrl, itemSprite } from '../utils/pokeapi';

@Service()
export class ItemService {
  private http = inject(HttpClient);
  private base = 'https://pokeapi.co/api/v2/item';

  getAllItems(offset = 0, limit = 24): Observable<PagedResponse<Item>> {
    return this.http
      .get<PagedResponse<NamedApiResource>>(`${this.base}?offset=${offset}&limit=${limit}`)
      .pipe(
        map((resp) => ({
          ...resp,
          results: resp.results.map((r) => ({
            id: idFromUrl(r.url),
            name: r.name,
            sprite: itemSprite(r.name),
          })),
        })),
      );
  }

  getOneItem(id: string): Observable<ItemDetailResponse> {
    return this.http.get<ItemDetailResponse>(`${this.base}/${id}/`);
  }
}
