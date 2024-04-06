import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'offer-form',
    loadComponent: () => import('./pages/offer-form/offer-form.page').then( m => m.OfferFormPage)
  },
  {
    path: 'offer-list',
    loadComponent: () => import('./pages/offer-list/offer-list.page').then( m => m.OfferListPage)
  },
];
