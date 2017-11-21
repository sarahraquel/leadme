import { SimulationsComponent } from './simulations.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const SimulationsRoutes: Routes = [
    { path: 'simulations', component: SimulationsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(SimulationsRoutes)],
    exports: [RouterModule]
})
export class SimulationsRoutingModule {}
