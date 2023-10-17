import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tod-movie',
  templateUrl: './tod-movie.component.html',
  styleUrls: ['./tod-movie.component.css'],
})
export class TodMovieComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  trendingMovieResult: any = {};
  getMovieVideoResult: any;
  getMovieCastResult: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getParamId#');
    this.getTrendingMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getTrendingMovie(id: any) {
    const apiKey = '08cc33bd5ae3a747598ce2ad84376e66';
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

    this.http.get<any>(url).subscribe((response) => {
      const results = response.results;
      const randomIndex = Math.floor(Math.random() * results.length);
      this.trendingMovieResult = results[randomIndex];
    });
  }
  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result, 'MovieVideo#');
      result.results.forEach((element: any) => {
        if (element.type == 'Trailer') {
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }
  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      console.log(result, 'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }
}
