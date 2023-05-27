import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = new User();

  userRole = "admin";

  

  constructor(private authService: AuthService) {
        
  }

  register(e: NgForm){

    console.log(e.form.value);

    this.authService.createUser(e.form.value).subscribe();

  }

}
