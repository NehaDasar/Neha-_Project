import { Injectable } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
 
  journey!:string;
  userName! :string;
  forgotPassword!:boolean;
  // constructor(private toastrService:ToastrService) { }

  whiteSpaceValidator(nameFieldValue:any){
    let data = nameFieldValue.value;
    let newdata = data?.trim();
    let isNotValid = data.length != newdata.length ;
    return isNotValid ? {whiteSpace:true} : null
  }

  warningToaster(title:any,msg:any,configuration:any){
      // this.toastrService.warning(title,msg,configuration)
  }
}
