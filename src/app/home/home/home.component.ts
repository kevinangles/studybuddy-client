import { Component, OnInit } from '@angular/core';
import { HomeService } from '.././home.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navTitle = 'Search';

  constructor(private homeService: HomeService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.setNavTitle(this.navTitle);
  }
}
