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
  imgUrl: string = "http://localhost:8088/Project2MovieAPI/favorites";

  getFavorites(){
    this.movieService.getFavorites()
    .then((res) => {
      console.log(res.reesults);
      this.movieArr = res.reesults;
    })
    .catch((e)=> console.log(e));
  }
}
