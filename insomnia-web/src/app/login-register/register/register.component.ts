import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/auth.service';
import { FormControl, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = new User();

  userRole = "admin";

  registerControl = new FormControl('', 
  [Validators.required, Validators.email]
  );
  

  constructor(private authService: AuthService) {
        
  }

  register(e: NgForm){

    console.log(e.form.value);

    
    
    if (e.valid != true){
      alert("Käyttäjä rekisteröity onnistuneesti!")
      this.authService.createUser(e.form.value).subscribe();
      e.resetForm();

    }
    else{
      alert("Rekisteröityminen epäonnistui")
      e.resetForm();
    }
    


  }

}
