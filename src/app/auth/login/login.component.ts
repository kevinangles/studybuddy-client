import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage = '';  
  navTitle = 'Log in';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/search']);
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
    this.authService.setNavTitle(this.navTitle);
  }

  post() {
    this.authService.loginUser(this.loginForm.value).subscribe((data) => {
      this.authService.saveToken(data.token);
      this.router.navigate(['/search']);
    }, error => { this.errorMessage = error.error.message; }
    );
  }
}
