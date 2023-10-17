import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) { }

  baseurl = 'http://api.themoviedb.org/3';
  apiKey = '08cc33bd5ae3a747598ce2ad84376e66';

  bannerApiData(): Observable<any> {
    return this.http.get(
      ` ${this.baseurl}/trending/all/week?api_key=${this.apiKey}`
    );
  }

  trendingMovieApiData(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/trending/movie/day?api_key=${this.apiKey}`
    );
  }
  getPopularMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/popular/?api_key=${this.apiKey}`
    );
  }
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie####');

    return this.http.get(`
      ${this.baseurl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}
      `);
  }

  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}?api_key=${this.apiKey}`
    );
  }

  getMovieVideo(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}/videos?api_key=${this.apiKey}`
    );
  }

  getMovieCast(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}/credits?api_key=${this.apiKey}`
    );
  }
  getNewMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/now_playing?api_key=${this.apiKey}`
    );
  }
  fetchFantasyMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=14`
    );
  }
  fetchActionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=28`
    );
  }
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=12`
    );
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=16`
    );
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=35`
    );
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=99`
    );
  }
  // science-fiction:878

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=878`
    );
  }

  // thriller:53
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=53`
    );
  }
}
