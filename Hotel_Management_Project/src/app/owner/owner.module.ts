import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';
import { SharedModule } from '../common/shared/shared.module';
import { NewHotelRegistrationComponent } from './new-hotel-registration/new-hotel-registration.component';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    OwnerHomeComponent,
    OwnersignupComponent,
    OwnerloginComponent,
    NewHotelRegistrationComponent,
    OwnerSuccessComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ],
  exports :[
    SharedModule
  ]
})
export class OwnerModule { }
