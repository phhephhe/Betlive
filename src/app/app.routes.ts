import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', redirectTo: 'ka/home', pathMatch: 'full' }, 
  { path: ':lang/:state', loadComponent: () => import('./pages/landing-page/landing-page.component').then(m => m.LandingPageComponent) },
 
  { path: '**', redirectTo: 'ka/home' }
];
