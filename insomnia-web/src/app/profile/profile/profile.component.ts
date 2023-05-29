import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: User[] = [];

  constructor(private authService: AuthService){}
  
  ngOnInit() { }

  getUser(user: User){
    this.authService.getUser(user).subscribe((response: User[]) => (this.users = response));
  }



}
