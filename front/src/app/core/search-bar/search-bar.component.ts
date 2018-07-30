import { map, startWith } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../shared/logger.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConfig } from '../../config/app.config';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [LoggerService]
})
export class SearchBarComponent implements OnInit {
  heroFormControl: FormControl;
  filteredHeroes: any;

  constructor(private router: Router) {
    this.heroFormControl = new FormControl();
  }

  ngOnInit() {}
}
