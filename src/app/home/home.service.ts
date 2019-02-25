import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
  path = environment.path;

  constructor(private http: HttpClient) { }

  verifyEmail(hash): Observable<any> {
    return this.http.post<any>(this.path + '/verify/' + hash, hash);
  }

  getCourses() {
    return this.http.get(this.path + '/search');
  }

  getProfile(id) {
    return this.http.get(this.path + '/profile/' + id);
  }

  getResults(code) {
    return this.http.get(this.path + '/results/' + code);
  }
}
