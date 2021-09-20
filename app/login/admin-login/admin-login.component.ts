import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin!:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.admin = this.fb.group({
      uname:['',[Validators.required]],
      pswd:['',[Validators.required]]
    })
  }

  get user(){
    return this.admin.get('uname')
  }

  get pass(){
    return this.admin.get('pswd')
  }

}
