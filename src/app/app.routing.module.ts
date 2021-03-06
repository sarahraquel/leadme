import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { SimulationsComponent } from './simulations/simulations.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { LoginGuard } from './_guards/login.guard';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'register', component: RegisterComponent },
    {path: 'simulations', component: SimulationsComponent},
    {path: 'profile', component: StudentComponent},
     {path: 'course', component: CourseComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }