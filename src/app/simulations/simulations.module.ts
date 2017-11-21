import { SimulationsRoutingModule } from './simulations.routing.module';
import { SimulationsComponent } from './simulations.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextComponent } from './next/next.component';
import { PreviousComponent } from './previous/previous.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SimulationsRoutingModule,
  ],
  declarations: [SimulationsComponent, NextComponent, PreviousComponent]
})

export class SimulationsModule { }
