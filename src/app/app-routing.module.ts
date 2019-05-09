import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
<<<<<<< HEAD
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }, {
    path: '**',
    redirectTo: 'main'
  },
  { path: 'register',
    redirectTo: 'register'
=======
import { FavoriteComponent } from './components/favorite/favorite.component';
import { TrendingComponent } from './components/trending/trending.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';

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
    path: '**', redirectTo: 'main'
>>>>>>> 72d56c87b10338f9b1c74cd0046cbe2ed760cfcb
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
