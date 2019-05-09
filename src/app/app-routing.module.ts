import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
