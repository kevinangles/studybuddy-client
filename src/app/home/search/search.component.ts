import { Component, OnInit } from '@angular/core';
import { HomeService } from '.././home.service';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  navTitle = 'Search';

  constructor(private fb: FormBuilder, private homeService: HomeService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      code: '',
    });
    this.authService.setNavTitle(this.navTitle);
  }

  post() {
    this.router.navigate(['/results/', this.searchForm.value.code])
    // this.homeService.searchByCode(this.searchForm.value.code);
  }

}
