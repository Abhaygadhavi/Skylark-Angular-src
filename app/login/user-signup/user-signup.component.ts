import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  signup!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signup = this.fb.group({
      name:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
      email:['',[Validators.required,Validators.email]],
      phn:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      pswd:['',[Validators.required,Validators.minLength(6)]],
      rpswd:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  get fname(){
    return this.signup.get('name')
  }

  get eml(){
    return this.signup.get('email')
  }

  get phno(){
    return this.signup.get('phn')
  }

  get pwd(){
    return this.signup.get('pswd')
  }

  get rpwd(){
    return this.signup.get('rpswd')
  }

}
