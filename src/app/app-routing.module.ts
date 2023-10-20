import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsListComponent } from './products-module/products-list/products-list.component';

import { ProductDetailsComponent } from './products-module/product-details/product-details.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CartComponent } from './products-module/cart/cart.component';
import { LogInComponent } from './auth-md/log-in/log-in.component';
import { RegisterComponent } from './auth-md/register/register.component';
import { authGuardGuard } from './shared/auth-guard.guard';
import { ProfileComponent } from './shared/profile/profile.component';
import { LogOutComponent } from './auth-md/log-out/log-out.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'logOut',
    component: LogOutComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [authGuardGuard],
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
