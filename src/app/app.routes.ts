import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';

export const routes: Routes = [
    {path:'', component:Layout},
    {path:'animation-1', loadComponent:()=>import('./pages/animation-1/animation-1').then(m=>m.Animation1)},
    {path:'animation-2', loadComponent:()=>import('./pages/animation-2/animation-2').then(m=>m.Animation2)},
    {path:'animation-3', loadComponent:()=>import('./pages/animation-3/animation-3').then(m=>m.Animation3)},
    {path:"**", redirectTo:''}
];
