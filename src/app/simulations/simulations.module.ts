import { SimulationsRoutingModule } from './simulations.routing.module';
import { SimulationsComponent } from './simulations.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SimulationsRoutingModule,
  ],
  declarations: [SimulationsComponent]
})

export class SimulationsModule { }
