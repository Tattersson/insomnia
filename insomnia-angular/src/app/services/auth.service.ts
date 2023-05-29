import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserRegister } from '../models/userRegister';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../models/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlRegister = "Auth/register";
  private urlLogin = "Auth/login";

  constructor(private http: HttpClient) { }


  public register(user: UserRegister): Observable<UserRegister[]> {
    return this.http.post<UserRegister[]>(
      `${environment.baseApiUrl}/${this.urlRegister}`,
      user
    );
  }

  public login(data: UserLogin): Observable<any> {
    return this.http.post(`${environment.baseApiUrl}/${this.urlLogin}`,data);
  }

}
