import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './login-register/log-in/log-in.component';
import { RegisterComponent } from './login-register/register/register.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: 'login', 
    component: LogInComponent, 
    title: 'Kirjaudu sisään'
  },
  {
    path: 'register', 
    component: RegisterComponent,
    title: 'Rekisteröidy' 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
