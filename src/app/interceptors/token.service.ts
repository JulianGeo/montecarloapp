import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(
    private localStorage: LocalStorageService
  ) { }

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
    const isValidToken = this.isValidToken();
    if (isValidToken) {
      return this.addToken(req, next);
    } else {
      return next.handle(req);
    }
  }

  private addToken(request: HttpRequest<unknown>, next: HttpHandler) {
    const token = this.localStorage.getToken();
    if (token) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(authRequest);
    }
    return next.handle(request);
  }

  isValidToken() {
    const token = this.localStorage.getToken();
    if (!token) {
      return false;
    }
    if (token) {
      const decodedToken = this.decodeToken(token);
      const now = Date.now() / 1000;
      return decodedToken.exp && decodedToken.exp > now;
    }
    return false;
  }

  private decodeToken(token: string): any {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }




}
