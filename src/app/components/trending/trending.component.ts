import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private movieService: MovieService, private route: Router )  { }

  ngOnInit() {
    this.getPopular();
  }

  movieArr: Object[] = [];
  imgUrl: string = "http://image.tmdb.org/t/p/w300";

  getPopular() {
    this.movieService.getPopular()
    .then((res) => {
      this.movieArr = res.results;
    })
    .catch((e)=>console.log(e));
  }

  redirectUrl(id: string) {
    localStorage.setItem("movieId", id);
    this.route.navigateByUrl("/movie-detail");
  }
}
