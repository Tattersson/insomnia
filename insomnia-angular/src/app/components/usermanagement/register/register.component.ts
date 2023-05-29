import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserRegister } from 'src/app/models/userRegister';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = new UserRegister();

  registerForm = new FormGroup(
    {
      firstname: new FormControl(
        '', 
        Validators.required),

      lastname: new FormControl(
        '', 
        Validators.required,
        
        ),
      
      email: new FormControl(
        '', 
        Validators.required),

      password: new FormControl(
        '', 
        Validators.required),
      
      confirmpassword: new FormControl(
        '', 
        Validators.required)
    });


  constructor(private authService: AuthService){

  }

  validatePasswords(){

  }


  register(user: UserRegister) {
    console.log(
      this.registerForm.controls.firstname.value,
      this.registerForm.controls.lastname.value,
      this.registerForm.controls.email.value,
      this.registerForm.controls.password.value,
      this.registerForm.controls.confirmpassword.value
    );
    console.warn(user);
    this.authService.register(user).subscribe();
  }

}
