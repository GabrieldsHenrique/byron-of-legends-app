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
    path: 'login',
    loadComponent: () => import('./externo/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastrar',
    loadComponent: () => import('./externo/cadastrar/cadastrar.page').then( m => m.CadastrarPage)
  },
];
