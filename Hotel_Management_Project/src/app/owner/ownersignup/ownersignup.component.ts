import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  compnies = ['wipro','IBM','INFY'];
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
      name:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z ]*'),this.commonService.whiteSpaceValidator]],
      email:['',[]],
      mobile:['',[]],
      password:['',[]],
      gender:['',[]],
      file:[''],
      compnies:[[]]
      

    })
  }
async submit(){
    let request = {
      UserName : this.signUpForm.value.name?.replace(/\s+/g, " ").trim(),
      Email:   this.signUpForm.value.email,
      Mobile :  this.signUpForm.value.mobile,
      Password :  this.signUpForm.value.password,
      Gender :  this.signUpForm.value.gender,
      File :  this.signUpForm.value.file,
      companies : this.signUpForm.value.compnies
    }

    // this.apiCallService.postApiCall(this.journey,request).subscribe(resp=>{
    //   console.log(resp);
    //   this.postResponse = resp;
    // })
    this.postResponse =  await this.apiCallService.postApiCall(this.journey,request).toPromise()
    // if(this.postResponse?.id){
     this.router.navigateByUrl('owner/ownerSuccess');
     //}
  }

  back(){
    this.router.navigateByUrl('owner/ownerHome')
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // Do something with the selected file...
    console.log(file.name);
    // const formData = new FormData();
    // formData.append('file', this.signUpForm.value.file);
    // console.log(formData);
   
  }

}

