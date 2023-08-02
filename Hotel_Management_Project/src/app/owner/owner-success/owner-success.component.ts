import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonServiceService } from 'src/app/common/common-service.service';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {
  // constructor(private router:Router){}

  // hotelRegistration(){
  //    this.router.navigateByUrl('owner/newHotelRegistration')
  // }

  hotelDetails:any;
  userName!: string;
  userHotelDetails:any[]=[]
  showTable: any;
  constructor(private router:Router, 
    private commonApiCallService:CommonApiCallService,
    private commonService: CommonServiceService){}

   ngOnInit(){
    console.log('oninit calling...');
      this.userName = this.commonService.userName;
   }

  hotelRegistration(){
     this.router.navigateByUrl('owner/newHotelRegistration')
  }

 async myHotelDetails(){
  this.showTable = !this.showTable
    let endPoint= 'hotelDetails';
    // this.commonApiCallService.getApiCall(endPoint).subscribe(data=>{
    //   this.hotelDetails = data;
    // })
    this.hotelDetails =   await this.commonApiCallService.getApiCall(endPoint).toPromise()
    console.log('hotelDetails',this.hotelDetails);
    if(this.hotelDetails){
       this.hotelDetailsByOwner();
    }
  }

      hotelDetailsByOwner(){
        this.userHotelDetails=[]
        this.hotelDetails.forEach((element:any)=>{
           if(element.ownerName === this.userName ){
            this.userHotelDetails.push(element);
           }
        })
        console.log('this.userHotelDetails',this.userHotelDetails);
     }
   
}
