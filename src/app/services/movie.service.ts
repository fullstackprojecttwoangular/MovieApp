import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private baseUrl: string = "https://api.themoviedb.org/3/movie/";
  private apiKey: string = "?api_key=5d0c0be0b57a0b544ed4f305ebcdfee8";

  private baseUrl1: string = "http://localhost:8088/Project2MovieAPI/favorites`;"

  constructor(private http: HttpClient) {}

  getNowPlaying(): Promise<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.baseUrl}now_playing${this.apiKey}`).toPromise();
  }

  getPopular(): Promise<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.baseUrl}popular${this.apiKey}`).toPromise();
  }

  getUpcoming(): Promise<MoviesModel>{
    return this.http.get<MoviesModel>(`${this.baseUrl}upcoming${this.apiKey}`).toPromise();
  }
  getFavorites(): Promise<MoviesModel>{
    return this.http.get<MoviesModel>(`${this.baseUrl1}favorites${this.apiKey}`).toPromise();
  }  
  
  


}
