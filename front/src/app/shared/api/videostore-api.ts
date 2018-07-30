import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieViewModel } from '../models/movie-viewmodel';
import { Observable } from 'rxjs';

@Injectable()
export class VideoStoreApi {
  constructor(protected http: HttpClient) {}

  /**
   * @summary Get the movies list
   */
  public getMoviesGet(httpParams?: HttpParams): Observable<MovieViewModel[]> {
    const path = `localhost:4242/api/movies/`;

    return this.http.get<MovieViewModel[]>(path);
  }
}
