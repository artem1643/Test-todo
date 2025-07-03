import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tasks',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'tasks/:id',
    loadComponent: () => import('./detail/detail.component'),
  },
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
];
