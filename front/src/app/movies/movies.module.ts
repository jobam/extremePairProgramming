import { MoviesComponent } from './movies.component';
import { NgModule } from '../../../node_modules/@angular/core';
import { VideoStoreService } from '../shared/services/videostore.service';
import { CommonModule } from '../../../node_modules/@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '../../../node_modules/@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { VideoStoreApi } from '../shared/api/videostore-api';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, ReactiveFormsModule],
  declarations: [MoviesComponent, MoviesListComponent],
  entryComponents: [MoviesComponent],
  providers: [VideoStoreService, VideoStoreApi]
})
export class MoviesModule {}
