import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterLink } from '@angular/router';
// componenets
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

// Pipes
import { DiscountPipe } from './pipes/discount/discount.pipe';

@NgModule({
  declarations: [
    ProductsListComponent,
    CartComponent,
    ProductDetailsComponent,
    ProductComponent,
    DiscountPipe,
  ],
  imports: [CommonModule, SharedModule, RouterLink],
  exports: [
    ProductsListComponent,
    CartComponent,
    ProductDetailsComponent,
    ProductComponent,
  ],
})
export class ProductsModuleModule {}
