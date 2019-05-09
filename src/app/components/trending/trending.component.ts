import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getPopular();
  }

  movieArr: Object[] = [];
  imgUrl: string = "http://image.tmdb.org/t/p/w300";

  getPopular() {
    this.movieService.getPopular()
    .then((res) => {
      console.log(res.results);
      this.movieArr = res.results;
    })
    .catch((e)=>console.log(e));
  }

}
