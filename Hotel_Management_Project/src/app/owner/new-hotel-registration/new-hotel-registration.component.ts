import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';

@Component({
  selector: 'app-new-hotel-registration',
  templateUrl: './new-hotel-registration.component.html',
  styleUrls: ['./new-hotel-registration.component.scss']
})
export class NewHotelRegistrationComponent {

  hotelRagistrationForm!:FormGroup;
  constructor(private formBulider:FormBuilder,private router:Router,
    private commonApiCallService: CommonApiCallService){}

  ngOnInit(){
    this.myOwnerRagistration();

  }
  myOwnerRagistration(){
    this.hotelRagistrationForm=this.formBulider.group({
      ownerName:['',[Validators.required,Validators.minLength(5),Validators.pattern('[A-za-z ]*$')]],
      ownerContact:['',[Validators.required,Validators.pattern('[0-9]*$')]],
      hotelName:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-z0-9/$@ ]*$')]],
      hotelAddress:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-z0-9 ]*$')]],
      hotelContact:['',[Validators.required,Validators.pattern('[0-9]*$')]],
      hotelMenu:['',[Validators.required,Validators.minLength(2)]],
      roomsAvailable:['',[Validators.required,Validators.pattern('[0-9]*$')]],
    
      userPass:['',[Validators.required,]],
    })
  }

  back(){
    this.router.navigateByUrl('/owner/ownerHome')
  }
  submitDetails(){
    let endpoint='hotelDetails';
    console.log('form data',this.hotelRagistrationForm.value);
    
    let request={
      ownerName:this.hotelRagistrationForm.value.ownerName,
      ownerContact:this.hotelRagistrationForm.value.ownerContact,
      hotelName:this.hotelRagistrationForm.value.hotelName,
      hotelAddress:this.hotelRagistrationForm.value.hotelAddress,
      hotelContact:this.hotelRagistrationForm.value.hotelContact,
      hotelMenu:this.hotelRagistrationForm.value.hotelMenu,
      roomsAvailable:this.hotelRagistrationForm.value.roomsAvailable,
      password:this.hotelRagistrationForm.value.userPass,
    }
    this.commonApiCallService.postApiCall(endpoint,request).subscribe((resp:any)=>{
      console.log(resp);
      
    })
    this.router.navigateByUrl('owner/ownerSuccess')

    
  }
}
