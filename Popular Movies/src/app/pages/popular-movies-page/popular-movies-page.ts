import { Component, inject, OnInit, signal } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/popular-movies.interface';

@Component({
  selector: 'app-popular-movies-page',
  templateUrl: './popular-movies-page.html',
  styleUrl: './popular-movies-page.css',
})
export class PopularMoviesPage implements OnInit {
  private moviesService = inject(MoviesService);

  movies = signal<Movie[]>([]);

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe((resp) => {
      this.movies.set(resp.results);
    });
  }
}
