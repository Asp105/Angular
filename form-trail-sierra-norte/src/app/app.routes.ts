import { Routes } from '@angular/router';
import { RegisterForm } from './pages/register-form/register-form';
import { PageNotFound } from './pages/page-not-found/page-not-found';


export const routes: Routes = [

    {path: 'register-form', component: RegisterForm},
     {path: '', redirectTo: 'register-form', pathMatch: 'full'},
    {path: '**', component: PageNotFound}
];
