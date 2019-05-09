import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { TrendingComponent } from './components/trending/trending.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
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
  { path: 'register',
    redirectTo: 'register'
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
