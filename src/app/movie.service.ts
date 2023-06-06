import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  

  private apiKey = '9435db8cca533c8463d00022e9d23895';

  constructor() { }

  searchMovies(query: string) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`;
    console.log(query);
    
    return axios.get(url);
  }

  getMovieDetails(movieId: number) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;
    return axios.get(url);
  }
}
