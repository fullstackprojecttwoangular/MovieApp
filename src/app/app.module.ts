import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
<<<<<<< HEAD
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
=======
import { FavoriteComponent } from './components/favorite/favorite.component';
import { TrendingComponent } from './components/trending/trending.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
>>>>>>> 72d56c87b10338f9b1c74cd0046cbe2ed760cfcb

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
<<<<<<< HEAD
    MovieInfoComponent,
    RegisterComponent,
    LoginComponent
=======
    FavoriteComponent,
    TrendingComponent,
    UpcomingComponent
>>>>>>> 72d56c87b10338f9b1c74cd0046cbe2ed760cfcb
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
