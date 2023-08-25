import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonServiceService } from 'src/app/common/common-service.service';

@Component({
  selector: 'app-new-hotel-registration',
  templateUrl: './new-hotel-registration.component.html',
  styleUrls: ['./new-hotel-registration.component.scss']
})
export class NewHotelRegistrationComponent {
  hotelRagistrationForm!: FormGroup;
  editId!: number;
  dataById: any;
  hotelImages!: any;
  constructor(private formBulider: FormBuilder, private router: Router,
    private commonApiCallService: CommonApiCallService, private commonService: CommonServiceService) { }

  ngOnInit() {
    this.editId = this.commonService.id;
    this.dataById = this.commonService.dataById;
    this.myOwnerRagistration();
  }
  myOwnerRagistration() {
    this.hotelRagistrationForm = this.formBulider.group({
      ownerName: [this.dataById ? this.dataById.ownerName : '', [Validators.required, Validators.minLength(5), Validators.pattern('[A-za-z ]*$')]],
      ownerContact: [this.dataById ? this.dataById.ownerContact : '', [Validators.required, Validators.pattern('[0-9]*$')]],
      hotelName: [this.dataById ? this.dataById.hotelName : '', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-z0-9/$@ ]*$')]],
      hotelAddress: [this.dataById ? this.dataById.hotelAddress : '', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-z0-9 ]*$')]],
      hotelContact: [this.dataById ? this.dataById.hotelContact : '', [Validators.required, Validators.pattern('[0-9]*$')]],
      hotelMenu: [this.dataById ? this.dataById.hotelMenu : '', [Validators.required, Validators.minLength(2)]],
      roomsAvailable: [this.dataById ? this.dataById.roomsAvailable : '', [Validators.required, Validators.pattern('[0-9]*$')]],
      userPass: [this.dataById ? this.dataById.password : '', [Validators.required,]],
      hotelImages :[this.dataById ? this.dataById.hotelImages : '' ]
    })
  }

  back() {
    this.router.navigateByUrl('owner/ownerSuccess')
  }
  submitDetails() {
    let endpoint = 'hotelDetails';
    console.log('form data', this.hotelRagistrationForm.value);

    let request = {
      ownerName: this.hotelRagistrationForm.value.ownerName,
      ownerContact: this.hotelRagistrationForm.value.ownerContact,
      hotelName: this.hotelRagistrationForm.value.hotelName,
      hotelAddress: this.hotelRagistrationForm.value.hotelAddress,
      hotelContact: this.hotelRagistrationForm.value.hotelContact,
      hotelMenu: this.hotelRagistrationForm.value.hotelMenu,
      roomsAvailable: this.hotelRagistrationForm.value.roomsAvailable,
      password: this.hotelRagistrationForm.value.userPass,
      hotelImages :this.hotelImages
    }

    if(this.editId){
      this.commonApiCallService.patchApiCall(endpoint, request,this.editId).subscribe((resp: any) => {
        console.log(resp);
      })
    }
    else{
      this.commonApiCallService.postApiCall(endpoint, request).subscribe((resp: any) => {
        console.log(resp);
      })
    }

    this.router.navigateByUrl('owner/ownerSuccess');
  }

  onFileSelected(event: any) {
    let images =[...event.target.files]

     let fileNames = images.map((item:any)=>{
      return "assets/images/" + item.name
    })
      this.hotelImages = [...fileNames]
    
      // this.hotelRagistrationForm.controls['hotelImages'].patchValue(
      //   {hotelImages : fileNames}
      // )
      
      
    }

  ngOnDestroy(){
    this.commonService.dataById = {};
    this.commonService.id = '';
  }

}