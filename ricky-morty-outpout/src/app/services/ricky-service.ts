import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { RickyListResponse } from '../interfaces/ricky-list-response';
import { RickyDetailResponse } from '../interfaces/ricky-detail-response';

@Service()
export class RickyService {

      http = inject(HttpClient);

    getAll():  Observable<RickyListResponse> {
        return this.http.get<RickyListResponse>('https://rickandmortyapi.com/api/character');
    }

    // STEP4: declaro, mi servicio, un nuevo método que me obtiene la información 
    // de un Pokémon a partir del ID de ese Pokémon.

    getOne(id: string):  Observable<RickyDetailResponse> {
        return this.http.get<RickyDetailResponse>(`https://rickandmortyapi.com/api/character/${id}`);
    }
}
