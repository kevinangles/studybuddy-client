import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeService } from '.././home/home.service';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyComponent } from './verify/verify.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    HomeComponent,
    ResultsComponent,
    ProfileComponent,
    VerifyComponent
  ],
  providers: [
    HomeService
  ],
  exports: [
    HomeComponent,
    ResultsComponent,
    ProfileComponent,
    VerifyComponent
  ]
})
export class HomeModule { }
