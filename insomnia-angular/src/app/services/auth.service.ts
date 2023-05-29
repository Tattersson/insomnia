import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserRegister } from '../models/userRegister';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "Auth/register";

  constructor(private http: HttpClient) { }


  public register(user: UserRegister): Observable<UserRegister[]> {
    return this.http.post<UserRegister[]>(
      `${environment.baseApiUrl}/${this.url}`,
      user
      );
 }


}
