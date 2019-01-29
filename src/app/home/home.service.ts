import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class HomeService {
  path = environment.path;

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
