import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  courses;
  courseName;
  navTitle;

  constructor(private homeService: HomeService, private route: ActivatedRoute, private authService: AuthService) {
    
  }

  ngOnInit() {
    this.courses = this.homeService.searchByCode(this.route.snapshot.params.code).subscribe((data) => {
      this.courses = data;
      this.courseName = data[0].name;
      this.navTitle = data[0].code
      this.authService.setNavTitle(this.navTitle);
    });;
    
  }

}
