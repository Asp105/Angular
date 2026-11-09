import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { NamedApiResource, PagedResponse } from '../interfaces/named-api-resource';
import { Berry } from '../interfaces/berry-list-response';
import { BerryDetailResponse } from '../interfaces/berry-detail-response';
import { berrySprite, idFromUrl } from '../utils/pokeapi';

@Service()
export class BerryService {
  private http = inject(HttpClient);
  private base = 'https://pokeapi.co/api/v2/berry';

  getAllBerries(offset = 0, limit = 24): Observable<PagedResponse<Berry>> {
    return this.http
      .get<PagedResponse<NamedApiResource>>(`${this.base}?offset=${offset}&limit=${limit}`)
      .pipe(
        map((resp) => ({
          ...resp,
          results: resp.results.map((r) => ({
            id: idFromUrl(r.url),
            name: r.name,
            sprite: berrySprite(r.name),
          })),
        })),
      );
  }

  getOneBerry(id: string): Observable<BerryDetailResponse> {
    return this.http.get<BerryDetailResponse>(`${this.base}/${id}/`);
  }
}
