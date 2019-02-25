import { Component, OnInit } from '@angular/core';
import { CoreService } from '.././core.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'Studybuddy';
  navbarOpen = false;

  // links = [
  //   { 'name': 'Home', 'route': '/home', 'authenticated': this.coreService.isAuthenticated },
  //   { 'name': 'Register', 'route': '/register', 'authenticated': !this.coreService.isAuthenticated },
  //   { 'name': 'Log in', 'route': '/login', 'authenticated': !this.coreService.isAuthenticated }
  // ]

  constructor(public coreService: CoreService, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  showNav() {
    this.title = this.authService.getNavTitle();
    return !this.router.url.includes('welcome');
  }
}
