import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  movies:any = [];
  constructor(public search:SearchService, private route: ActivatedRoute, private router: Router) { 

  }
  ngOnInit() {
    this.searchMovies();
  }

  searchMovies() {
    this.movies = [];
    this.search.searchMovies().subscribe((data: {}) => {
      this.movies = data;
    });
  }
 

}
