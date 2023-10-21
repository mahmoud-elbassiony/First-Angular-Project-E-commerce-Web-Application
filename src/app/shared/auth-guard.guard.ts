import { Injectable, inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedInService } from './services/logged-in.service';

// @Injectable()
// export class AuthGuard implements CanActivateFn {
//   constructor(private router: Router) {}

//   CanActivateFn( route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot) :Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
//     const isAuthenticated = localStorage.getItem('auth-token')

//     if (!isAuthenticated) {
//       this.router.navigate(['/login']);
//       return false;
//     }

//     return true;
//   }
// }

// export class AuthGuard implements CanActivate {
//   constructor(
//       private authService: LoggedInService,
//       private router: Router
//   ) { }

//    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//        return this.authService..pipe(
//            map(isLoggedIn => {
//                if (isLoggedIn) {
//                    return isLoggedIn;
//                } else {
//                    // Store the attempted url to redirect to later if user ends up being authenticated
//                    this.authService.redirectUrl = state.url;
//                    // Redirect to unauthenticated url
//                    this.router.navigate([this.authService.UNAUTHENTICATED_REDIRECT_URL]);
//                    return isLoggedIn;
//                }
//            })
//        );
//    }
// }

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (!localStorage.getItem('auth-token')) {
    router.navigate(['./login']);
    return false;
  }
  return true;
};
