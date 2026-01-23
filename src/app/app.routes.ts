import { Routes } from '@angular/router';
import { MenuGeral } from './menu-geral/menu-geral';
import { LoginUser } from './login-user/login-user';
import { NaoEncontrado } from './nao-encontrado/nao-encontrado';
import { Produto } from './produto/produto';
import { autenticacaoGuard } from './autenticacao-guard';

export const routes: Routes = [
  { path: 'MenuGeral', component: MenuGeral },

  { path: 'MenuGeral/:mensagem', component: MenuGeral },

  // esse modelo de chamada so carrega o componente chamado
  {
    path: 'Usuario',
    loadComponent: () => import('./usuario/usuario').then((c) => c.Usuario),
  },

  {
    path: 'Produto',
    loadComponent: () => import('./produto/produto').then((c) => c.Produto),
  },

  {
    path: 'autentica',
    loadComponent: () =>
      import('./autenticacao/autentica').then((c) => c.Autentica),
    canActivate: [autenticacaoGuard],
  },

  { path: '', redirectTo: 'MenuGeral', pathMatch: 'full' },
  //{ path: '**', component: NaoEncontrado },
  {
    path: '**',
    loadComponent: () =>
      import('./nao-encontrado/nao-encontrado').then((c) => c.NaoEncontrado),
  },
];
