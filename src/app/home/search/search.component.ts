import { Component, OnInit } from '@angular/core';
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
  navTitle: string = 'Search';
  code: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      code: '',
    });
    this.authService.setNavTitle(this.navTitle);
  }

  post() {
    this.code = this.searchForm.value.code.toUpperCase();
    this.router.navigate(['/results/', this.code])
  }
}
