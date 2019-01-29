import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  path = environment.path;
  TOKEN_KEY = 'token';

  constructor(private http: HttpClient, private router: Router) { }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  registerUser(registerData): Observable<any> {
    return this.http.post<any>(this.path + '/register', registerData);
  }

  loginUser(loginData): Observable<any> {
    return this.http.post<any>(this.path + '/login', loginData);
  };
}
