import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user!:FormGroup

  e = 0
  p = 1 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      phone:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ph(){
    this.p = 1
    this.e = 0
  }

  em(){
    this.e = 1
    this.p = 0
  }

  get pho(){
    return this.user.get('phone')
  }

  get eml(){
    return this.user.get('email')
  }

  get pass(){
    return this.user.get('password')
  }

}
