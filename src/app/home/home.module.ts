import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeService } from '.././home/home.service';

import { HomeRoutingModule } from './home-routing.module';
import { ResultsComponent } from './results/results.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyComponent } from './verify/verify.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    ResultsComponent,
    ProfileComponent,
    VerifyComponent,
    SearchComponent
  ],
  providers: [
    HomeService
  ],
  exports: [
    ResultsComponent,
    ProfileComponent,
    VerifyComponent
  ]
})
export class HomeModule { }
