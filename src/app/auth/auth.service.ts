import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  path = 'http://localhost:3000';
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

  registerUser(registerData) {
    this.http.post<any>(this.path + '/register', registerData).subscribe(res => {
      this.saveToken(res.token);
      this.router.navigate(['/welcome']);
    });
  }

  loginUser(loginData) {
    this.http.post<any>(this.path + '/login', loginData).subscribe(res => {
      this.saveToken(res.token);
      this.router.navigate(['/welcome']);
    });
  }
}
