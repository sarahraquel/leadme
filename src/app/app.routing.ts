import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core'

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    { path: 'login', component:  LoginComponent  },
    {path: 'register', component: RegisterComponent},
    {path: 'about', component: AboutComponent},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);