import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/usermanagement/register/register.component';
import { LoginComponent } from './components/usermanagement/login/login.component';

const routes: Routes = 
[
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
