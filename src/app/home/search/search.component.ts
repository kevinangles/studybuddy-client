import { Component, OnInit } from '@angular/core';
import { HomeService } from '.././home.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  navTitle = 'Search';

  constructor(private homeService: HomeService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.setNavTitle(this.navTitle);
  }

}
