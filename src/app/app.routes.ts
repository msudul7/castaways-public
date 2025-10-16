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
    path: 'events',
    pathMatch: 'full',
    loadComponent: () => import('./pages/events/events').then(m => m.EventsComponent)
  },
  {
    path: 'contact',
    pathMatch: 'full',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent)
  },
  {
    path: 'schedules',
    pathMatch: 'full',
    loadComponent: () => import('./pages/schedules/schedules').then(m => m.Schedules)
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
    path: 'resources',
    pathMatch: 'full',
    loadComponent: () => import('./pages/resources/resources').then(m => m.ResourcesComponent)
  },
  {
    path: 'bylaws',
    pathMatch: 'full',
    loadComponent: () => import('./pages/bylaws/bylaws').then(m => m.BylawsComponent)
  },
  {
    path: 'terms-of-service',
    pathMatch: 'full',
    loadComponent: () => import('./pages/terms-of-service/terms-of-service').then(m => m.TermsOfService)
  },
  {
    path: 'privacy-policy',
    pathMatch: 'full',
    loadComponent: () => import('./pages/privacy-policy/privacy-policy').then(m => m.PrivacyPolicy)
  },
];
