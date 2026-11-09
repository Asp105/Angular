import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeDetailResponse } from '../interfaces/episode-detail-response';
import { EpisodeListResponse } from '../interfaces/episode-list-response';

@Service()
export class EpisodeService {

    http = inject(HttpClient);

    getAll():  Observable<EpisodeListResponse> {
        return this.http.get<EpisodeListResponse>('https://rickandmortyapi.com/api/episode');
    }

    // STEP4: declaro, mi servicio, un nuevo método que me obtiene la información 
    // de un Pokémon a partir del ID de ese Pokémon.

    getOne(id: string):  Observable<EpisodeDetailResponse> {
        return this.http.get<EpisodeDetailResponse>(`https://rickandmortyapi.com/api/episode/${id}`);
    }
}
