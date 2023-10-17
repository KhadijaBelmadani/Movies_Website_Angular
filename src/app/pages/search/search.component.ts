import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
{
  MovieApiServiceService;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  // [x: string]: any;
  constructor(private service: MovieApiServiceService) {}
  ngOnInit(): void {}

  searchResult: any;
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  submitForm() {
    console.log(this.searchForm.value, 'searchForm#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result, 'searchForm##');
      this.searchResult = result.results;
    });
  }
}
