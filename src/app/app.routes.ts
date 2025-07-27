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
  {
    path: 'contact',
    pathMatch: 'full',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent)
  },
  {
    path: 'teams',
    pathMatch: 'full',
    loadComponent: () => import('./pages/teams/teams').then(m => m.TeamsComponent)
  },
  {
    path: 'merchandise',
    pathMatch: 'full',
    loadComponent: () => import('./pages/merchandise/merchandise').then(m => m.MerchandiseComponent)
  },
  {
    path: 'bylaws',
    pathMatch: 'full',
    loadComponent: () => import('./pages/bylaws/bylaws').then(m => m.BylawsComponent)
  },
];
