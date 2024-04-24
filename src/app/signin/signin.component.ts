import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators}from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  formsignin!:FormGroup

  constructor(private fb:FormBuilder)
  {

  }
  ngOnInit(): void 
  {
    this.formsignin=this.fb.group(
      {"email":["",Validators.required,Validators.email],
       "password":["",Validators.required]}
    )
    
  }
  onsubmit()
  {
    console.log(this.formsignin)
  }

}
