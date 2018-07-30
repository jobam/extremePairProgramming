import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroTopComponent } from './heroes/hero-top/hero-top.component';
import { AppConfig } from './config/app.config';
import { Error404Component } from './core/error404/error-404.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: MoviesComponent },

  // otherwise redirect to 404
  { path: '**', redirectTo: '/' + AppConfig.routes.error404 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
