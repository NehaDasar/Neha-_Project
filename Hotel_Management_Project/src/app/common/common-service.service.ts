import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  journey! : string;
  userName! :string;
  constructor() { }

  whiteSpaceValidator(nameFieldValue:any){
    let data = nameFieldValue.value;
    let newdata = data?.trim();
    let isNotValid = data.length != newdata.length ;
    return isNotValid ? {whiteSpace:true} : null
  }
}
