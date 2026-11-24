import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PopularMoviesResponse } from '../interfaces/popular-movies.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private http = inject(HttpClient);

  getPopularMovies() {
    const url = `${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}&language=es-ES`;
    return this.http.get<PopularMoviesResponse>(url);
  }
}
