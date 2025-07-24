import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then(m => m.HomeComponent)
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'about',
    pathMatch: 'full',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent)
  },
];
