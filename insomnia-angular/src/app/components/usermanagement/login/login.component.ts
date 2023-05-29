import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserLogin } from 'src/app/models/userLogin';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = new UserLogin();

  loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required]), 
      password: new FormControl('', [Validators.required])
    } 
    );

    constructor(private authService: AuthService){}

    login(user: UserLogin){
      this.authService.login(user).subscribe();
    }

}
