import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MoviesDetail } from 'src/app/models/movieDetail';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovieDetail();
  }

  movies: MoviesDetail;
  imgUrl: string = "http://image.tmdb.org/t/p/w300";

  getMovieDetail() {
    this.movieService.getMovieDetail()
    .then((res) => {
      console.log(res);
      this.movies = res;
    })
    .catch((e)=>console.log(e));
  }

}
