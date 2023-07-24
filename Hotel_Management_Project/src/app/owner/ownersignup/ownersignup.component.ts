import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {
  LoginForm!:FormGroup;

  constructor(private fb:FormBuilder,
    private router : Router){}

    submit(){
      
    }

}
