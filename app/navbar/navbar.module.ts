import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    UserNavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports:[
    UserNavbarComponent
  ]
})
export class NavbarModule { }
