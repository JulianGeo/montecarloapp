import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserLogin } from '../models/user-login';
import { LocalStorageService } from './local-storage.service';

const URL_BASE = "http://localhost:8080/api/1.0/user/signin"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
    ) { }

  signin(user: UserLogin): Observable<any> {
    return this.http.post(URL_BASE, user).pipe(
      map((userInfo: any) => {
        this.localStorage.setToken(userInfo.token);
        return "User is logged in"
      })
    );
  }

  isLoggedIn(): boolean {
    const token = this.localStorage.getToken();

    if (token) {
      const decodedToken = this.decodeToken(token);
      const now = Date.now() / 1000;

      return decodedToken.exp && decodedToken.exp > now;
    }
    return false;
  }

  signOut(){
    this.localStorage.removeToken();
  }

  private decodeToken(token: string): any {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

}
