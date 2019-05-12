import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { TrendingComponent } from './components/trending/trending.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { RegisterComponent } from './components/register/register.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent,
  },
  {
    path: 'favorite', component: FavoriteComponent,
  },
  {
    path: 'trending', component: TrendingComponent,
  },
  {
    path: 'upcoming', component: UpcomingComponent,
  },
  {
    path: 'movie-detail', component: MovieDetailComponent,
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '**', redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
