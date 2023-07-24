import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';

const routes: Routes = [
  { path : '', component : OwnerHomeComponent},
  { path : 'ownerSignUp', component : OwnersignupComponent},
  { path : 'ownerLogin', component : OwnerloginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
