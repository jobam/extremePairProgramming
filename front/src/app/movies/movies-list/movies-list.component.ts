import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../shared/hero.model';
import { HeroService } from '../shared/hero.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AppConfig } from '../../config/app.config';
import { Router } from '@angular/router';
import { LoggerService } from '../../core/shared/logger.service';
import { MovieViewModel } from '../../shared/models/movie-viewmodel';
import { VideoStoreService } from '../../shared/services/videostore.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: MovieViewModel[];
  newHeroForm: FormGroup;
  error: string;
  @ViewChild('form') myNgForm; // just to call resetForm method

  constructor(
    private videoStoreService: VideoStoreService,
    private formBuilder: FormBuilder
  ) {
    this.newHeroForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      alterEgo: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.videoStoreService
      .getMoviesFromApi()
      .subscribe((movies: Array<MovieViewModel>) => {
        this.movies = movies;
      });
  }
}
