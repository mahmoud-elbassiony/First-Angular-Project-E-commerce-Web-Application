import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('auth-token')) {
    return true;
  }
  return false;
};
