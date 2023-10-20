import { Component, Input } from '@angular/core';
import { Product } from '../interfacs/product';
import { Router } from '@angular/router';
import { CartProdcutsService } from '../services/cart-prodcuts.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() productItem!: Product;
  cartProducts!: Product[];

  constructor(
    private router: Router,
    private cartProductsService: CartProdcutsService
  ) {}

  redirectToDetails(e: any, btn: any, id: any) {
    if (e.target != btn) {
      this.router.navigate(['product-details', id]);
    }
  }

  ngOnInit() {
    this.cartProductsService
      .getcartProducts()
      .subscribe((data) => (this.cartProducts = data));
  }

  addToCartF(product: Product) {
    this.cartProductsService.setcartProducts(product);
  }
}
