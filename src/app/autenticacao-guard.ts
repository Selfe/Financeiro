import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autenticacaoGuard: CanActivateFn = (route, state) => {
  //return false;

  // utilizando o router core
  const router = inject(Router);
  // acesso
  const acesso = false;
  //
  // uma condicao
  if (acesso) {
    return true;
  } else {
    router.navigate(['MenuGeral/falhaAcesso']);
    return false;
  }
};
