import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor(private movieService: MovieService, private route: Router) {}

  ngOnInit() {
    this.getNowPlaying();
  }

  movieArr: Object[] = [];
  imgUrl: string = "http://image.tmdb.org/t/p/w300";

  getNowPlaying() {
    this.movieService.getNowPlaying()
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
