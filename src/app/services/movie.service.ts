import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MoviesDetail } from '../models/movieDetail';

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private baseUrl: string = "https://api.themoviedb.org/3/movie/";
  private apiKey: string = "?api_key=5d0c0be0b57a0b544ed4f305ebcdfee8";

  constructor(private http: HttpClient) { }

  getNowPlaying(): Promise<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.baseUrl}now_playing${this.apiKey}`).toPromise();
  }

  getPopular(): Promise<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.baseUrl}popular${this.apiKey}`).toPromise();
  }

  getUpcoming(): Promise<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.baseUrl}upcoming${this.apiKey}`).toPromise();
  }

  getMovieDetail(): Promise<MoviesDetail>{
    return this.http.get<MoviesDetail>(`${this.baseUrl}${localStorage.getItem("movieId")}${this.apiKey}`).toPromise();
  }
    getFavorite(): Promise<MoviesModel>{
      return this.http.get<MoviesModel>("http://localhost:8088/Project2MovieAPI/myFavorites").toPromise();

  }

}
