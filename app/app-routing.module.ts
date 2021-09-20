import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './flight/add-flight/add-flight.component';
import { FlightListComponent } from './flight/flight-list/flight-list.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { UserSignupComponent } from './login/user-signup/user-signup.component';

const routes: Routes = [
  {path:'admin',component:AdminLoginComponent},
  {path:'login',component:UserLoginComponent},
  {path:'signup',component:UserSignupComponent},
  {path:'addflight',component:AddFlightComponent},
  {path:'flights',component:FlightListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
