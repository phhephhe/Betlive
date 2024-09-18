import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'ka/home', pathMatch: 'full' },
  {
    path: ':lang/:state',
    loadComponent: () => import('./pages/landing-page/landing-page.component').then(m => m.LandingPageComponent),
    children: [
      {
        path: '',
        redirectTo: 'casino',
        pathMatch: 'full'
      },
      {
        path: 'slot',
        loadComponent: () => import('./components/progress-bar/progress-bar.component').then(m => m.ProgressBarComponent)
      },
      {
        path: 'mini-games',
        loadComponent: () => import('./components/progress-bar/progress-bar.component').then(m => m.ProgressBarComponent)
      },
      {
        path: 'p2p',
        loadComponent: () => import('./components/progress-bar/progress-bar.component').then(m => m.ProgressBarComponent)
      },
      {
        path: 'casino',
        loadComponent: () => import('./components/progress-bar/progress-bar.component').then(m => m.ProgressBarComponent)
      },
      {
        path: 'poker',
        loadComponent: () => import('./components/progress-bar/progress-bar.component').then(m => m.ProgressBarComponent)
      },
    ]
  },
  { path: '**', redirectTo: 'ka/home' }
];
