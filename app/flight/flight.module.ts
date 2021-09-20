import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FlightListComponent } from './flight-list/flight-list.component';



@NgModule({
  declarations: [
    AddFlightComponent,
    FlightListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddFlightComponent,
    FlightListComponent
  ]
})
export class FlightModule { }
