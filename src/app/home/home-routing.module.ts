import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsComponent } from './results/results.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyComponent } from './verify/verify.component';

import { AuthGuard } from '../guards/auth.guard';
import { SearchComponent } from './search/search.component';

const homeRoutes: Routes = [
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  { path: 'results/:code', component: ResultsComponent, canActivate: [AuthGuard]},
  { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'verify/:hash', component: VerifyComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
