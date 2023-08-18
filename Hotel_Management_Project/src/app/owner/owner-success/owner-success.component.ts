import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonServiceService } from 'src/app/common/common-service.service';
import { DialogComponent } from '../dialog/dialog.component';
import * as CONSTANTS from 'src/app/common/common_constants';


@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {
  public hotelDetails: any;
  public userName!: string;
  public userHotelDetails: any[] = []
  public showTable: any;
  public dataById:any;
 
   constructor(private router: Router, private commonApiCallService: CommonApiCallService,
     private commonService: CommonServiceService,public dialog: MatDialog) { }
 
   ngOnInit() {
     console.log('oninit calling...');
    // this.userName = this.commonService.userName;
    this.userName = 'poonam'
   }
 
   hotelRegistration() {
 
    this.router.navigateByUrl('owner/newHotelRegistration')
   }
 
   async myHotelDetails() {
     this.showTable = !this.showTable;
    // let endPoint = 'hotelDetails';
    let endPoint = CONSTANTS.endPoints.hotelDetails;
     // this.commonApiCallService.getApiCall(endPoint).subscribe(data=>{
     //   this.hotelDetails = data;
     // })
     this.hotelDetails = await this.commonApiCallService.getApiCall(endPoint).toPromise()
     console.log('hotelDetails', this.hotelDetails);
     this.userHotelDetails = []
     if (this.hotelDetails) {
       this.hotelDetailsByOwner();
       if (this.userHotelDetails.length > 0) {
 
       }
       else {
         this.commonService.warningToaster('no any hotel avaible', 'Warning', {
           timeOut: 10000,
           positionClass: 'toast-top-center'
         })
       }
     } else {
       alert('no owenr data avaible')
     }
   }
 
   hotelDetailsByOwner() {
     this.hotelDetails.forEach((element: any) => {
       if (element.ownerName === this.userName) {
         this.userHotelDetails.push(element);
       }
     })
   }
 
  public delete(id: number):void{
     const dialogRef = this.dialog.open(DialogComponent, {
    
       panelClass: 'dialog-container',
     })
 
    dialogRef.afterClosed().subscribe((yesValue:any)=>{
     if(yesValue === 'YES'){
       this.deleteRecord(id);
       this.showTable = !this.showTable,
       this.myHotelDetails()
     } 
   });
    
   }
 
   async deleteRecord(id:number){
     await this.commonApiCallService.deleteApiCall('hotelDetails', id).toPromise();
   }
 
 
   async edit(id:number){
     this.commonService.id = id;
     this.dataById = await this.commonApiCallService.getApiCall('hotelDetails', id).toPromise();
     this.commonService.dataById = this.dataById;
     this.router.navigateByUrl('owner/newHotelRegistration')
   }
}
