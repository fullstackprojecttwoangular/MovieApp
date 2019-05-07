import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private testUrl: string =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=5d0c0be0b57a0b544ed4f305ebcdfee8&language=en-US&page=1";

  constructor(private http: HttpClient) {}

  getNowPlaying(): Promise<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.testUrl}`).toPromise();
  }
}
