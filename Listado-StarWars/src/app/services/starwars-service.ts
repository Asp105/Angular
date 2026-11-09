import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { StarwarsListResponse } from '../interfaces/starwars-list-response';
import { Observable } from 'rxjs';
import { StarwarsDetailResponse } from '../interfaces/starwars-detail-response';

@Service()
export class StarwarsService {

    http = inject(HttpClient);

    getAll(): Observable<StarwarsListResponse> {
        return this.http.get<StarwarsListResponse>(`https://swapi.dev/api/people/`);
    }

    getOne(id: string): Observable<StarwarsDetailResponse> {
        return this.http.get<StarwarsDetailResponse>(`https://swapi.dev/api/people/${id}/`);
    }
}
