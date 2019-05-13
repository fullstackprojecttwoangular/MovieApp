import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { TrendingComponent } from './components/trending/trending.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersService } from './services/users.service';
import { CustomInterceptor } from './session/custom-interceptor.session';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    FavoriteComponent,
    TrendingComponent,
    UpcomingComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    MovieDetailComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  
  ],
  providers: [UsersService,{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
