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

  redirectToDetails(e: Event, btn: HTMLButtonElement, id: number) {
    if (e.target != btn) {
      this.router.navigate(['product-details', id]);
    }
  }

  ngOnInit() {
    this.cartProductsService
      .getcartProducts()
      .subscribe((data) => (this.cartProducts = data));
  }

  addToCartF(product: Product, btn: HTMLButtonElement) {
    this.cartProductsService.setcartProducts(product);
    btn.textContent = 'Added To Cart';
    btn.style.backgroundColor = 'rgb(26, 174, 201)';
    btn.style.border = 'rgb(26, 174, 201)';
  }
}
