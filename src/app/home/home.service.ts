import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
  path = environment.path;
  navTitle = 'Studybuddy';

  constructor(private http: HttpClient, private router: Router) { }

  verifyEmail(hash): Observable<any> {
    return this.http.post<any>(this.path + '/verify/' + hash, hash);
  }

  getProfile(id) {
    return this.http.get(this.path + '/profile/' + id);
  }

  searchByCode(code: string): Observable<any> {
    return this.http.get(this.path + '/search/' + code);
  }

  getNavTitle() {
    let title = this.navTitle;
    return title;
  } 

  setNavTitle(title) {
    this.navTitle = title;
  }
}
