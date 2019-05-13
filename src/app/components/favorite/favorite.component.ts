import { Component, OnInit } from '@angular/core';
import { MovieService } from "src/app/services/movie.service";
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  constructor(private movieService: MovieService) { }
  ngOnInit() {
    this.getFavorites();
  }
  movieArr: Object[] = [];
  imgUrl: string = "ec2-18-216-112-251.us-east-2.compute.amazonaws.com";
  getFavorites(){
    this.movieService.getFavorite()
    .then((res) => {
      console.log(res.results);
      this.movieArr = res.results;
    })
    .catch((e)=> console.log(e));
  }
}
