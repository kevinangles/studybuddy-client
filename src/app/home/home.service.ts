import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  path = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  verifyEmail(hash) {
    this.http.post<any>(this.path + '/verify/' + hash, hash).subscribe(res => {
      // Do something with response
    });
  }

  getCourses() {
    return this.http.get(this.path + '/home');
  }

  getProfile(id) {
    return this.http.get(this.path + '/profile/' + id);
  }

  getResults(code) {
    return this.http.get(this.path + '/results/' + code);
  }
}
