import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "Users";


  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseApiUrl}/${this.url}`);
  }

  constructor(private http: HttpClient) { 

  }

  public createUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(
      `${environment.baseApiUrl}/${this.url}`,
      user
      );

  }
  public deleteUser(user: User): Observable<User[]> {
    return this.http.delete<User[]>(
      `${environment.baseApiUrl}/${this.url}?Id=${user.userId}`
      );
  }

}
