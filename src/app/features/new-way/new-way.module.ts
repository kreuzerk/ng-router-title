import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewWayRoutingModule } from './new-way-routing.module';
import { NewWayComponent } from './new-way.component';


@NgModule({
  declarations: [
    NewWayComponent
  ],
  imports: [
    CommonModule,
    NewWayRoutingModule
  ]
})
export class NewWayModule { }
