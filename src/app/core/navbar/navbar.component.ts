import { Component, OnInit } from '@angular/core';
import { CoreService } from '.././core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'Studybuddy';

  constructor(public coreService: CoreService, private router: Router) {
  }

  ngOnInit() {
  }

  showNav() {
    return !this.router.url.includes('welcome');
  }
}
