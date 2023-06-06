import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-film-global-exercice2',
  templateUrl: './film-global-exercice2.component.html',
  styleUrls: ['./film-global-exercice2.component.css']
})
export class FilmGlobalExercice2Component {
  searchQuery = '';
  searchResults: any[] = [];
  selectedMovie: any = null;
  favorites: any[] = [];

  constructor(private movieService: MovieService) { }

  searchMovies() {
    if (this.searchQuery) {
      this.movieService.searchMovies(this.searchQuery)
        .then(response => {
          this.searchResults = response.data.results;
        })
        .catch(error => {
          console.error('Error searching movies:', error);
        });
    }
  }

  getMovieDetails(movieId: number) {
    this.movieService.getMovieDetails(movieId)
      .then(response => {
        this.selectedMovie = response.data;
      })
      .catch(error => {
        console.error('Error getting movie details:', error);
      });
  }

  addToFavorites(movie: any) {
    this.favorites.push(movie);
  }
}
