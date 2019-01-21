import { Component, OnInit } from '@angular/core';
import { HomeService } from '.././home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  constructor(private homeService: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
    const hash = this.route.snapshot.params.hash;
    this.homeService.verifyEmail(hash);
  }
}
