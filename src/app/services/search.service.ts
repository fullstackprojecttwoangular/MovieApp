import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})
export class SearchService {
  private URL1: string =
    "https://api.themoviedb.org/3/search/movie?api_key=0c0310c62d5381ede7d4780860ab79f6&language=en-US&query=";
  private URL2: string =
    "&page=1&include_adult=false";
  private userInput: string

  constructor(private http: HttpClient) {}


 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
private extractData(res: Response) {
  let body = res;
  return body || { };
}
  searchMovies(): Observable<any> {
    
      return this.http.get(`${this.URL1}`+ 'title' + `${this.URL2}`).pipe(
        map(this.extractData));
    }

    getMovieSearch(): Promise<MoviesModel> {
      return this.http
        .get<MoviesModel>(
          `${localStorage.getItem("searchUrl")}&page=${localStorage.getItem(
            "pageIndex"
          )}`
        )
        .toPromise();
    }
}