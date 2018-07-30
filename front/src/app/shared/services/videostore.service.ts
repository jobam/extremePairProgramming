import { Injectable } from '@angular/core';
import { VideoStoreApi } from '../api/videostore-api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MovieViewModel } from '../models/movie-viewmodel';

@Injectable()
export class VideoStoreService {
  public constructor(private api: VideoStoreApi) {}

  getMoviesFromApi(): Observable<MovieViewModel[]> {
    const stub: MovieViewModel[] = [
      {
        id: '1',
        category: 'regular',
        description: 'A super Movie !',
        name: 'Blanche neige et les sept mains'
      }
    ];
    return Observable.of(stub);

    // // return this.api.getMoviesGet();
  }
}
