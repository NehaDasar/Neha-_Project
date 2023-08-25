import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from './common/common-service.service';
import * as CONSTANTS from 'src/app/common/common_constants' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hotel_Management_Project';
  navButton = false;
  showLogOut:boolean = false;
  constructor(private router : Router,
    private commonService: CommonServiceService){}

journey(journey: string) {

this.showLogOut = true;

if (journey === CONSTANTS.journey.admin) {
this.commonService.journey = CONSTANTS.journey.admin;
this.router.navigateByUrl('admin');
}
else if (journey === CONSTANTS.journey.owner) {
this.commonService.journey =  CONSTANTS.journey.owner;
this.router.navigateByUrl('owner');
}
else {
this.commonService.journey =  CONSTANTS.journey.user;
this.router.navigateByUrl('user');
}
}


}
