import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login';

const URL_BASE = "http://localhost:8080/api/1.0/user/signin"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signin(user: UserLogin): Observable<any> {
    return this.http.post(URL_BASE, user);
  }
}
