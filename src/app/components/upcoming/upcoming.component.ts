import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getUpcoming();
  }

  movieArr: Object[] = [];
  imgUrl: string = "http://image.tmdb.org/t/p/w300";

  getUpcoming(){
    this.movieService.getUpcoming()
    .then((res) => {
      this.movieArr = res.results;
    })
    .catch((e) => console.log(e));
  }

}
