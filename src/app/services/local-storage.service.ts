import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  set (key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get (key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  setToken (value: string) {
    localStorage.setItem("Token", value);
  }

  getToken () {
    return localStorage.getItem("Token");
  }

  removeToken() {
    localStorage.removeItem("Token");
  }



}
