import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

const URL_BASE = "http://localhost:8080/api/1.0/user/signup"


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  signup(user: User): Observable<any> {
    return this.http.post(URL_BASE, user);
  }
}
