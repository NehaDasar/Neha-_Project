import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonServiceService } from 'src/app/common/common-service.service';


@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {
  signUpForm!:FormGroup;
  journey!:string;
  postResponse:any;
  constructor(private fb:FormBuilder,
    private commonService: CommonServiceService,
    private apiCallService: CommonApiCallService,
    private router : Router){}

  ngOnInit(){
  this.journey = this.commonService.journey;
  console.log('this.journey',this.journey);
  
   this.FormDetails();
  }

  FormDetails(){
    this.signUpForm = this.fb.group({
      name:['',[]],
      email:['',[]],
      mobile:['',[]],
      password:['',[]],
      gender:['',[]],
      

    })
  }
  submit(){
    let request = {
      UserName : this.signUpForm.value.name,
      Email:   this.signUpForm.value.email,
      Mobile :  this.signUpForm.value.mobile,
      Password :  this.signUpForm.value.password,
      Gender :  this.signUpForm.value.gender
    }

    this.apiCallService.postApiCall(this.journey,request).subscribe(resp=>{
      console.log(resp);
      this.postResponse = resp;
    })
    // if(this.postResponse?.id){
     this.router.navigateByUrl('owner/ownerSuccess');
     //}
  }

  back(){
    this.router.navigateByUrl('owner/ownerHome')
  }

}
