import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './models/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[] = [];
 
  
  constructor(private authService: AuthService){}

  ngOnInit() : void{
    this.authService.getUsers().subscribe((result: User[]) => (this.users = result));
  }

  deleteUser(user: User){
    this.authService.deleteUser(user).subscribe((response: User[]) => (this.users = response));
  }

}
